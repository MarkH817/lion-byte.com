import React from 'react'

import BlogPostList from '../components/BlogPostList'
import Page from '../templates/Page'

export function Blog () {
  return (
    <Page title='Blog'>
      <h1>Blog</h1>
      <BlogPostList />
    </Page>
  )
}

export default Blog
