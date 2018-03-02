import React from 'react'
import Link from 'gatsby-link'

export const PostPreview = ({ post }) => (
  <article className='blog-post-preview'>
    <h2>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h2>

    <p>
      <time>{post.frontmatter.date}</time>
    </p>

    <p className='excerpt'>{post.excerpt}</p>
  </article>
)
