import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import { format, parseISO } from 'date-fns'
// import DatePicker from './DatePicker'
// import { fns } from 'date-fns'

function ReminderEditor({ dispatch, messages, setShow }) {
  const [color, setColor] = useState('#ffffff')
  const [reminderText, setReminderText] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    e.preventDefault()
    console.log('setShow2', setShow)
    setShow(false)
  }
  const handleDispa = (e) => {
    e.preventDefault()
  }
  const handleShow = () => setShow(true)
  const handleAdd = (e) => {
    e.preventDefault()

    let dateStr = `${date} ${time}`
    //function that create a js date from a string in the format dd-mm-yyyy hh:mm using date-fns
    console.log('dateStrwwww', dateStr)
    var d = dateStr
    var d1 = d.split(' ')
    var date = d1[0].split('-')
    var time = d1[1].split(':')
    var dd = date[2]
    var mm = date[1] - 1
    var yy = date[0]
    var hh = time[0]
    var min = time[1]
    // var ss=time[2];
    var fromdt = new Date(yy, mm - 1, dd, hh, min)

    const remi = {
      color: color,
      reminderText: reminderText,
      city: city,
      date: date,
      time: time,
      key: `reminder-${messages.length}`,
      dateJs: fromdt,
    }
    dispatch({ type: 'ADD', message: remi })
    handleClose(e)
    console.log('recodatory', recodatory)
  }

  return (
    <div className="reminder-editor">
      {/* <Button variant="primary" onClick={handleShow}>
        +
      </Button> */}
      {/* <Form> */}
      <Form.Group className="mb-3" controlId="formBasicReminder">
        <Form.Label
          style={{
            backgroundColor: color,
            transition: 'ease all 500ms',
            width: '100%',
            fontWeight: 700,
          }}
        >
          Reminder
        </Form.Label>
        <Form.Control
          defaultValue={'pasear al perro'}
          type="text"
          placeholder="Enter Reminder"
          maxLength="30"
          onChange={(e) => setReminderText(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          defaultValue={'Salsipuedes'}
          type="text"
          placeholder="Enter City"
          maxLength="30"
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control
          type="date"
          defaultValue={'2000-11-11'}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control
          type="time"
          // placeholder="Enter City"
          defaultValue={'--:--'}
          onChange={(e) => setTime(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Color</Form.Label>
        <CirclePicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex)
          }}
        />
      </Form.Group>
      <Button variant="primary" type="Add" onClick={handleAdd}>
        Add
      </Button>{' '}
      <Button variant="secondary" type="Cancel" onClick={handleClose}>
        Cancel
      </Button>
      {/* </Form> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { messages: state }
}

export default connect(mapStateToProps)(ReminderEditor)
