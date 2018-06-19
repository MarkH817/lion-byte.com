import * as React from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { TextType } from '../components/animated/textType'
import { PostPreview } from '../components/post'

export default class HomePage extends React.PureComponent {
  render () {
    const {
      data: {
        postPreviews: { edges: posts },
        site: {
          siteMetadata: { title: siteTitle }
        }
      }
    } = this.props

    return (
      <React.Fragment>
        <Helmet title={siteTitle} />

        <h1>
          <TextType text='Welcome' />
        </h1>

        <h2>
          <TextType text='Blog' />
        </h2>

        {posts.map(({ node: post }) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
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
