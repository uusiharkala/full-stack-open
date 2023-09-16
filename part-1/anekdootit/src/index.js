import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [taulukko, setTaulukko] = useState([0,0,0,0,0,0])
  const [paras, setParas] = useState(0)

  const setToIndex = () => {
      let index = Math.floor(Math.random() * Math.floor(6))
      setSelected(index)
  }

  const updateParas = (newIndex) => {
    setParas(newIndex)
  }

  const voteSelected = index => {
    const copy = {...taulukko}
    copy[index] += 1
    setTaulukko(copy)
    if (taulukko[index] >= taulukko[paras]) {
        updateParas(index)
    }
  }
  

  return (
     <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {taulukko[selected]} votes</p>
      <Button handleClick={() => voteSelected(selected)} text="vote" />
      <Button handleClick={() => setToIndex()} text="next anectode" />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[paras]}</p>
      <p>has {taulukko[paras]} votes</p>

    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)