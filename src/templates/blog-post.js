import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { TextType } from '../components/Animated/textType'
import './blog-post.less'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Fragment>
      <Helmet
        title={`${post.frontmatter.title} | Mark Hernandez`}
        meta={[
          {
            name: 'og:title',
            content: post.frontmatter.title
          },
          {
            name: 'og:description',
            content: post.excerpt
          }
        ]}
      />

      <h1 className='blog-post title'>
        <TextType text={post.frontmatter.title} />
      </h1>

      <time>{post.frontmatter.date}</time>

      <hr />

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
      excerpt(pruneLength: 250)
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
