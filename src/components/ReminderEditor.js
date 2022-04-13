import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
// import DatePicker from './DatePicker'

function ReminderEditor(props) {
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
            type="text"
            placeholder="Enter Reminder"
            maxLength="30"
            onChange={(e) => setReminderText(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
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
            // placeholder="Enter City"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>Date and Time</Form.Label>
          <Form.Control
            type="time"
            // placeholder="Enter City"
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
        {console.log('props.messages', props.messages)}
        <Button variant="primary" type="Add" onClick={handleAdd}>
          Add
        </Button>
        <Button variant="secondary" type="Cancel" onClick={handleClose}>
          Cancel
        </Button>{' '}
        {console.log('props', props)}
        {/* </Form> */}
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

export default connect(mapStateToProps)(ReminderEditor)
