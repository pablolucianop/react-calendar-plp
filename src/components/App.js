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
const addElementSL = (selectedReminder) => {
  return {
    type: SELECTREMINDER,
    selectedReminder: selectedReminder,
  }
}

const initialState = {
  reminders: [
    // {
    //   color: '',
    //   reminderText: ' ',
    //   city: '',
    //   date: '',
    //   time: '12:00',
    //   key: 'reminder-0',
    //   dateJs: '',
    // },
  ],
  interactions: [],
  selectedReminder: '',
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const added = [...state.reminders, action.message]
      console.log('added: ', added)
      const sortedReminders = added.sort((a, b) => a.time.localeCompare(b.time))

      return {
        reminders: sortedReminders,
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions],
      }
    case SUBSTRACT:
      return {
        reminders: [
          ...state.reminders.filter((reminder) => reminder.key !== action.key),
        ],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions],
      }
    case SELECT:
      console.log('stateRos', state)
      return {
        reminders: [...state.reminders],
        selectedReminder: state.selectedReminder,
        interactions: [...state.interactions, action.selected],
      }
    case SELECTREMINDER:
      console.log('stateRos', state)
      return {
        reminders: [...state.reminders],
        selectedReminder: action.selectedReminder,
        interactions: [...state.interactions],
      }

    default:
      return state
  }
}

const store = createStore(messageReducer)

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
