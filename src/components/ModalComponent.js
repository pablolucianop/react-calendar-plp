import { useState } from 'react'
import './ReminderEditor.css'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
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
    dispatch({ type: 'SELECTREMINDER', selectedReminder: '' })
  }

  const handleShow = () => setShow(true)

  const day = interactions[interactions.length - 1]

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
          handleShow={handleShow}
          show={show}
        />
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.reminders,
    interactions: state.interactions,
    selectedReminder: state.selectedReminder,
  }
}

export default connect(mapStateToProps)(ModalComponent)
