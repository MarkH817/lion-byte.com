import React from 'react'
import styled from 'styled-components'

import Meta from './Meta'

const Main = styled.main`
  animation: 0.35s fadein ease-in;
  color: ${props => props.theme.black};
  margin: 0 auto 3em auto;
  max-width: ${props => props.theme.maxWidth};
`

export const Layout = props => {
  const { children } = props

  return (
    <Main>
      <Meta />
      {children}
    </Main>
  )
}

export default Layout
