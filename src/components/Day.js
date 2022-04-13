import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import ReminderEditor from './ReminderEditor'
import './Day.css'
import { connect } from 'react-redux'
import AddReminder from './AddReminder'
import Reminder from './Reminder.js'

const Day = ({ day, isWeekend, isToday, isThisMonth, messages }) => {
  const getWeatherFromCityInDate = async (city, date) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial&date=${date}`
    )
    const data = await response.json()
    return data
  }
  //   const ww = getWeatherFromCityInDate('rosario', '05/11/2022')

  //   console.log('ww', ww)

  return (
    <div
      className={`day
                 ${isToday && 'today-background'}
                 ${isWeekend && 'gray-background'}
                 ${isWeekend & isThisMonth ? 'accent-Color-text' : ''}
                 ${!isThisMonth && 'disabled-text'}
        `}
    >
      {getDayNumber(day)}
      {console.log('DAYYS props.messages', day, messages)}

      {/* <Reminder /> */}
      {messages.map((rem) => (
        <div className="-" key={'day'}>
          {rem.city}
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return { messages: state }
}

export default connect(mapStateToProps)(Day)
