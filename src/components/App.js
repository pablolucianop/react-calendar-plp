import React from 'react'
import './App.css'
import Calendar from './Calendar'
import Weather from './Weather'
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

const SUBSTRACT = 'SUBSTRACT'
const substrackReminder = (key) => {
  return {
    type: SUBSTRACT,
    key: key,
  }
}

const SELECT = 'SELECT'
const addElement = (selected) => {
  return {
    type: SELECT,
    selected: selected,
  }
}

const SELECTREMINDER = 'SELECTREMINDER'
const selectReminder = (selectedReminder) => {
  return {
    type: SELECT,
    selectedReminder: selectedReminder,
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
    case SUBSTRACT:
      console.log('action.key', action.key)
      return {
        reminders: [],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions],
      }
    case SELECT:
      return {
        reminders: [...state.reminders],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions, action.selected],
      }
    case SELECTREMINDER:
      return {
        reminders: [...state.reminders],
        selectedReminder: '',
        interactions: [...state.interactions, action.selected],
      }
    default:
      return state
  }
}

const store = createStore(messageReducer)
// store.dispatch({ type: 'ADD', message: '' })

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
