import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectStyles = styled.article`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Project = props => {
  const {
    frontmatter: { title, githubUrl, demoUrl, languages, libraries },
    html
  } = props

  return (
    <ProjectStyles>
      <div>
        <h3 style={{ marginTop: 0 }}>{title}</h3>

        <section>
          {languages.map(lang => (
            <span key={lang}>{lang}</span>
          ))}
        </section>

        {(githubUrl || demoUrl) && (
          <section>
            <p>
              {githubUrl && (
                <a href={githubUrl} target='noopener'>
                  Source Code
                </a>
              )}

              {githubUrl && demoUrl && ' '}

              {demoUrl && (
                <a href={demoUrl} target='noopener'>
                  Try It Out
                </a>
              )}
            </p>
          </section>
        )}

        <section dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div>
        <section>
          Libraries:
          <ul style={{ marginTop: 0 }}>
            {libraries.map(lib => (
              <li key={lib}>{lib}</li>
            ))}
          </ul>
        </section>
      </div>
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
