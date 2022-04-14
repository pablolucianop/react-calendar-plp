import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import { format, parseISO } from 'date-fns'

function ReminderEditor({ dispatch, messages, setShow }) {
  const [color, setColor] = useState('')
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

    let dateStr = `${date} ${time}`
    //function that create a js date from a string in the format dd-mm-yyyy hh:mm using date-fns
    console.log('dateStrwwww', dateStr)
    var d = dateStr
    var d1 = d.split(' ')
    var dateFormat = d1[0].split('-')
    var timeFormat = d1[1].split(':')
    var dd = dateFormat[2]
    var mm = dateFormat[1] - 1
    var yy = dateFormat[0]
    var hh = timeFormat[0]
    var min = timeFormat[1]

    var fromdt = new Date(yy, mm - 1, dd, hh, min)

    console.log('fromdt', fromdt)
    console.log(`reminder-${messages.length}`)

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
  }

  const colors = [
    '#f44336',
    '#e91e63',
    // '#9c27b0',
    // '#673ab7',
    // '#3f51b5',
    // '#2196f3',
    '#03a9f4',
    // '#00bcd4',
    // '#009688',
    // '#4caf50',
    '#8bc34a',
    '#cddc39',
    // '#ffeb3b',
    '#ffc107',
    // '#ff9800',
    // '#ff5722',
    // '#795548',
    // '#607d8b',
  ]

  return (
    <div className="reminder-editor">
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
          // defaultValue={'2000-11-11'}
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
          colors={colors}
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
  return { messages: state.reminders, interactions: state.interactions }
}

export default connect(mapStateToProps)(ReminderEditor)
