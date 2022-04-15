import React, { useMemo } from 'react'
import { isSameDay, isSameMonth, isWeekend } from 'date-fns'
import './Week.css'
import Day from './Day'

import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'

const Week = ({ date, week, handleShow, show }) => {
  const days = useMemo(() => getDays(week), [week])

  const now = new Date()

  return (
    <div className="columns7 columns7borders">
      {days.map((day) => (
        <Day
          key={day}
          day={day}
          date={date}
          isWeekend={isWeekend(day)}
          isToday={isSameDay(day, now)}
          isThisMonth={isSameMonth(day, date)}
          handleShow={handleShow}
          show={show}
        />
      ))}

      {/* <Day2
        key={days[0]}
        day={days[0]}
        date={date}
        isWeekend={isWeekend(days[0])}
        isToday={isSameDay(days[0], now)}
        isThisMonth={isSameMonth(days[0], date)}
        handleShow={handleShow}
        show={show}
      /> */}
    </div>
  )
}

export default Week
