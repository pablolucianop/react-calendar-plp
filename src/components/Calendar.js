import React, { useMemo } from 'react'
import './Calendar.css'
import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'
import Day from './Day'

function Calendar() {
  const now = new Date()
  const date = now
  const weekDays = getWeekDays()
  const weeks = useMemo(() => getWeeks(date), [date])

  return (
    <h1>
      Calendar
      <div className="days-of-week">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="weeks">
        {weeks.map((week) => (
          <div key={week}>
            {getDays(week).map((day) => (
              <Day key={day} />
            ))}
          </div>
        ))}
      </div>
    </h1>
  )
}

export default Calendar
