import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectStyles = styled.article`
  margin-bottom: 3em;

  .description p {
    margin-bottom: 1.5em;
  }

  footer {
    font-size: 0.85em;

    p {
      margin: 0.5em 0 0.5em 0;
    }
  }
`

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

Project.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    libraries: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  html: PropTypes.string.isRequired
}

Project.defaultProps = {
  languages: [],
  libraries: []
}

export default Project
