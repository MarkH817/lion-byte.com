import React from 'react'

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

    <p>
      {githubUrl && (
        <a href={githubUrl} target='noopener'>
          GitHub
        </a>
      )}

      {githubUrl && demoUrl && ' | '}

      {demoUrl && (
        <a href={demoUrl} target='noopener'>
          Demo
        </a>
      )}
    </p>

    <p>{description}</p>

    <p>
      {languages &&
        languages.map((lang, idx) => (
          <span className='label default' key={idx}>
            {lang}
          </span>
        ))}
      {libraries &&
        libraries.map((lib, idx) => (
          <span className='label info' key={idx}>
            {lib}
          </span>
        ))}
    </p>
  </article>
)
