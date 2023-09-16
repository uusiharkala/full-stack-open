import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (<button onClick={props.handleClick}>
        {props.text}
    </button>
    )
    }

    
const Statistic = (props) => {
    if (props.text === "positive") {
        return (
         <tbody>
            <tr>
                <td>{props.text}</td>
                <td>{props.value} %</td>
             </tr>
        </tbody>
        )
    }
    return (
        <tbody>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
             </tr>
        </tbody>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
        <table>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good + neutral + bad}/>
        <Statistic text="average" value={ (good - bad ) / (good + neutral + bad)}/>
        <Statistic text="positive" value={(good / (good + neutral + bad))*100 }/>
        </table>
    )
    }

    return (
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const App = (props) => {
    

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = newGood => {
        setGood(newGood)
    }

    const updateNeutral = newNeutral => {
     setNeutral(newNeutral)
    }

    const updateBad = newBad => {
        setBad(newBad)
    }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => updateGood(good + 1)} text="good" />
      <Button handleClick={() => updateNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => updateBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )


}

ReactDOM.render(<App />, 
  document.getElementById('root')
)