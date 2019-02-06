import React from 'react'
import renderer from 'react-test-renderer'

import Theme from '../Theme'
import Nav from '../Nav'

describe('Nav', () => {
  test('Nav renders correctly', () => {
    const tree = renderer
      .create(
        <Theme>
          <Nav />
        </Theme>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
