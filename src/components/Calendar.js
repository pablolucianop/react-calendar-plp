import React from 'react'
import './Calendar.css'
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  eachWeekOfInterval,
  format as formatFn,
} from 'date-fns'

function Calendar() {
  const now = new Date()
  const getDayNumber = (date = now) => formatFn(date, 'd')
  console.log(getDayNumber())
  const greeting = 'Calendar'

  return <h1>{}</h1>
}

export default Calendar
