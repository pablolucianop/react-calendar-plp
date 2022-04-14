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

const SELECT = 'SELECT'
const addElement = (selected) => {
  return {
    type: SELECT,
    selected: selected,
  }
}

const initialState = {
  reminders: [],
  interactions: [],
}

// [...state, action.message]

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        reminders: [...state.reminders, action.message],
        interactions: [...state.interactions],
      }
    case SELECT:
      console.log('messageReducer', state)
      return {
        reminders: [...state.reminders],
        interactions: [...state.interactions, action.selected],
      }
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
    return { messages: state.reminders }
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
