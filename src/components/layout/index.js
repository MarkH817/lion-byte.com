import * as React from 'react'

import '../../styles/main.less'
import { Navigation } from './navigation'
import { SEO } from './seo'

export class Layout extends React.PureComponent {
  render () {
    const { children } = this.props

    return (
      <div className='page-wrapper'>
        <SEO />

        <Navigation />

        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
