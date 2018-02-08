import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation/index'
import './index.less'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Mark Hernandez'
      meta={[
        { name: 'description', content: `Mark Hernandez's Portfolio` },
        {
          name: 'keywords',
          content: 'portfolio, web development, javascript, nodejs'
        }
      ]}
    >
      <html lang='en' />
    </Helmet>
    <Header />
    <Navigation />
    <main className='page-wrapper'>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
