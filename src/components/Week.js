import React, { useMemo } from 'react'
import { isSameDay, isSameMonth, isWeekend } from 'date-fns'
import './Week.css'

import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'

import Day from './Day'

const Week = (props) => {
  const { date, week } = props

  const days = useMemo(() => getDays(week), [week])

  const now = new Date()

  return (
    <div
      className="Week"
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {days.map((day) => (
        <Day
          key={day}
          day={day}
          date={date}
          isWeekend={isWeekend(day)}
          isToday={isSameDay(day, now)}
          isCurrentMonth={isSameMonth(day, date)}
        />
      ))}
    </div>
  )
}

export default Week
