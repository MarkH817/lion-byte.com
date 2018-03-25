import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { TextType } from '../components/Animated/textType'
import './blog-post.less'

const Template = ({
  data: { markdownRemark: { excerpt, frontmatter, html } }
}) => {
  return (
    <Fragment>
      <Helmet
        title={`${frontmatter.title} | Mark Hernandez`}
        meta={[
          {
            name: 'og:title',
            content: frontmatter.title
          },
          {
            name: 'og:description',
            content: excerpt
          }
        ]}
      />

      <h1 className='blog-post title'>
        <TextType text={frontmatter.title} />
      </h1>

      <time>{frontmatter.date}</time>

      <hr />

      <section className='content' dangerouslySetInnerHTML={{ __html: html }} />
    </Fragment>
  )
}

export default Template

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt(pruneLength: 250)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
