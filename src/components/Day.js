import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import Card from 'react-bootstrap/Card'
import './Day.css'
import AddReminder from './AddReminder'
import Reminder from './Reminder.js'

const Day = ({ day, isWeekend, isToday, isThisMonth }) => {
  // create an async await function that takes a string, and a date formates mm/dd/yyyy as parameters, and ask Open Weather Map for the weather for that date on the city
  //that is passed as a string parameter. If it doesnt find the city, it will return an error message.
  const getWeatherFromCityInDate = async (city, date) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial&date=${date}`
    )
    const data = await response.json()
    return data
  }
  const ww = getWeatherFromCityInDate('rosario', '05/11/2022')

  console.log('ww', ww)

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
      <Reminder />
      <AddReminder />
    </div>
  )
}

export default Day
