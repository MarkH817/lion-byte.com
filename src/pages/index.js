import React, { Fragment } from 'react'
import graphql from 'graphql'

import { TextType } from '../components/Animated/textType'
import { PostPreview } from '../components/Post'
import './index.less'

const HomePage = ({
  data: { postPreviews: { edges: posts } }
}) => {
  return (
    <Fragment>
      <h2>
        <TextType text='Blog' />
      </h2>

      {posts.map(({ node: post }) => <PostPreview post={post} key={post.id} />)}
    </Fragment>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
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
