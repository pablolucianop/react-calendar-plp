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

  const jsToDate = (jsDate) => {
    return new Date(jsDate).toISOString().split('T')[0]
  }

  const handleDayClick = () => {
    dispatch({ type: 'SELECT', selected: day })
    handleShow()
  }

  function compareToDay(a) {
    if (a !== undefined && a.date.substring(8, 10) === numberOfDay.toString()) {
      return true // jsToDate(a) === jsToDate(day)
    }
  }

  const result = messages.filter(compareToDay)

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
      <div
        className={`number-of-day
       ${show && isTheMainDay && 'abled-text'}`}
      >
        {numberOfDay}
      </div>

      {result.map((rem) => (
        <Reminder
          reminderText={rem.reminderText}
          date={rem.date}
          city={rem.city}
          color={rem.color}
          time={rem.time}
          show={show}
          isTheMainDay={isTheMainDay}
          key={rem.key}
          handleShow={handleShow}
        />
        // </div>
      ))}
      {show && isTheMainDay && (
        <Button variant="primary" size="sm" className="buttonInDay">
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
