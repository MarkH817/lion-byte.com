import { Link } from 'gatsby'
import React from 'react'

import './Header.less'

function Header () {
  return (
    <header className='header'>
      <div className='header__name'>
        <Link className='header__name-link' to='/'>
          Mark Hernandez
        </Link>
      </div>

      <nav className='header__nav nav-inline'>
        <ul className='header__nav-list'>
          <li>
            <Link className='header__nav-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='header__nav-link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='header__nav-link' to='/blog'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
