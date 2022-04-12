import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import Card from 'react-bootstrap/Card'
import './Day.css'

const Day = ({ day, isWeekend, isToday, isThisMonth }) => {
  return (
    <div
      className={`day
                 ${isToday && 'today-background'}
                 ${isThisMonth ? 'abled-text' : 'disabled-text'}
                 ${isWeekend && 'accent-Color-text'}
                 ${isWeekend && 'gray-background'}
        `}
    >
      {getDayNumber(day)}
    </div>
  )
}

export default Day
