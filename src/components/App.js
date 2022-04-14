// import { Provider } from 'react-redux'
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

console.log('datero', Date.now())

// const messageReducer = () => {
//   return {
//     messages: [1, 2],
//   }
// }

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      console.log('action', action)
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

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     submitNewMessage: (message) => {
  //       dispatch(addMessage(message))
  //     },
  //   }
  // }

  return (
    // <Provider store={store}>

    <Provider store={store}>
      <div className="app">
        <Calendar />
      </div>
    </Provider>

    // </Provider>
  )
}

export default App
