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

  function add(str) {
    return str.toString().length === 1 ? (str = '0' + str) : str
  }
  const numberOfDay = getDayNumber(day)
  const numberOfMonth = add(day.getMonth() + 1)

  console.log('numberOfMonth', numberOfMonth)

  const jsToDate = (jsDate) => {
    return new Date(jsDate).toISOString().split('T')[0]
  }

  const handleDayClick = () => {
    dispatch({ type: 'SELECT', selected: day })
    handleShow()
  }

  function jsDateToDdMmYyyy(jsDate) {
    const day = new Date(jsDate).toISOString().split('T')[0].substring(8, 10)
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    return `${year}-${month}-${day}`
  }
  const string = 'Thu Apr 14 2022 22:59:18 GMT-0300 (hora estándar de Argentina'
  console.log('hhh frand', jsDateToDdMmYyyy(string))

  function compareToDay(a) {
    if (a !== undefined) {
      const numberOfDayOfArray = a.date.substring(8, 10)
      const numberOfMonthOfArray = a.date.substring(5, 7)

      const numberOfMonthOfComponent = numberOfMonth
      const numberOfDayOfComponent = numberOfDay
      const aD = `${numberOfMonthOfComponent}-${numberOfDayOfComponent}`
      const bD = `${numberOfMonthOfArray}-${numberOfDayOfArray}`
      console.log('eeew', bD, aD)

      console.log('numberOfMonthOfArray', numberOfMonthOfArray)
      if (bD === aD) {
        return true
      }
    }
  }

  const jsToDate22 = (jsDate) => {
    return new Date(jsDate).toISOString().split('T')[0]
  }

  function sameDay(a) {
    if (a !== undefined && jsDateToDdMmYyyy(a.date) === jsDateToDdMmYyyy(day)) {
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
                 ${show && isTheMainDay && 'extra-height'}
        `}
      onClick={handleDayClick}
    >
      <div
        className={`number-of-day
       ${show && isTheMainDay && 'abled-text'}'}`}
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
          keyReminder={rem.key}
          handleShow={handleShow}
          key={rem.key}
        />
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
