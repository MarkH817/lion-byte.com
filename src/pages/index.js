import React from 'react'

import Page from '../templates/Page'
import Introduction from '../components/Introduction'
import ProjectList from '../components/ProjectList'

export const Home = props => (
  <Page>
    <h1>Welcome</h1>

    <Introduction />

    <ProjectList />
  </Page>
)

export default Home
