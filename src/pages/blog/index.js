import * as React from 'react'

import { TextType } from '../../components/animated'
import { PostPreviewList } from '../../components/post'
import { Page } from '../../templates/page'

export default class BlogIndexPage extends React.PureComponent {
  render () {
    return (
      <Page title='Blog'>
        <h1>
          <TextType text='Blog' />
        </h1>

        <PostPreviewList limit={1000} />
      </Page>
    )
  }
}
