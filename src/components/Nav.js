import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
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
`

export const Nav = () => (
  <Menu>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/blog'>Blog</Link>
  </Menu>
)

export default Nav
