import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import PostPreview from './PostPreview'

export const POST_PREVIEW_LIST_QUERY = graphql`
  query POST_PREVIEW_QUERY {
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

export const PostPreviewList = props => {
  const { limit } = props

  return (
    <StaticQuery query={POST_PREVIEW_LIST_QUERY}>
      {data => {
        const {
          postPreviews: { edges }
        } = data

        return edges
          .slice(0, limit)
          .map(edge => <PostPreview key={edge.node.id} post={edge.node} />)
      }}
    </StaticQuery>
  )
}

PostPreviewList.defaultProps = {
  limit: 10
}

export default PostPreviewList
