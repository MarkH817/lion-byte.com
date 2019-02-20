import React from 'react'

import Page from '../templates/Page'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'

export const Home = () => (
  <Page>
    <h1>Welcome</h1>

    <Introduction />

    <Projects />
  </Page>
)

export default Home
