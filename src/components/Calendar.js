import React, { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import './Calendar.css'

import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'
import Week from './Week'
import axios from 'axios'

function Calendar() {
  const now = new Date()
  const date = now
  const weekDays = getWeekDays()
  const weeks = useMemo(() => getWeeks(date), [date])

  const getResponse = async () => {
    try {
      const response = await axios.get('url')
    } catch (err) {
      console.log('err')
    }
  }
  console.log(getResponse)

  //pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}
  //pro.openweathermap.org/data/2.5/forecast/climate?q=Rosario&appid=88311788ed96ee764097bb269c07c5f7
  //api.openweathermap.org/data/2.5/weather?q=Rosario&units=imperial&appid=88311788ed96ee764097bb269c07c5f7

  return (
    <div className="grid-container">
      <div>
        <div className="days-of-week columns7">
          {weekDays.map((day) => (
            <div className="day-of-week" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="weeks">
          {weeks.map((week) => (
            <Week key={week} date={date} week={week} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
