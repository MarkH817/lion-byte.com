import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.title]
 */
export function Page (props) {
  const { children, title } = props
  return (
    <React.Fragment>
      <Helmet title={title} />
      {children}
    </React.Fragment>
  )
}

export default Page
