import React from 'react'
import renderer from 'react-test-renderer'

import Theme from '../Theme'
import Header from '../Header'

describe('Nav', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Theme>
          <Header />
        </Theme>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
