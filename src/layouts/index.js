import React from 'react'
import PropTypes from 'prop-types'

import '../styles/index.less'
import { Navigation } from '../components/navigation'
import { SEO } from '../components/seo'

const TemplateWrapper = ({
  data: { site: { siteMetadata: metadata }, profile },
  children
}) => (
  <div className='page-wrapper'>
    <SEO metadata={metadata} profile={profile} />

    <Navigation metadata={metadata} profile={profile} />

    <main className='main-wrapper flex center one six-800'>
      <section className='main-content center two-third-800'>
        {children()}
      </section>
    </main>
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
  }
`
