import * as React from 'react'
import PropTypes from 'prop-types'

import '../styles/index.less'
import { Navigation } from '../components/navigation'
import { SEO } from '../components/seo'

export default class TemplateWrapper extends React.PureComponent {
  render () {
    const {
      data: {
        site: { siteMetadata: metadata },
        profile
      },
      children
    } = this.props

    return (
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
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

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
