import { useState } from 'react'
import './ReminderEditor.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
function ReminderEditor() {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [recodatory, setRecordatory] = useState({})

  const handleClose = () => setShow(false)
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
    console.log('recodatory', recodatory)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
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
            <Form.Control type="text" placeholder="Enter City" />
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
          </Button>
          <Button variant="secondary" type="Cancel" onClick={console.log(name)}>
            Cancel
          </Button>{' '}
          {console.log('name', name)}
        </Form>
      </Modal>
    </>
  )
}

export default ReminderEditor
