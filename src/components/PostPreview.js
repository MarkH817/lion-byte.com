import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostPreviewStyles = styled.article`
  margin-bottom: 2em;

  h2 {
    text-align: center;
    margin-bottom: 0;
  }

  .date {
    font-size: 0.85em;
    margin-top: 0;
  }
`

export const PostPreview = props => {
  const {
    post: { excerpt, frontmatter }
  } = props

  return (
    <PostPreviewStyles>
      <h2>
        <Link to={frontmatter.path}>{frontmatter.title}</Link>
      </h2>

      <p className='date'>
        <time>{frontmatter.date}</time>
      </p>

      <p className='excerpt'>{excerpt}</p>
    </PostPreviewStyles>
  )
}

export default PostPreview
