import React, { useMemo } from 'react'
import './Calendar.css'
import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'
import Week from './Week'

function Calendar() {
  const now = new Date()
  const date = now
  const weekDays = getWeekDays()
  const weeks = useMemo(() => getWeeks(date), [date])

  return (
    <div className="grid-container">
      <h1>
        Calendar
        <div className="days-of-week columns7">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="weeks">
          {weeks.map((week) => (
            <Week key={week} date={date} week={week} />
          ))}
        </div>
      </h1>
    </div>
  )
}

export default Calendar
