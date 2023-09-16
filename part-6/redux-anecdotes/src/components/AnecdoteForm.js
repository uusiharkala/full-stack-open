import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notifChange } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(newAnecdote)
    props.notifChange('New anecdote added!')
      setTimeout(() => {
        props.notifChange(null)
      }, 5000)

  }


  return (
    <div>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
    </div>
    )
}

const mapDispatchToProps = {
  createAnecdote,
  notifChange
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)