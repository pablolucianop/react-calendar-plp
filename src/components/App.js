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

  // React:
  class Presentational extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        input: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitMessage = this.submitMessage.bind(this)
    }
    handleChange(event) {
      this.setState({
        input: event.target.value,
      })
    }
    submitMessage() {
      this.props.submitNewMessage(this.state.input)
      this.setState({
        input: '',
      })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input value={this.state.input} onChange={this.handleChange} />
          <br />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {console.log('this.props.messages', this.props.messages)}
            {this.props.messages.map((message, idx) => {
              return <li key={idx}>{message.city}</li>
            })}
          </ul>
        </div>
      )
    }
  }

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

  const Container = connect(
    mapStateToProps
    // mapDispatchToProps
  )(Presentational)

  return (
    // <Provider store={store}>

    <Provider store={store}>
      <Container />
      <div className="App">
        <Calendar />
      </div>
    </Provider>

    // </Provider>
  )
}

export default App
