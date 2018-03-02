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
    <main className='main-wrapper'>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
query CommonElementsQuery {
  profile: imageSharp (
    id: {regex: "/profile/"}
  ) {
    resolutions (
      height: 400
      width: 400
    ) {
      aspectRatio
      base64
      src
      srcSet
    }
    sizes (
      maxHeight: 400
      maxWidth: 400
    ) {
      aspectRatio
      base64
      src
      srcSet
    }
  }
}
`
