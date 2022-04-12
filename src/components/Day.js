import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import Card from 'react-bootstrap/Card'
import './Day.css'

const Day = (props) => {
  const { day } = props

  return <div className="day">{getDayNumber(day)}</div>
}

export default Day
