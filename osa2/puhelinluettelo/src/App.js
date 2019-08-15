import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import axios from 'axios'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notif">
      {message}
    </div>
  )
}

const ErorrMessage = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const Filter = (props) => {
  return (
  <div>
     filter shown with <input value={props.newFilter}
     onChange={props.handleFilterChange}/>
  </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addName}>
    <div>
      name: <input value={props.newName}
      onChange={props.handleNameChange}
      />
    </div>
    <div>
      number: <input value={props.newNumber}
      onChange={props.handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = (props) => {

  const handleRemove = (name) => {
      const id = props.persons.find(per => per.name === name).id
      const result = window.confirm(`Delete ${name} ?`)  
      if (result) {
        personService
          .remove(id)
          .then(() => {
            const updatedPersons = props.persons.filter( (person) => {
                return person.name !== name
            })
            props.setPersons(updatedPersons)
            props.setNotification(
              `Deleted ${name}`
            )
            setTimeout(() => {
              props.setNotification(null)
            }, 5000)
          })
      }
  } 



  const rows = () => {
    if (props.newFilter.length === 0) {
      return (
        props.persons.map( person =>
          <div key={person.name}> {person.name} {person.number} 
            <button onClick={() => handleRemove(person.name)}>delete</button>
          </div>
          )
      )
    } 
      return (
        props.persons.filter( function(person) {
          return person.name.toUpperCase().includes(props.newFilter.toUpperCase())
        }).map( person =>
          <div key={person.name}> {person.name} {person.number} 
            <button onClick={() => handleRemove(person.name)}>delete</button>
          </div>
          )
      )
  }

  return (
    rows()
  )
}

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setError] = useState(null)

useEffect( () => {
  personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
}, [])

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

const addName = (event) => {
  event.preventDefault()
  const nameObject = {
    name: newName,
    number: newNumber
  }
  if (persons.map(person => person.name).includes(newName)) {
    const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    if (result) {
      const id = persons.find(per => per.name === newName).id
      const url = `http://localhost:3001/api/persons/${id}`
      axios.put(url, nameObject).then(response => {
          setPersons(persons.map(per => per.name !== newName ? per : response.data))
          setNewName('')
          setNewNumber('')
          setNotification(
            `Updated ${nameObject.name}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
      }).catch(error => {
        setError(
          `Information of ${nameObject.name} has already been removed from server`
        )
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
    }
  } else {
    personService
      .create(nameObject)
      .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setNotification(
            `Added ${nameObject.name}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
      })
  }
  
}
  
  return (
    <div>
      <h2>Phonebook</h2>
        <ErorrMessage message={errorMessage}/>
        <Notification message={notification} />
        <Filter newFilter={newFilter}
        handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
        <PersonForm addName={addName} newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
        <Persons newFilter={newFilter} setPersons={setPersons}
         persons={persons} setNotification={setNotification}/>
    </div>
    
  )

}

export default App