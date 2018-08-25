import * as React from 'react'

import { PostPreviewList } from '../components/post'
import { TextType } from '../components/animated/textType'
import { Page } from '../templates/page'

export default class HomePage extends React.PureComponent {
  render () {
    return (
      <Page>
        <h1>
          <TextType text='Welcome' />
        </h1>

        <h2>
          <TextType text='Blog' />
        </h2>

        <PostPreviewList limit={2} />
      </Page>
    )
  }
}
