import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import React from 'react'

import '../styles/site.less'
import Header from './Header'
import Meta from './Meta'

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
function Layout (props) {
  return (
    <div className='site-container'>
      <Meta />
      <SkipNavLink />
      <Header />
      <SkipNavContent />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
