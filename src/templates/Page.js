import React from 'react'
import { Helmet } from 'react-helmet'

export const Page = props => {
  const { children, title } = props

  return (
    <React.Fragment>
      <Helmet title={title} />

      {children}
    </React.Fragment>
  )
}

export default Page
