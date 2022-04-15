import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import ReminderEditor from './ReminderEditor'
import './Day.css'
import { connect } from 'react-redux'
import AddReminder from './AddReminder'
import Reminder from './Reminder.js'
import Button from 'react-bootstrap/Button'

const Day2 = ({ day, handleShow, dispatch }) => {
  const handleDayClick = () => {
    dispatch({ type: 'SELECTREMINDER', selectedReminder: day })
    handleShow()
  }

  return (
    <div onClick={handleDayClick}>
      <div>AAAA</div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { messages: state.reminders, interactions: state.interactions }
}

export default connect(mapStateToProps)(Day2)
