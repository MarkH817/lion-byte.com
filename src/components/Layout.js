import React from 'react'
import styled from 'styled-components'
import { SkipNavLink } from '@reach/skip-nav'

import Header from './Header'

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2ch;

  [data-reach-skip-link] {
    color: cornflowerblue;
    text-decoration: none;
  }

  [data-reach-skip-link]:focus {
    outline-color: currentColor;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.headerFont};
  }

  a {
    color: ${props => props.theme.blue};
  }
`

const Main = styled.main`
  color: ${props => props.theme.black};
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 0.5em 0;
`

export const Layout = props => (
  <Page>
    <SkipNavLink />
    <Header />

    <Main>{props.children}</Main>
  </Page>
)

export default Layout
