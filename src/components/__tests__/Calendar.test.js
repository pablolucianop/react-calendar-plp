import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar'
// import Week from './Week'
// import ReminderEditor from './ReminderEditor'
// import ModalComponent from './ModalComponent'
// import Reminder from './Reminder'
// import AddReminder from './AddReminder'
// import Button from 'react-bootstrap/Button'
// import { connect } from 'react-redux'
// import {
//     getDays,
//     getDayNumber,
//     getWeekDays,
//     getWeeks,
// } from '../utils/date-fnsInfo'
// import {
//     getWeatherFromCityInDate,
//     getWeatherFromCity,
//     getWeatherFromCityInRange,

//     getWeatherFromCityInRangeWithDate,
// } from '../utils/weather-fnsInfo'

import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calendar', () => {
  it('must render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calendar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should create a reminder including day, time and city', () => {
    const { getByTestId, getByText } = render(<Calendar />)

    fireEvent(
      getByText(Calendar, '1'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    fireEvent(
      getByTextId(Calendar, 'formBasicReminder'),
      new InputEvent('input', {
        bubbles: true,
        cancelable: true,
      })
    )
    // Click add reminder button
    fireEvent.click(screen.getByTextId('Add reminder'))

    // Confirm the reminder
    fireEvent.input(getByText('Add'))

    // Verify the render of the reminder
    expect(getByTestId('mini-reminder')).toBeInTheDocument()
  })
})
