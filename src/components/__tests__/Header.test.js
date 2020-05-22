import { render } from '@testing-library/react'
import React from 'react'

import Header from '../Header'

describe('Nav', () => {
  test('renders correctly', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
