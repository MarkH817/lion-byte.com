import * as React from 'react'
import Helmet from 'react-helmet'

export class SEO extends React.PureComponent {
  render () {
    const { metadata, profile } = this.props

    return (
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
        title={metadata.title}
      >
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta
          name='google-site-verification'
          content='T2CmkDTMt0s2SVUBOfhDO7yuBOD-lJ2ZnJOO1YO5_LY'
        />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='theme-color' content='#104f5a' />
        <meta name='og:locale' content='en_US' />
        <meta name='og:image' content={profile.resolutions.src} />
      </Helmet>
    )
  }
}
