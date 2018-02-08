import React from 'react'
import Helmet from 'react-helmet'

const Project = ({
  title,
  description,
  githubUrl,
  demoUrl,
  languages,
  libraries
}) => (
  <article
    className='project'
    style={{
      border: '0.15em solid #c911b0',
      borderRadius: '0.5em',
      margin: '1em auto 1.5em auto',
      padding: '0 1em'
    }}
  >
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

const ProjectPage = () => (
  <section>
    <Helmet title='Projects | Mark Hernandez' />
    <h1>Projects</h1>

    <Project
      title='Sound of Code'
      description='Sonifies your JavaScript code'
      demoUrl='https://raikesschoolds.github.io/cse-cohen'
      languages={['JavaScript']}
      libraries={['Acorn', 'HowlerJS', 'React', 'Redux']}
    />
    <Project
      title='Generator LionByte'
      description='A Yeoman generator for NodeJS projects'
      githubUrl='https://github.com/MarkH817/generator-lionbyte'
      languages={['JavaScript']}
      libraries={['Yeoman-Generator']}
    />
    <Project
      title='Online Shop Application'
      description='A web application following MVC approach'
      githubUrl='https://github.com/thien0411/CSCE464-Online-Shop-Application'
      languages={['Java']}
      libraries={['Java Servlets']}
    />
    <Project
      title='Blog Single Page App'
      description='A blog SPA that connects to a REST API'
      githubUrl='https://github.com/MarkH817/blog-single-page-application'
      languages={['JavaScript']}
      libraries={['Angular', 'ExpressJS', 'MongoDB']}
    />
    <Project
      title='Pallete Ballot'
      description='An extension to store and access color palettes'
      githubUrl='https://github.com/MarkH817/palette-ballot'
      languages={['JavaScript']}
      libraries={['React']}
    />
    <Project
      title='Sync or Swim'
      description='A simple, fast, and secure file syncing application'
      githubUrl='https://github.com/QuentinCovert/SyncOrSwim'
      languages={['Python']}
      libraries={['SQLAlchemy', 'PyQT4', 'Watchman']}
    />
  </section>
)

export default ProjectPage
