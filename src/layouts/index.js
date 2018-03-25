import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import Link from 'gatsby-link'

import '../styles/index.less'

const TemplateWrapper = ({
  data: { site: { siteMetadata: metadata }, profile, social },
  children
}) => (
  <div className='page-wrapper'>
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title='Mark Hernandez'
      meta={[
        {
          name: 'description',
          content: metadata.description
        },
        {
          name: 'keywords',
          content: metadata.keywords
        },
        {
          name: 'google-site-verification',
          content: 'T2CmkDTMt0s2SVUBOfhDO7yuBOD-lJ2ZnJOO1YO5_LY'
        },
        {
          name: 'robots',
          content: 'index,follow'
        },
        {
          name: 'googlebot',
          content: 'index,follow'
        },
        {
          name: 'theme-color',
          content: '#104f5a'
        },
        {
          name: 'og:locale',
          content: 'en_US'
        },
        {
          name: 'og:image',
          content: profile.resolutions.src
        }
      ]}
    />

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

    <main className='main-wrapper'>{children()}</main>

    <section className='social'>
      {social.accounts.map(({ name, username, url }) => (
        <a
          key={url}
          href={url}
          title={username}
          target='_blank'
          rel='noopener noreferrer'
        >
          {name} {username ? `(${username})` : ''}
        </a>
      ))}
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query CommonElementsQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }

    profile: imageSharp(id: { regex: "/profile/" }) {
      resolutions(height: 265, width: 265) {
        aspectRatio
        base64
        src
      }
      sizes(maxHeight: 265, maxWidth: 265) {
        aspectRatio
        base64
        src
      }
    }

    social: dataJson(name: { eq: "social" }) {
      accounts {
        name
        url
        username
      }
    }
  }
`
