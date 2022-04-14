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
  console.log(getResponse)

  //pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}
  //pro.openweathermap.org/data/2.5/forecast/climate?q=Rosario&appid=88311788ed96ee764097bb269c07c5f7
  //api.openweathermap.org/data/2.5/weather?q=Rosario&units=imperial&appid=88311788ed96ee764097bb269c07c5f7

  return (
    <div>
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
              />
            ))}
          </div>
        </div>
      </div>
      <ModalComponent test={'test'} show={show} />
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>
      {/* <ReminderEditor test={'test'} /> */}
    </div>
  )
}

export default Calendar
