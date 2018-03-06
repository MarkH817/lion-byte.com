import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../styles/index.less'

const TemplateWrapper = ({ data, children }) => (
  <div className='page-wrapper'>
    <Helmet
      title='Mark Hernandez'
      meta={[
        {
          name: 'description',
          content: `A blog for NodeJS, web development, and stuff`
        },
        {
          name: 'keywords',
          content: 'portfolio, web development, javascript, nodejs'
        },
        {
          name: 'google-site-verification',
          content: 'T2CmkDTMt0s2SVUBOfhDO7yuBOD-lJ2ZnJOO1YO5_LY'
        }
      ]}
    >
      <html lang='en' />
    </Helmet>
    <Header profile={data.profile} />
    <section className='main-wrapper'>
      <section className='social'>
        {data.social.accounts.map(({ name, username, url }) => (
          <a
            key={url}
            href={url}
            title={username}
            target='_blank'
            rel='noopener noreferrer'
          >
            {name}
          </a>
        ))}
      </section>

      {children()}
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query CommonElementsQuery {
    profile: imageSharp(id: { regex: "/profile/" }) {
      resolutions(height: 400, width: 400) {
        aspectRatio
        base64
        src
        srcSet
      }
      sizes(maxHeight: 400, maxWidth: 400) {
        aspectRatio
        base64
        src
        srcSet
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
