import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { TextType } from './animated/textType'

export const PostPreview = ({ post: { excerpt, frontmatter } }) => (
  <article className='blog-post-preview'>
    <h3 className='title'>
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h3>

    <time>{frontmatter.date}</time>

    <hr />

    <p className='excerpt'>{excerpt}</p>
  </article>
)

export const PostSEO = ({ frontmatter, excerpt, siteTitle }) => (
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
)

export const Post = ({ frontmatter, html }) => (
  <Fragment>
    <h1>
      <TextType text={frontmatter.title} />
    </h1>

    <time>{frontmatter.date}</time>

    <hr />

    <article
      className='blog-post content'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Fragment>
)
