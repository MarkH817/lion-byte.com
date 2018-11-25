import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1em 0;
`

const MenuLink = styled.section`
  background-color: ${props => props.bgColor};
  transform: rotate(5deg);
  box-shadow: 0.3em 0.3em 2px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: scale(1.05);
  }

  a {
    font-family: 'polygon party', 'Courier New', Courier, monospace;
    font-size: 2.25em;
    border: 0.25em solid ${props => props.bgColor};
    background-color: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.95);
    display: inline-block;
    padding: 0 0.15em;
    text-align: center;
    text-decoration: none;
    text-shadow: 0.1em 0.05em rgba(0, 0, 0, 0.35);
    letter-spacing: 0.07em;
    transform: rotate(-5deg);

    :focus {
      outline-width: 0.2em;
      outline-color: ${props => props.bgColor};

      ::before {
        content: '*';
      }
    }
  }
`

MenuLink.defaultProps = {
  bgColor: '#d91a99'
}

export const Nav = props => (
  <Menu>
    <MenuLink bgColor='#aa1c00'>
      <Link to='/'>Mark</Link>
    </MenuLink>

    <MenuLink bgColor='#d91a99'>
      <Link to='/about'>Party</Link>
    </MenuLink>

    <MenuLink bgColor='#E1B344'>
      <Link to='/gear'>Gear</Link>
    </MenuLink>

    <MenuLink bgColor='#3CB371'>
      <Link to='/badges'>Badges</Link>
    </MenuLink>

    <MenuLink bgColor='#00008b'>
      <Link to='/blog'>Journal</Link>
    </MenuLink>
  </Menu>
)

export default Nav
