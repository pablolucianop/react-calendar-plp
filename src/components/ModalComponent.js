import { useState, useMemo } from 'react'
import { isSameDay, isSameMonth, isWeekend } from 'date-fns'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import ReminderEditor from './ReminderEditor'
import Day from './Day'

function ModalComponent({ show, setShow, messages, dispatch, interactions }) {
  const [color, setColor] = useState('#ffffff')
  const [reminderText, setReminderText] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    setShow(false)
  }
  const handleDispa = (e) => {
    e.preventDefault()
  }
  const handleShow = () => setShow(true)
  const handleHide = () => setShow(true)
  const handleAdd = (e) => {
    e.preventDefault()
    setRecordatory({
      color: color,
      reminderText: reminderText,
      city: city,
      date: date,
      time: time,
      jsDate: new Date(date + '-' + time),
    })

    const remi = {
      color: color,
      reminderText: reminderText,
      city: city,
      date: date,
      time: time,
      key: `reminder-${messages.length}`,
      jsDate: new Date(date + '-' + time),
    }
    dispatch({ type: 'ADD', message: remi })
    handleClose(e)
  }

  const day = interactions[interactions.length - 1]

  const now = new Date()

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ReminderEditor setShow={setShow} />
        <Day
          show={show}
          isTheMainDay={true}
          key={day}
          day={day}
          date={date}
          // isWeekend={isWeekend(day)}
          // isToday={isSameDay(day, now)}
          // isThisMonth={isSameMonth(day, date)}
          handleShow={handleShow}
          show={show}
        />
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return { messages: state.reminders, interactions: state.interactions }
}

export default connect(mapStateToProps)(ModalComponent)
