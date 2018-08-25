import * as React from 'react'
import { Link } from 'gatsby'

import { PostPreviewList } from '../components/post'
import { TextType } from '../components/animated'
import { Page } from '../templates/page'

const center = { textAlign: 'center' }

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

        <div style={center}>
          <Link to='/blog'>&laquo; View more posts &raquo;</Link>
        </div>
      </Page>
    )
  }
}
