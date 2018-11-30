import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectStyles = styled.article`
  margin-bottom: 2em;

  footer {
    font-size: 0.85em;
  }
`

export const Project = props => {
  const {
    frontmatter: { title, languages, libraries },
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
