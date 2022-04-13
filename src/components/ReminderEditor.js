import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
import DatePicker from './DatePicker'
function ReminderEditor(props) {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = (e) => {
    e.preventDefault()
    setShow(false)
  }
  const handleShow = () => setShow(true)
  const handleAdd = (e) => {
    e.preventDefault()
    setRecordatory({
      color: color,
      name: name,
      city: city,
      date: date,
      hour: hour,
    })

    // handleClose(e)
    console.log('recodatory', recodatory)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicReminder">
            <Form.Label
              style={{
                backgroundColor: color,
                transition: 'ease all 500ms',
                width: '100%',
              }}
            >
              Reminder
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Reminder"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              onChange={(e) => setCity(e.target.value)}
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
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>Color</Form.Label>
            {show && <DatePicker />}
          </Form.Group>
          {props.messages}
          <Button variant="primary" type="Add" onClick={handleAdd}>
            Add
          </Button>
          <Button variant="secondary" type="Cancel" onClick={handleClose}>
            Cancel
          </Button>{' '}
          {console.log('props', props)}
        </Form>
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
