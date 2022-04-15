import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CirclePicker } from 'react-color'

function ReminderEditor({
  dispatch,
  messages,
  setShow,
  interactions,
  selectedReminder,
}) {
  const [color, setColor] = useState('')
  const [reminderText, setReminderText] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    e.preventDefault()
    setShow(false)
    dispatch({ type: 'SELECTREMINDER', selectedReminder: '' })
  }

  const handleAdd = (e) => {
    e.preventDefault()

    setRecordatory({
      color: color,
      reminderText: reminderText,
      city: city,
      date: selectedFormatedDay,
      time: time,
      jsDate: new Date(date + '-' + time),
    })

    let dateStr = `${date} ${time}`
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

    const remi = {
      color: color,
      reminderText: reminderText,
      city: city,
      date: selectedFormatedDay,
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
    '#03a9f4',
    '#8bc34a',
    '#cddc39',
    '#ffc107',
  ]

  const reminderSelectedObj = messages.filter((message) => {
    return message.key === selectedReminder
  })

  function objPlaceholder(reminderSelectedObj) {
    if (reminderSelectedObj[0] === undefined) {
      return {
        color: '',
        reminderText: '',
        city: '',
        date: '',
        time: '',
        key: '',
        dateJs: '',
      }
    } else {
      return reminderSelectedObj[0]
    }
  }

  const defaultValue = objPlaceholder(reminderSelectedObj)

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d)
  }

  const jsToDate = (jsDate) => {
    if (isValidDate(jsDate)) {
      return new Date(jsDate).toISOString().split('T')[0]
    }
  }

  const selectedFormatedDay = jsToDate(interactions[interactions.length - 1])

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
          defaultValue={defaultValue.reminderText}
          type="text"
          placeholder="Enter Reminder"
          maxLength="30"
          onChange={(e) => setReminderText(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          defaultValue={defaultValue.city}
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
          defaultValue={selectedFormatedDay} //{defaultReminder.date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control
          type="time"
          // placeholder="Enter City"
          defaultValue={defaultValue.time}
          onChange={(e) => setTime(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Color</Form.Label>

        <CirclePicker
          defaultValue={defaultValue.color}
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
  return {
    messages: state.reminders,
    interactions: state.interactions,
    selectedReminder: state.selectedReminder,
  }
}

export default connect(mapStateToProps)(ReminderEditor)
