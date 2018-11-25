import React from 'react'
import styled from 'styled-components'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import '../styles/main.less'
import Nav from './Nav'
import Meta from './Meta'

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  [data-reach-skip-link] {
    font-family: 'polygon party', 'Courier New', Courier, monospace;
    color: cornflowerblue;
    text-decoration: none;
  }

  [data-reach-skip-link]:focus {
    outline-color: currentColor;
  }
`

const Main = styled.main`
  border-top: 1em solid red;
  margin-top: -1em;
  padding: 0.5em calc(1em + 1vw);
`

export const Layout = props => (
  <Page>
    <Meta />

    <SkipNavLink />
    <Nav />

    <SkipNavContent />
    <Main>{props.children}</Main>
  </Page>
)

export default Layout
