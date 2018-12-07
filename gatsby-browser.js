import React from 'react'
import styled from 'styled-components'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from './src/components/Header'
import Theme from './src/components/Theme'

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2ch;
`

export const wrapRootElement = ({ element }) => <Theme>{element}</Theme>

export const wrapPageElement = ({ element }) => (
  <Page>
    <SkipNavLink />
    <Header />
    <SkipNavContent />

    {element}
  </Page>
)
