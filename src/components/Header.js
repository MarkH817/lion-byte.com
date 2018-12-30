import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav'

const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  font-size: 2em;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5em 0 1em 0;

  @media screen and (max-width: 1175px) {
    flex-direction: column;
    justify-content: center;
  }

  /**
   * Ensure that the header is shrunken for screens
   * less than 650 x 650 pixels in dimensions
   */
  @media screen and (max-width: 650px) {
    font-size: 1.5em;
  }

  @media screen and (max-height: 650px) {
    font-size: 1.5em;
  }

  .brand {
    flex: 0 1 auto;
    font-family: ${props => props.theme.headerFont};
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
