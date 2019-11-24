import React from 'react'

import Page from '../templates/Page'
import PostPreviews from '../components/PostPreviews'

export function Blog () {
  return (
    <Page title='Blog'>
      <h1>Blog</h1>
      <PostPreviews />
    </Page>
  )
}

export default Blog
