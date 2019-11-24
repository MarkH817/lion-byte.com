import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const POST_PREVIEWS_QUERY = graphql`
  query POST_PREVIEWS_QUERY {
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

export const PostPreviewsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  .post-preview {
    border: 1px solid transparent;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    header {
      flex: 1 0 15em;
      margin-right: 2em;

      .date {
        font-size: 0.85em;
      }
    }

    .excerpt {
      flex: 3 1 25em;
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

export function PostPreviews () {
  const data = useStaticQuery(POST_PREVIEWS_QUERY)
  /** @type {Array<PostPreviewData>} */
  const posts = data.postPreviews.edges.map(edge => edge.node)

  return (
    <PostPreviewsStyles>
      {posts.map(post => (
        <article key={post.id} className='post-preview'>
          <header>
            <h2>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>

            <p className='date'>
              <time>{post.frontmatter.date}</time>
            </p>
          </header>

          <section className='excerpt'>
            <p>{post.excerpt}</p>
          </section>
        </article>
      ))}
    </PostPreviewsStyles>
  )
}

export default PostPreviews
