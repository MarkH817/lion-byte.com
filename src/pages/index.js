import React from 'react'

import Introduction from '../components/Introduction'
import Page from '../templates/Page'

export function Home () {
  return (
    <Page>
      <h1 className='page-title'>Welcome</h1>
      <Introduction />
    </Page>
  )
}

export default Home
