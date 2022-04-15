import React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent, render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import App from '../App'

describe('App', () => {
  it('renders with no problem', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should add a reminder with default data', () => {
    const { getByTestId, getByText } = render(<App />)

    fireEvent.click(getByText('18'))

    fireEvent.change(getByTestId('formCity'), {
      target: { value: 'Campeche' },
    })

    fireEvent.change(getByTestId('formDate'), {
      target: { value: '19042022' },
    })

    fireEvent.change(getByTestId('formText'), {
      target: { value: 'Boat ride!' },
    })

    fireEvent.click(getByText('Add'))
    //This test is failing because the test is not rendering the reminder
    fireEvent.expect(getByText('Sunday')).toBeInTheDocument()
  })
})
