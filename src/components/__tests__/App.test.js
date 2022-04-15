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

    fireEvent.click(getByText('1'))

    fireEvent.change(getByTestId('formCity'), {
      target: { value: 'Campeche' },
    })

    fireEvent.change(getByTestId('formDate'), {
      target: { value: '19042022' },
    })

    fireEvent.click(getByTestId('addBtn'))

    expect(getByText('Campeche')).toBeInTheDocument()
  })
})
