import * as React from 'react'

import '../../styles/index.less'
import { Navigation } from './navigation'
import { SEO } from './seo'

export class Layout extends React.PureComponent {
  render () {
    const { children } = this.props

    return (
      <div className='page-wrapper'>
        <SEO />

        <Navigation />

        <main className='main-wrapper flex center one six-800'>
          <div className='main-content center two-third-800'>{children}</div>
        </main>
      </div>
    )
  }
}

export default Layout
