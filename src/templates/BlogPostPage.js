import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Introduction from '../components/Introduction'

const BlogPost = styled.article`
  border-bottom: 0.15em solid ${props => props.theme.grey};
  margin-bottom: 2em;

  .date {
    font-size: 0.85em;
  }
`

export const BlogPostTemplate = props => {
  const {
    data: {
      post: { excerpt, frontmatter, html, twitterExcerpt }
    }
  } = props

  return (
    <Layout>
      <Helmet title={frontmatter.title}>
        <meta name='description' content={excerpt} />

        <meta name='og:title' content={frontmatter.title} />
        <meta name='og:description' content={excerpt} />

        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:description' content={twitterExcerpt} />
      </Helmet>

      <h1>{frontmatter.title}</h1>

      <BlogPost>
        <p className='date'>
          <time>{frontmatter.date}</time>
        </p>

        <section
          className='content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPost>

      <Introduction />
    </Layout>
  )
}

export const query = graphql`
  query BLOG_POST_PAGE_QUERY($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
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
