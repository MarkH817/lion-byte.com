import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../Navigation'

const Header = () => (
  <header>
    <div>
      <h1>
        <Link to='/'>Mark Hernandez</Link>
      </h1>
    </div>

    <Navigation />
  </header>
)

export default Header
