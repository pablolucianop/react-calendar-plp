import React from 'react'
import './App.css'
import Calendar from './Calendar'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Redux:
const ADD = 'ADD'

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]
    default:
      return state
  }
}

const store = createStore(messageReducer)
store.dispatch({ type: 'ADD', message: 'hola' })

function App() {
  const calendar = <Calendar />

  // React-Redux

  const mapStateToProps = (state) => {
    return { messages: state }
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Calendar />
      </div>
    </Provider>
  )
}

export default App
