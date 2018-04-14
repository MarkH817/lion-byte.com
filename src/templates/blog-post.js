import React, { Fragment } from 'react'

import { Post, PostSEO } from '../components/post'

const Template = ({
  data: {
    post: { excerpt, frontmatter, html },
    site: { siteMetadata: { title: siteTitle } }
  }
}) => {
  return (
    <Fragment>
      <PostSEO
        frontmatter={frontmatter}
        excerpt={excerpt}
        siteTitle={siteTitle}
      />

      <Post frontmatter={frontmatter} html={html} />
    </Fragment>
  )
}

export default Template

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
