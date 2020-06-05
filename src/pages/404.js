import React from 'react'

import Page from '../templates/Page'

export function NotFound () {
  return (
    <Page title='Page Not Found'>
      <h1 className='page-title'>Page Not Found</h1>
      <p>You just hit a route that doesn't exist... RIP.</p>
    </Page>
  )
}

export default NotFound
