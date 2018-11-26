import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav'

const HeaderStyles = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .brand {
    flex: 0 1 auto;
    font-family: ${props => props.theme.headerFont};
    font-size: 2em;
    font-weight: bold;

    a {
      color: ${props => props.theme.blue};
      display: inline-block;
      padding: 0 1ch;
      text-decoration: none;
    }
  }
`

export const Header = props => (
  <HeaderStyles>
    <section className='brand'>
      <Link to='/'>Mark Hernandez (lion-byte)</Link>
    </section>

    <Nav />
  </HeaderStyles>
)

export default Header
