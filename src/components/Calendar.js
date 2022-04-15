import React, { useMemo, useState } from 'react'
import './Calendar.css'
import ModalComponent from './ModalComponent'

import { getWeekDays, getWeeks } from '../utils/date-fnsInfo'
import Week from './Week'
import axios from 'axios'

function Calendar() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const now = new Date()
  const date = now
  const weekDays = getWeekDays()
  const weeks = useMemo(() => getWeeks(date), [date])

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
    </div>
  )
}

export default Calendar
