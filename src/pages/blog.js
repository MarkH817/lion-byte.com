import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { TextType } from '../components/Animated/textType'
import { PostPreview } from '../components/Post'
import './blog.less'

const BlogIndexPage = ({ data: { postPreviews: { edges: posts } } }) => (
  <Fragment>
    <Helmet title='Blog | Mark Hernandez' />

    <h1>
      <TextType text='Blog' />
    </h1>

    {posts.map(({ node: post }) => <PostPreview post={post} key={post.id} />)}
  </Fragment>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndexPageQuery {
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
