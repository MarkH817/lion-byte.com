import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export const Page = props => {
  const { children, title } = props

  return (
    <Layout>
      {title ? <Helmet title={title} /> : null}

      {children}
    </Layout>
  )
}

export default Page
