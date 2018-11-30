import React from 'react'

import Page from '../templates/Page'
import PostPreviewList from '../components/PostPreviewList'

export const Blog = props => (
  <Page title='Blog'>
    <h1>Blog</h1>

    <PostPreviewList limit={1000} />
  </Page>
)

export default Blog
