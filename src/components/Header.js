import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  font-size: 1.75em;
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
    ul {
      font-size: 1em;
    }

    a {
      font-weight: bold;
      padding: 0 0.75ch;
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

      <nav className='nav-inline'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  )
}

export default Header
