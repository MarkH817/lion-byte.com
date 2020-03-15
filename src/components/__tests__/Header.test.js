import React from 'react'
import { render } from '@testing-library/react'

import Theme from '../Theme'
import Header from '../Header'

describe('Nav', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Theme>
        <Header />
      </Theme>
    )

    expect(container).toMatchSnapshot()
  })
})
