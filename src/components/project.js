import React from 'react'
import PropTypes from 'prop-types'

export const Project = ({
  title,
  description,
  githubUrl,
  demoUrl,
  languages,
  libraries
}) => (
  <article className='project'>
    <h3>{title}</h3>

    <hr />

    <p className='clearfix'>
      <span className='float-left'>Written in: {languages.join(', ')}</span>

      <span className='float-right'>
        {githubUrl && (
          <a href={githubUrl} target='noopener'>
            GitHub Repo
          </a>
        )}
      </span>

      {githubUrl &&
        demoUrl && <span className='float-right'>&nbsp;|&nbsp;</span>}

      <span className='float-right'>
        {demoUrl && (
          <a href={demoUrl} target='noopener'>
            Demo Link
          </a>
        )}
      </span>
    </p>

    {libraries && <p>Libraries used: {libraries.join(', ')}</p>}

    <p>{description}</p>
  </article>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  libraries: PropTypes.arrayOf(PropTypes.string).isRequired
}

Project.defaultProps = {
  languages: [],
  libraries: []
}
