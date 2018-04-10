import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { TextType } from '../components/animated/textType'
import { PostPreview } from '../components/post'

const BlogIndexPage = ({
  data: {
    postPreviews: { edges: posts },
    site: { siteMetadata: { title: siteTitle } }
  }
}) => (
  <Fragment>
    <Helmet title='Blog | Mark Hernandez (lion-byte)' />

    <h1>
      <TextType text='Blog' />
    </h1>

    {posts.map(({ node: post }) => <PostPreview post={post} key={post.id} />)}
  </Fragment>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    postPreviews: allMarkdownRemark(
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
