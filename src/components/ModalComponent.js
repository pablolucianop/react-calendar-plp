import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import ReminderEditor from './ReminderEditor'
import Day from './Day'

function ModalComponent({ show, setShow, messages, dispatch }) {
  const [color, setColor] = useState('#ffffff')
  const [reminderText, setReminderText] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    console.log('setShow', setShow)
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

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <ReminderEditor setShow={setShow} /> */}
        <Day show={show} isTheMainDay={true} />
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return { messages: state }
}

export default connect(mapStateToProps)(ModalComponent)
