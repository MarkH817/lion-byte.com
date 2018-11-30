import React from 'react'
import styled from 'styled-components'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from './Header'
import Meta from './Meta'
import Theme from './Theme'

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

    &:active {
      color: ${props => props.theme.red};
    }
  }
`

const Main = styled.main`
  animation: 0.35s fadein ease-in;
  color: ${props => props.theme.black};
  margin: 0 auto 3em auto;
  max-width: ${props => props.theme.maxWidth};
`

export const Layout = props => {
  const { children } = props

  return (
    <Theme>
      <Page>
        <Meta />
        <SkipNavLink />
        <Header />
        <SkipNavContent />
        <Main>{children}</Main>
      </Page>
    </Theme>
  )
}

export default Layout
