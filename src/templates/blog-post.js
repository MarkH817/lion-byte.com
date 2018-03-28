import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { TextType } from '../components/Animated/textType'
import './blog-post.less'

const Template = ({
  data: {
    markdownRemark: { excerpt, frontmatter, html },
    site: { siteMetadata: { title: siteTitle } }
  }
}) => {
  return (
    <Fragment>
      <Helmet
        title={`${frontmatter.title} | ${siteTitle}`}
        meta={[
          {
            name: 'og:title',
            content: frontmatter.title
          },
          {
            name: 'og:description',
            content: excerpt
          },
          {
            name: 'description',
            content: excerpt
          }
        ]}
      />

      <h2 className='blog-post title'>
        <TextType text={frontmatter.title} />
      </h2>

      <time>{frontmatter.date}</time>

      <hr />

      <section className='content' dangerouslySetInnerHTML={{ __html: html }} />
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

    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
