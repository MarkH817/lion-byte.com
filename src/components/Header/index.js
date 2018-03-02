import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header>
    <div>
      <h1>
        <Link to='/'>Mark Hernandez</Link>
      </h1>
    </div>

    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  </header>
)

export default Header
