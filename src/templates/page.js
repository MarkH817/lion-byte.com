import * as React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export class Page extends React.PureComponent {
  render () {
    const { children, title } = this.props

    return (
      <Layout>
        {title ? <Helmet title={title} /> : null}

        {children}
      </Layout>
    )
  }
}

export default Page
