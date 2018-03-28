import React from 'react'
import Link from 'gatsby-link'

export const PostPreview = ({ post: { excerpt, frontmatter } }) => (
  <article className='blog-post-preview'>
    <h2 className='title'>
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h2>

    <time>{frontmatter.date}</time>

    <p className='excerpt'>{excerpt}</p>
  </article>
)
