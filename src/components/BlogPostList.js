import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import './BlogPostList.less'

const BLOG_POST_LIST_QUERY = graphql`
  query BLOG_POST_LIST_QUERY {
    postPreviews: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

/**
 * @typedef {object} PostPreviewData
 * @property {string} id
 * @property {string} excerpt
 * @property {object} frontmatter
 * @property {string} frontmatter.date
 * @property {string} frontmatter.path
 * @property {string} frontmatter.title
 */

function BlogPostList () {
  const data = useStaticQuery(BLOG_POST_LIST_QUERY)
  /** @type {Array<PostPreviewData>} */
  const posts = data.postPreviews.edges.map(edge => edge.node)

  return (
    <ol className='blog-post-list'>
      {posts.map(post => (
        <li key={post.id}>
          <article className='blog-post-list__article'>
            <header className='blog-post-list__article-header'>
              <h2 className='blog-post-list__article-title'>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h2>

              <time className='blog-post-list__article-date'>
                {post.frontmatter.date}
              </time>
            </header>

            <section className='blog-post-list__article-excerpt'>
              <p>{post.excerpt}</p>
            </section>

            <footer className='blog-post-list__article-footer'>
              <Link
                className='button button-xs button-pill'
                to={post.frontmatter.path}
              >
                Continue reading {post.frontmatter.title}{' '}
                <span aria-hidden>&rarr;</span>
              </Link>
            </footer>
          </article>
        </li>
      ))}
    </ol>
  )
}

export default BlogPostList
