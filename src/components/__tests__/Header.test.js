import { render } from '@testing-library/react'
import React from 'react'

import Header from '../Header'
import Theme from '../Theme'

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
