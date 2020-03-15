import React from 'react'

import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Page from '../templates/Page'

export function Home () {
  return (
    <Page>
      <h1>Welcome</h1>

      <Introduction />

      <Projects />
    </Page>
  )
}

export default Home
