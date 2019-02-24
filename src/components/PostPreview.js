import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostPreviewStyles = styled.article`
  border: 1px solid transparent;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  header {
    flex: 1 0 15em;
    margin-right: 2em;

    h2 {
      margin: 0;
    }

    .date {
      font-size: 0.85em;
    }
  }

  .excerpt {
    flex: 3 1 25em;

    p {
      margin: 0;
    }
  }
`

/**
 * @param {object} props
 * @param {object} props.post
 * @param {object} props.post.frontmatter
 * @param {string} props.post.frontmatter.date
 * @param {string} props.post.frontmatter.path
 * @param {string} props.post.frontmatter.title
 * @param {string} props.post.excerpt
 */
export const PostPreview = props => {
  const {
    excerpt,
    frontmatter: { date, path, title }
  } = props.post

  return (
    <PostPreviewStyles>
      <header>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>

        <p className='date'>
          <time>{date}</time>
        </p>
      </header>

      <section className='excerpt'>
        <p>{excerpt}</p>
      </section>
    </PostPreviewStyles>
  )
}

export default PostPreview
