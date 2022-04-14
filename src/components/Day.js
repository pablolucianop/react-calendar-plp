import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import ReminderEditor from './ReminderEditor'
import './Day.css'
import { connect } from 'react-redux'
import AddReminder from './AddReminder'
import Reminder from './Reminder.js'
import Button from 'react-bootstrap/Button'

const Day = ({
  day,
  isWeekend,
  isToday,
  isThisMonth,
  messages,
  handleShow,
  show,
  isTheMainDay,
  dispatch,
}) => {
  const getWeatherFromCityInDate = async (city, date) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial&date=${date}`
    )
    const data = await response.json()
    return data
  }

  const numberOfDay = getDayNumber(day)

  const handleDayClick = () => {
    dispatch({ type: 'SELECT', selected: day })
    handleShow()
  }

  return (
    <div
      className={`day scroll1 scroll2
                 ${isToday && 'today-background'}
                 ${isWeekend && 'gray-background'}
                 ${isWeekend & isThisMonth ? 'accent-Color-text' : ''}
                 ${!isThisMonth && 'disabled-text'}
                 ${show && isTheMainDay && 'main-day'}
        `}
      onClick={handleDayClick}
    >
      <div className="number-of-day">{numberOfDay}</div>

      {messages.map((rem) => (
        <div className="-" key={rem.key}>
          <Reminder
            reminderText={rem.reminderText}
            date={rem.date}
            city={rem.city}
            color={rem.color}
            time={rem.time}
            show={show}
          />
        </div>
      ))}
      {show && isTheMainDay && (
        <Button
          variant="primary"
          size="sm"
          className="buttonInDay"
          //  onClick={handleShow}
        >
          +
        </Button>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return { messages: state.reminders, interactions: state.interactions }
}

export default connect(mapStateToProps)(Day)
