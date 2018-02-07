import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/projects'>Projects</Link>
    </div>
  </nav>
)

export default Navigation
