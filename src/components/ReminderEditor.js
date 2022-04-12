import { useState } from 'react'
import './ReminderEditor.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { CirclePicker } from 'react-color'
function ReminderEditor() {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
            <Form.Control type="email" placeholder="Enter Reminder" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="email" placeholder="Enter City" />
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
          <Button variant="primary" type="Add">
            Add
          </Button>
          <Button variant="secondary" type="Cancel">
            Cancel
          </Button>{' '}
        </Form>
      </Modal>
    </>
  )
}

export default ReminderEditor
