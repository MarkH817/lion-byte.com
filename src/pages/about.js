import React from 'react'
import { graphql } from 'gatsby'

import Page from '../templates/Page'

export const About = props => {
  const {
    data: { bio }
  } = props

  return (
    <Page title='About'>
      <h1>About</h1>

      <a
        href='https://github.com/MarkH817/'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>

      <a
        href='https://www.twitter.com/lion_byte'
        target='_blank'
        rel='noopener noreferrer'
      >
        Twitter
      </a>

      <a
        href='https://www.linkedin.com/in/markhernandez1'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin
      </a>

      <section dangerouslySetInnerHTML={{ __html: bio.html }} />
    </Page>
  )
}

export const query = graphql`
  query AboutPageQuery {
    bio: markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "about" } }
    ) {
      html
    }
  }
`

export default About
