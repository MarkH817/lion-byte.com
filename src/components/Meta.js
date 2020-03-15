import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const META_QUERY = graphql`
  query META_QUERY {
    profile: imageSharp(original: { src: { regex: "/profile/" } }) {
      resize(height: 265, width: 265) {
        src
      }
    }
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
      }
    }
  }
`

export function Meta () {
  const data = useStaticQuery(META_QUERY)
  const siteMetadata = data.site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <meta name='description' content={siteMetadata.description} />
      <meta name='keywords' content={siteMetadata.keywords} />
      <meta http-equiv='x-ua-compatible' content='ie=edge' />

      <meta name='robots' content='index,follow' />
      <meta name='googlebot' content='index,follow' />
      <meta name='pinterest' content='nopin' />

      <meta name='og:site_name' content={siteMetadata.title} />
      <meta name='og:title' content={siteMetadata.title} />
      <meta name='og:type' content='website' />
      <meta name='og:description' content={siteMetadata.description} />
      <meta name='og:locale' content='en_US' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={siteMetadata.title} />
      <meta name='twitter:description' content={siteMetadata.description} />
      <meta name='twitter:creator' content='@lion_byte' />

      <meta name='og:image' content={data.profile.resize.src} />
      <meta name='twitter:image' content={data.profile.resize.src} />
    </Helmet>
  )
}

export default Meta
