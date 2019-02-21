import React from 'react'
import styled from 'styled-components'

const ProjectStyles = styled.article`
  .description p {
    margin-bottom: 1.5em;
  }

  footer {
    font-size: 0.85em;

    p {
      margin: 0.5em 0;
    }
  }
`
/**
 * @param {object} props
 * @param {string} props.html
 * @param {object} props.frontmatter
 * @param {string} props.frontmatter.title
 * @param {Array<string>} props.frontmatter.languages
 * @param {Array<string>} props.frontmatter.libraries
 * @param {string} props.frontmatter.githubUrl
 * @param {string} props.frontmatter.demoUrl
 */
export const Project = props => {
  const {
    frontmatter: { title, languages, libraries, githubUrl, demoUrl },
    html
  } = props

  return (
    <ProjectStyles>
      <h3>{title}</h3>

      <section
        className='description'
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer>
        {!demoUrl ? null : (
          <p>
            Demo:{' '}
            <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
              {demoUrl}
            </a>
          </p>
        )}

        {!githubUrl ? null : (
          <p>
            Repository:{' '}
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              {githubUrl}
            </a>
          </p>
        )}

        <p>Written in: {languages.join(', ')}</p>

        <p>Libraries: {libraries.join(', ')}</p>
      </footer>
    </ProjectStyles>
  )
}

export default Project
