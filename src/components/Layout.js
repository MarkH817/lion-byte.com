import React from 'react'
import styled from 'styled-components'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from './Header'
import Meta from './Meta'
import Theme from './Theme'

const Page = styled.div`
  max-width: 90em;
  margin: 0 auto;
  padding: 0 0.5em;

  main {
    color: ${props => props.theme.black};
    margin: 0 auto 3em auto;
    max-width: 60em;
  }
`

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export function Layout (props) {
  return (
    <Theme>
      <Meta />
      <Page>
        <SkipNavLink />
        <Header />
        <SkipNavContent />
        <main>{props.children}</main>
      </Page>
    </Theme>
  )
}

export default Layout
