import React from 'react'
import graphql from 'graphql'

import { PostPreview } from '../components/Post'
import './index.less'

const HomePage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section>
      <h1>Hello!</h1>

      <h1>Blog</h1>
      {posts.map(({ node: post }) => <PostPreview post={post} key={post.id} />)}
    </section>
  )
}

export default HomePage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
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
