import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notifChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const handleVote = (anecdote) => {
    props.vote(anecdote.id)
    props.notifChange(`You voted '${anecdote.content}'`)
    setTimeout(() => {
      props.notifChange(null)
    }, 5000)
  }

  return (
    <div>
      {anecdotes
        .filter( anecdote => {
          return anecdote.content.toUpperCase().includes(props.filter.toUpperCase())
        })
        .sort( (a,b) => b.votes - a.votes )
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>)
        }
    </div>
  )
}

const mapDispatchToProps = {
  vote,
  notifChange
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)