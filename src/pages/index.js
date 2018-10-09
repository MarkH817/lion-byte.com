import * as React from 'react'
import { Link } from 'gatsby'

import { PostPreviewList } from '../components/post'
import { ProfileImage } from '../components/profile'
import { Page } from '../templates/page'

const center = { textAlign: 'center' }

export default class HomePage extends React.PureComponent {
  render () {
    return (
      <Page>
        <h1>Welcome</h1>

        <section style={{ display: 'flex', alignItems: 'center' }}>
          <section>
            <ProfileImage />
          </section>

          <p style={{ flex: '1 1 auto', margin: '0 1em' }}>
            Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a
            web developer and a computer science student at the University of
            Nebraska - Lincoln.
          </p>
        </section>

        <h2>Recent Blog Posts</h2>

        <PostPreviewList limit={2} />

        <div style={center}>
          <Link to='/blog'>&laquo; View more posts &raquo;</Link>
        </div>
      </Page>
    )
  }
}
