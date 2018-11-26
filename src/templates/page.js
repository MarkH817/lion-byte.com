import React from 'react'
import { Helmet } from 'react-helmet'
import { SkipNavContent } from '@reach/skip-nav'

import Meta from '../components/Meta'

export const Page = props => {
  const { children, title } = props

  return (
    <SkipNavContent>
      <Meta />

      {title ? <Helmet title={title} /> : null}

      {children}
    </SkipNavContent>
  )
}

export default Page
