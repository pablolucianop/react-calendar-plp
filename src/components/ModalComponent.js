import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import ReminderEditor from './ReminderEditor'
import Day from './Day'
// import DatePicker from './DatePicker'

function ModalComponent(props) {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const [reminderText, setReminderText] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    e.preventDefault()
    setShow(false)
  }
  const handleDispa = (e) => {
    e.preventDefault()
    // props.dispatch({ type: 'ADD', message: 'hola pichu' })
  }
  const handleShow = () => setShow(true)
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
      key: `reminder-${props.messages.length}`,
      jsDate: new Date(date + '-' + time),
    }
    props.dispatch({ type: 'ADD', message: remi })
    handleClose(e)
    console.log('recodatory', recodatory)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* <ReminderEditor> </ReminderEditor> */}
        <Day> </Day>
      </Modal>
    </>
  )
}

// const mapStateToProps = (state) => ({
//   messages: state.messages,
// })

const mapStateToProps = (state) => {
  return { messages: state }
}

export default connect(mapStateToProps)(ModalComponent)
