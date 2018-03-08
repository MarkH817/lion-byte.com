import React, { Fragment } from 'react'
import graphql from 'graphql'

import { PostPreview } from '../components/Post'
import './index.less'

const HomePage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { html: homeHtml } = data.markdownRemark

  return (
    <Fragment>
      <section dangerouslySetInnerHTML={{ __html: homeHtml }} />

      <h1>Blog</h1>

      {posts.map(({ node: post }) => <PostPreview post={post} key={post.id} />)}
    </Fragment>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "home" } }
    ) {
      html
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
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
