import React from 'react'
import Helmet from 'react-helmet'

export const SEO = ({ metadata, profile }) => (
  <Helmet
    htmlAttributes={{
      lang: 'en'
    }}
    title={metadata.title}
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
)
