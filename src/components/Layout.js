import 'turretcss/dist/turretcss.min.css'
import 'prismjs/themes/prism-solarizedlight.css'
import '@reach/skip-nav/styles.css'
import 'typeface-nunito'
import 'typeface-open-sans'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import React from 'react'
import styled from 'styled-components'

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
