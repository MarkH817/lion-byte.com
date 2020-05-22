import React from 'react'

import Introduction from '../components/Introduction'
import ProjectList from '../components/ProjectList'
import Page from '../templates/Page'

export function Home () {
  return (
    <Page>
      <h1>Welcome</h1>

      <Introduction />

      <ProjectList />
    </Page>
  )
}

export default Home
