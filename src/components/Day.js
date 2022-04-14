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
}) => {
  const getWeatherFromCityInDate = async (city, date) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial&date=${date}`
    )
    const data = await response.json()
    return data
  }
  //   const ww = getWeatherFromCityInDate('rosario', '05/11/2022')
  const numberOfDay = getDayNumber(day)
  console.log('handleShow', handleShow)

  return (
    <div
      className={`day scroll1 scroll2
                 ${isToday && 'today-background'}
                 ${isWeekend && 'gray-background'}
                 ${isWeekend & isThisMonth ? 'accent-Color-text' : ''}
                 ${!isThisMonth && 'disabled-text'}
        `}
      onClick={handleShow}
    >
      {numberOfDay}
      {console.log('DAYYS messages', day, messages)}

      {/* (function (rem) {
  return rem.faction === "Rebels";
}) */}

      {/* <Reminder /> */}
      {messages.map((rem) => (
        <div className="-" key={rem.key}>
          <Reminder
            reminderText={rem.reminderText}
            date={rem.date}
            city={rem.city}
            color={rem.color}
            time={rem.time}
          />
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return { messages: state }
}

export default connect(mapStateToProps)(Day)
