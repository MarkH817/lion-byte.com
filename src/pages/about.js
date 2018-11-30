import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Page from '../templates/Page'

const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    bio: markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "about" } }
    ) {
      html
    }
  }
`

export const About = props => {
  return (
    <Page title='About'>
      <h1>About</h1>

      <StaticQuery query={ABOUT_PAGE_QUERY}>
        {({ bio }) => (
          <section dangerouslySetInnerHTML={{ __html: bio.html }} />
        )}
      </StaticQuery>
    </Page>
  )
}

export default About
