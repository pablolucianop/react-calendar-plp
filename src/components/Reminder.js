import React from 'react'
import { connect } from 'react-redux'
import './Reminder.css'
import Weather from './Weather'
const Reminder = ({
  city,
  reminderText,
  date,
  color,
  time,
  show,
  isTheMainDay,
  dispatch,
  key,
  handleShow,
}) => {
  const handleSubstract = () => {
    dispatch({ type: 'SUBSTRACT', key: `reminder-1` })
  }

  const handleRemimderClick = () => {
    handleShow()
    dispatch({ type: 'SELECTREMINDER', selectedReminder: key })
  }

  const reminderBig = (
    <div onClick={handleSubstract}>
      <div>{reminderText}</div>
      <div>{date}</div>
      <div>{time}</div>
      <div>
        {city} <Weather city={city} />
      </div>
    </div>
  )

  const reminderSmall = (
    <div className={'reminderSmall'}>
      {time} {reminderText} <Weather city={city} />
    </div>
  )

  return (
    <div
      className="reminder-container"
      onClick={handleRemimderClick}
      style={{
        backgroundColor: color,
        transition: 'ease all 500ms',
      }}
    >
      {show && isTheMainDay ? reminderBig : reminderSmall}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.reminders,
    interactions: state.interactions,
    selectedReminder: state.selectedReminder,
  }
}

export default connect(mapStateToProps)(Reminder)
