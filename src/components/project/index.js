import * as React from 'react'
import PropTypes from 'prop-types'

/**
 * @typedef {object} ProjectData
 * @property {string} title
 * @property {string} description
 * @property {string} demoUrl
 * @property {string} githubUrl
 * @property {Array<string>} languages
 * @property {Array<string>} libraries
 */

/** @type {ReadonlyArray<ProjectData>} */
export const projectListData = [
  {
    title: 'Generator LionByte',
    description: 'A Yeoman generator for NodeJS projecs.',
    demoUrl: '',
    githubUrl: 'https://github.com/MarkH817/generator-lionbyte',
    languages: ['JavaScript'],
    libraries: ['Yeoman-Generator']
  },
  {
    title: 'Sound of Code',
    description: 'Sonifies your JavaScript code.',
    demoUrl: '',
    githubUrl: '',
    languages: ['JavaScript'],
    libraries: ['Acorn', 'Howler', 'React', 'Redux']
  },
  {
    title: 'Soft Sight',
    description: 'Detect likely explicit Tumblr blogs.',
    demoUrl: 'https://soft-sight.netlify.com',
    githubUrl: 'https://github.com/lion-byte/soft-sight',
    languages: ['JavaScript'],
    libraries: ['Axios', 'Moment', 'React', 'Tumblr.js', 'AWS Lambda']
  },
  {
    title: 'Web Chat',
    description: 'Web chat application using Socket.IO and WebRTC',
    demoUrl: 'https://mark-p2p-chat.netlify.com/',
    githubUrl: 'https://github.com/MarkH817/network-comm-project',
    languages: ['JavaScript'],
    libraries: ['Simple-peer', 'Socket.io', 'React', 'Redux']
  },
  {
    title: 'Online Shop Application',
    description: 'A web application following MVC approach.',
    demoUrl: '',
    githubUrl: 'https://github.com/thien0411/CSCE464-Online-Shop-Application',
    languages: ['Java'],
    libraries: ['Java Servlets']
  },
  {
    title: 'Blog Single Page App',
    description: 'A blog SPA that connects to a REST API.',
    demoUrl: '',
    githubUrl: 'https://github.com/MarkH817/blog-single-page-application',
    languages: ['JavaScript'],
    libraries: ['Angular', 'Express', 'MongoDB']
  },
  {
    title: 'Palette Ballot',
    description: 'An extension to store and access color palettes.',
    demoUrl: '',
    githubUrl: 'https://github.com/MarkH817/palette-ballot',
    languages: ['JavaScript'],
    libraries: ['React']
  },
  {
    title: 'Sync or Swim',
    description: 'A simple, fast, and secure file syncing application.',
    demoUrl: '',
    githubUrl: 'https://github.com/QuentinCovert/SyncOrSwim',
    languages: ['Python'],
    libraries: ['SQLAlchemy', 'PyQT4', 'Watchman']
  }
]

export class Project extends React.PureComponent {
  render () {
    const {
      title,
      description,
      githubUrl,
      demoUrl,
      languages,
      libraries
    } = this.props

    return (
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
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  libraries: PropTypes.arrayOf(PropTypes.string)
}

Project.defaultProps = {
  languages: [],
  libraries: []
}

export class ProjectList extends React.PureComponent {
  render () {
    const { className } = this.props

    return (
      <section className={className}>
        {projectListData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    )
  }
}

ProjectList.propTypes = {
  className: PropTypes.string
}
