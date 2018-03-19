import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

const Header = ({ profile }) => (
  <header>
    <h1>
      <Link to='/'>Mark Hernandez</Link>
    </h1>

    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>

    <Image
      alt='Profile'
      outerWrapperClassName='profile-wrapper'
      className='profile'
      fadeIn
      resolutions={profile.resolutions}
      sizes={profile.sizes}
    />
  </header>
)

export default Header
