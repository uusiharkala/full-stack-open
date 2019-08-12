import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Languages = (props) => {
  return (
    props.languages.map( lang => {
     return <li key={lang.name}> {lang.name} </li>
    })
  )
}

const ShowCountry = (props) => {
  const [ weather, setWeather ] = useState({})
  const maa = props.maa

  useEffect(() => {
    axios
      .get(`http://api.apixu.com/v1/current.json?key=<YOUR API KEY HERE>&q=${maa.capital}}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [maa.capital])

  return (
    <div>
      <h2>{maa.name}</h2>
      <div>capital {maa.capital}</div>
      <div>population {maa.population}</div>
      <h3>languages</h3>
      <ul>
        <Languages languages={maa.languages} />
      </ul>
      <img src={maa.flag} width='150' alt="Flag of the country"/>
      <h3>Weather in {maa.capital}</h3>
      <div>
        <b>temperature: </b>
        {weather.temp_c} Celsius
      </div>
      {weather.condition && <img src={weather.condition.icon} alt="Weather icon" />}
      <div>
        <b>wind: </b>
        {weather.wind_kph} kph direction {weather.wind_dir}
      </div>
    </div>
    )
}

const App = () => {


  const [ countries, setCountries ] = useState([])
  const [ newName, setNewName ] = useState('')


  const endPoint = 'https://restcountries.eu/rest/v2/all'


  useEffect(() => {
    axios
      .get(endPoint)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => { 
      setNewName(event.target.value)
  }

  const handleClick = (maa) => {
    setNewName(maa)
  }

  const rows = () => {
    if (newName.length === 0) {
      return <div>Too many matches, specify another filter</div>
    }
    const maat = countries.map( maa => 
      maa.name
    ).filter(function(maa) {
      return maa.toUpperCase().includes(newName.toLocaleUpperCase())
    })
    if (maat.length > 9) {
      return <div>Too many matches, specify another filter</div>
    }

    if (maat.length > 1) {
      return (
        maat.map( maa => {
          return (<div key={maa}>
          {maa}
          <button onClick={() => handleClick(maa)}> show </button>
          </div>  )
        }
          )
      )
    }
    if (maat.length === 1) {

    const maa = countries.filter(function(country) {
      return country.name.toUpperCase() === maat[0].toUpperCase()
    })[0]

     return (
       <div>
         <ShowCountry maa={maa}/>
       </div>
      )

     }

     return <div>No countries which contain: {newName}</div>

  }

  return (
    <div>
       find countries <input value={newName}
        onChange={handleChange}/>
        {rows()}
    </div>
  )

}

export default App;
