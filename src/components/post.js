import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { TextType } from './animated/textType'

export class PostPreview extends React.PureComponent {
  render () {
    const {
      post: { excerpt, frontmatter }
    } = this.props

    return (
      <article className='blog-post-preview'>
        <h3 className='title'>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </h3>

        <time>{frontmatter.date}</time>

        <hr />

        <p className='excerpt'>{excerpt}</p>
      </article>
    )
  }
}

export class PostSEO extends React.PureComponent {
  render () {
    const { frontmatter, excerpt, siteTitle } = this.props

    return (
      <Helmet title={`${frontmatter.title} | ${siteTitle}`}>
        <meta name='og:title' content={frontmatter.title} />
        <meta name='og:description' content={excerpt} />
        <meta name='description' content={excerpt} />
      </Helmet>
    )
  }
}

export class Post extends React.PureComponent {
  render () {
    const { frontmatter, html } = this.props

    return (
      <React.Fragment>
        <h1>
          <TextType text={frontmatter.title} />
        </h1>

        <time>{frontmatter.date}</time>

        <hr />

        <article
          className='blog-post content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </React.Fragment>
    )
  }
}
