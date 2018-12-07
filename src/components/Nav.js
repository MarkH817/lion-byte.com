import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
  font-family: ${props => props.theme.headerFont};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const MenuLink = styled.section`
  transition: transform 0.08s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  a {
    color: ${props => props.theme.blue};
    font-size: 2em;
    font-weight: bold;
    display: inline-block;
    padding: 0 1ch;
    text-align: center;
    text-decoration: none;

    @media screen and (max-width: 450px) {
      padding: 0 0.75ch;
    }
  }
`

export const Nav = props => (
  <Menu>
    <MenuLink>
      <Link to='/'>Home</Link>
    </MenuLink>

    <MenuLink>
      <Link to='/about'>About</Link>
    </MenuLink>

    <MenuLink>
      <Link to='/blog'>Blog</Link>
    </MenuLink>

    <MenuLink>
      <Link to='/contact'>Contact</Link>
    </MenuLink>
  </Menu>
)

export default Nav
