import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import PostPreview from './PostPreview'

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

const PostListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
`

export const PostPreviews = () => (
  <StaticQuery query={POST_PREVIEWS_QUERY}>
    {data => {
      const { edges } = data.postPreviews

      return (
        <PostListStyles>
          {edges.map(edge => (
            <PostPreview key={edge.node.id} post={edge.node} />
          ))}
        </PostListStyles>
      )
    }}
  </StaticQuery>
)

export default PostPreviews
