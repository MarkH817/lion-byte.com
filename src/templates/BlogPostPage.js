import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Introduction from '../components/Introduction'

import './BlogPostPage.less'

function BlogPostTemplate (props) {
  const { excerpt, frontmatter, html, twitterExcerpt } = props.data.post

  return (
    <div className='blog-post-page'>
      <Helmet title={frontmatter.title}>
        <meta name='description' content={excerpt} />

        <meta name='og:title' content={frontmatter.title} />
        <meta name='og:description' content={excerpt} />

        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:description' content={twitterExcerpt} />
      </Helmet>

      <article>
        <header className='blog-post-page__header'>
          <h1 className='blog-post-page__title'>{frontmatter.title}</h1>
          <time className='blog-post-page__date'>{frontmatter.date}</time>
        </header>

        <section
          className='blog-post-page__content'
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <footer>
          <Introduction />
        </footer>
      </article>
    </div>
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
