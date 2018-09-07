import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { TextType } from '../components/animated/textType'
import { Layout } from '../components/layout'

export class BlogPostTemplate extends React.PureComponent {
  render () {
    const {
      data: {
        post: { excerpt, frontmatter, html, twitterExcerpt }
      }
    } = this.props

    return (
      <Layout>
        <Helmet title={frontmatter.title}>
          <meta name='description' content={excerpt} />

          <meta name='og:title' content={frontmatter.title} />
          <meta name='og:description' content={excerpt} />

          <meta name='twitter:title' content={frontmatter.title} />
          <meta name='twitter:description' content={twitterExcerpt} />
        </Helmet>

        <h1>
          <TextType text={frontmatter.title} />
        </h1>

        <article className='blog-post'>
          <span>
            <time>{frontmatter.date}</time>
          </span>

          <section
            className='content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostByPath($path: String!) {
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

export default BlogPostTemplate
