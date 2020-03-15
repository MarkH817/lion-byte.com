import React from 'react'

import PostPreviews from '../components/PostPreviews'
import Page from '../templates/Page'

export function Blog () {
  return (
    <Page title='Blog'>
      <h1>Blog</h1>
      <PostPreviews />
    </Page>
  )
}

export default Blog
