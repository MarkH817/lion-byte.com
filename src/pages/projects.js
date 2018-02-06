import React from 'react'
import Helmet from 'react-helmet'

import './projects.less'

const Project = ({ title, description, githubUrl, demoUrl, languages }) => (
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
          <span className='label info' key={idx}>
            {lang}
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
    />
    <Project
      title='Generator LionByte'
      description='A Yeoman generator for NodeJS projects'
      githubUrl='https://github.com/MarkH817/generator-lionbyte'
      languages={['JavaScript']}
    />
    <Project
      title='Online Shop Application'
      description='A web application following MVC approach'
      githubUrl='https://github.com/thien0411/CSCE464-Online-Shop-Application'
      languages={['Java']}
    />
    <Project
      title='Pallete Ballot'
      description='An extension to store and access color palettes'
      githubUrl='https://github.com/MarkH817/palette-ballot'
      languages={['JavaScript']}
    />
    <Project
      title='Sync or Swim'
      description='A simple, fast, and secure file syncing application'
      githubUrl='https://github.com/QuentinCovert/SyncOrSwim'
      languages={['Python']}
    />
  </section>
)

export default ProjectPage
