import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2>
                {props.course}
            </h2>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
          <p>
            {props.part} {props.excercise}   
          </p>
        </div>
    )
}

const Content = (props) => {
    const rows = () => props.parts.map( osa =>
            <Part key={osa.id} part={osa.name} excercise={osa.exercises}/>
    )
    return (
        <div>
              {rows()}
        </div>
    )
}

const Total = (props) => {
    const total = props.parts.map( osa => osa.exercises)
    const sum = total.reduce( (acc, currValue) =>  {
        return acc + currValue
    },0)
    return (
        <div>
            <b>
               total of {sum} exercises
            </b>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
         <Header course={props.course.name} />
         <Content parts={props.course.parts}/>
         <Total parts={props.course.parts} />
        </div>
    )
}


export default Course