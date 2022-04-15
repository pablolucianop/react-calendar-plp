import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calendar', () => {
  it('must render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calendar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should add a reminder with default data', () => {
    const { getByTestId, getByText } = render(<Calendar />)

    // Click add reminder button
    fireEvent.click(getByText('Add reminder'))

    // Confirm the reminder
    fireEvent.click(getByText('Add'))

    // Verify the render of the reminder
    expect(getByTestId('mini-reminder')).toBeInTheDocument()
  })
})
