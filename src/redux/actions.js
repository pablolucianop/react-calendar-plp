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