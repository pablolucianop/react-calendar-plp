import React, { useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Calendar.css'
import ReminderEditor from './ReminderEditor'
import ModalComponent from './ModalComponent'

import {
  getDays,
  getDayNumber,
  getWeekDays,
  getWeeks,
} from '../utils/date-fnsInfo'
import Week from './Week'
import axios from 'axios'

function Calendar() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

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

  return (
    <div className="calendar">
      <div className="grid-container">
        <div>
          <div className="days-of-week columns7">
            {weekDays.map((dayInArr) => (
              <div className="day-of-week" key={dayInArr}>
                {dayInArr}
              </div>
            ))}
          </div>
          <div className="weeks">
            {weeks.map((week) => (
              <Week
                key={week}
                date={date}
                week={week}
                handleShow={handleShow}
                show={show}
              />
            ))}
          </div>
        </div>
      </div>
      <ModalComponent test={'test'} show={show} setShow={setShow} />
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>
      {/* <ReminderEditor test={'test'} /> */}
    </div>
  )
}

export default Calendar
