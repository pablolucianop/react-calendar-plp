import React, { useCallback, useState } from 'react'
import { getDayNumber } from '../utils/date-fnsInfo'
import ReminderEditor from './ReminderEditor'
import './Day.css'
import { connect } from 'react-redux'
import AddReminder from './AddReminder'
import Reminder from './Reminder.js'
import Button from 'react-bootstrap/Button'

const Day = ({
  day,
  isWeekend,
  isToday,
  isThisMonth,
  messages,
  handleShow,
  show,
  isTheMainDay,
  dispatch,
}) => {
  const getWeatherFromCityInDate = async (city, date) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial&date=${date}`
    )
    const data = await response.json()
    return data
  }

  const numberOfDay = getDayNumber(day)

  const jsToDate = (jsDate) => {
    return new Date(jsDate).toISOString().split('T')[0]
  }

  const handleDayClick = () => {
    dispatch({ type: 'SELECT', selected: day })
    handleShow()
    // console.log('333 ///////')
    // console.log('333 day', day)
    // console.log('333 jsToDate', jsToDate(day))
    // console.log('333 messages[0].jsDate', messages[0].dateJs)
    // console.log(
    //   '333 jsToDate(messages[0].dateJs)',
    //   jsToDate(messages[0].dateJs)
    // )
  }

  function compareToDay(a) {
    // return true
    if (a !== undefined && a.date.substring(8, 10) === numberOfDay.toString()) {
      return true // jsToDate(a) === jsToDate(day)
    }
  }

  const result = messages.filter(compareToDay)
  console.log('333 result', result)
  // function checkSameDay(reminderDay) {
  //   if (typeof messages[0] != 'undefined') {
  //     console.log('messages', messages[0])

  //     const ee = new Date().toISOString().split(reminderDay)[0].substring(0, 10)
  //     console.log('ee', ee)
  //     const ee2 = new Date().toISOString().split(day)[0].substring(0, 10)
  //     console.log('ee2', ee2)
  //     return ee === ee2
  //   }
  // }

  // const result = messages.filter(checkSameDay)

  return (
    <div
      className={`day scroll1 scroll2
                 ${isToday && 'today-background'}
                 ${isWeekend && 'gray-background'}
                 ${isWeekend & isThisMonth ? 'accent-Color-text' : ''}
                 ${!isThisMonth && 'disabled-text'}
                 ${show && isTheMainDay && 'main-day'}
        `}
      onClick={handleDayClick}
    >
      <div className="number-of-day">{numberOfDay}</div>

      {result.map((rem) => (
        // <div className="-" key={rem.key}>
        <Reminder
          reminderText={rem.reminderText}
          date={rem.date}
          city={rem.city}
          color={rem.color}
          time={rem.time}
          show={show}
          isTheMainDay={isTheMainDay}
          key={rem.key}
          handleShow={handleShow}
        />
        // </div>
      ))}
      {show && isTheMainDay && (
        <Button
          variant="primary"
          size="sm"
          className="buttonInDay"
          //  onClick={handleShow}
        >
          +
        </Button>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return { messages: state.reminders, interactions: state.interactions }
}

export default connect(mapStateToProps)(Day)
