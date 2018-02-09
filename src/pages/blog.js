import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './blog.less'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section>
      <Helmet title='Blog | Mark Hernandez' />
      <h1>Blog</h1>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <article className='blog-post-preview' key={post.id}>
            <h2>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>

            <h3>
              <time>{post.frontmatter.date}</time>
            </h3>

            <p className='excerpt'>{post.excerpt}</p>
          </article>
        ))}
    </section>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
