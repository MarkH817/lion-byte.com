import React from 'react'
import Helmet from 'react-helmet'

import './blog-post.less'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <main className='blog-post-container'>
      <Helmet title={`${post.frontmatter.title} | Mark Hernandez`} />

      <article className='blog-post'>
        <h1 className='title'>{post.frontmatter.title}</h1>

        <p>
          <time>{post.frontmatter.date}</time>
        </p>

        <section
          className='content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
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
