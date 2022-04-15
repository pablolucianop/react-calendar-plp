import React from 'react'
import { connect } from 'react-redux'
import './Reminder.css'
import Weather from './Weather'
import CloseButton from 'react-bootstrap/CloseButton'
const Reminder = ({
  city,
  reminderText,
  date,
  color,
  time,
  show,
  isTheMainDay,
  dispatch,
  keyReminder,
  handleShow,
}) => {
  const handleSubstract = () => {
    dispatch({ type: 'SUBSTRACT', key: keyReminder })
  }

  const handleEdit = () => {
    dispatch({ type: 'SELECTREMINDER', selectedReminder: keyReminder })
  }

  console.log('Reminder: ', keyReminder)
  const handleRemimderClick = () => {
    handleShow()
    // dispatch({ type: 'SELECTREMINDER', selectedReminder: key })
  }

  const reminderBig = (
    <div onClick={handleEdit}>
      <div>
        {reminderText}{' '}
        <CloseButton className="close-button" onClick={handleSubstract} />
      </div>
      <div>{date}</div>
      <div>
        {time}
        {keyReminder}
      </div>
      <div>
        {city} {city !== '' && <Weather city={city} date={date} />}
      </div>
    </div>
  )

  const reminderSmall = (
    <div className={'reminderSmall'}>
      {time} {reminderText} {city !== '' && <Weather city={city} date={date} />}
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
