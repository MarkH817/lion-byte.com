import React from 'react'
import Helmet from 'react-helmet'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <section className='blog-post-container'>
      <Helmet title={`${post.frontmatter.title} | Mark Hernandez`} />

      <section className='blog-post'>
        <h1>{post.frontmatter.title}</h1>
        <section
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </section>
  )
}

export default Template

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
