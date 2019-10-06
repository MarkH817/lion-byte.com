import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  font-size: 2em;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.5em 0 1em 0;

  @media screen and (max-width: 55em) {
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

  .name {
    flex: 2 1 0;
    font-family: ${props => props.theme.headerFont};
    font-weight: bold;

    a {
      display: inline-block;
      padding: 0 0.75ch;
      text-decoration: none;
    }
  }

  nav {
    font-family: ${props => props.theme.headerFont};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    a {
      font-weight: bold;
      display: inline-block;
      padding: 0 0.75ch;
      text-align: center;
      text-decoration: none;
    }
  }
`

export function Header () {
  return (
    <HeaderStyles>
      <div className='name'>
        <Link to='/'>Mark Hernandez (lion-byte)</Link>
      </div>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
    </HeaderStyles>
  )
}

export default Header
