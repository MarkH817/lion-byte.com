import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostPreviewStyles = styled.article`
  h3 {
    text-align: center;
  }

  .excerpt {
    font-size: 0.8em;
  }
`

export class PostPreview extends React.PureComponent {
  render () {
    const {
      post: { excerpt, frontmatter }
    } = this.props

    return (
      <PostPreviewStyles>
        <h3>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </h3>

        <p>
          <time>{frontmatter.date}</time>
        </p>

        <p className='excerpt'>{excerpt}</p>
      </PostPreviewStyles>
    )
  }
}

export default PostPreview
