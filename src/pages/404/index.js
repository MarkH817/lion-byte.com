import * as React from 'react'

import { Page } from '../../templates/page'

export default class NotFoundPage extends React.PureComponent {
  render () {
    return (
      <Page>
        <h1>NOT FOUND</h1>

        <p>You just hit a route that doesn't exist... RIP.</p>
      </Page>
    )
  }
}
