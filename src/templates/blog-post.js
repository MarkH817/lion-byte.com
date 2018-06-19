import * as React from 'react'

import { Post, PostSEO } from '../components/post'

export default class BlogPostTemplate extends React.PureComponent {
  render () {
    const {
      data: {
        post: { excerpt, frontmatter, html },
        site: {
          siteMetadata: { title: siteTitle }
        }
      }
    } = this.props

    return (
      <React.Fragment>
        <PostSEO
          frontmatter={frontmatter}
          excerpt={excerpt}
          siteTitle={siteTitle}
        />

        <Post frontmatter={frontmatter} html={html} />
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }

    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt(pruneLength: 300)
      twitterExcerpt: excerpt(pruneLength: 200)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
