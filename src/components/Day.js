import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import Card from 'react-bootstrap/Card'
import './Day.css'

const Day = ({ day, isWeekend, isToday, isThisMonth }) => {
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
    </div>
  )
}

export default Day
