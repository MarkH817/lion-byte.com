import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

const Header = ({ profile }) => (
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
