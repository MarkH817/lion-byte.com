import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import './blog-post.less'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Fragment>
      <Helmet
        title={`${post.frontmatter.title} | Mark Hernandez`}
      />

      <h1 className='blog-post title'>
        {post.frontmatter.title}
      </h1>

      <time>{post.frontmatter.date}</time>

      <section
        className='content'
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Fragment>
  )
}

export default Template

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
