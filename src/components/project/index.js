import * as React from 'react'
import PropTypes from 'prop-types'

export class Project extends React.PureComponent {
  render() {
    const {
      frontmatter: { title, githubUrl, demoUrl, languages, libraries },
      html
    } = this.props

    return (
      <article className="project" style={{ marginTop: '2em' }}>
        <div className="grid-flex">
          <div className="col col-sm-12 col-md-8 col-lg-8">
            <h3 style={{ marginTop: 0 }}>{title}</h3>

            <section>
              {languages.map(lang => (
                <span className="badge" key={lang}>
                  {lang}
                </span>
              ))}
            </section>

            {(githubUrl || demoUrl) && (
              <section>
                <p>
                  {githubUrl && (
                    <a className="button" href={githubUrl} target="noopener">
                      Source Code
                    </a>
                  )}

                  {githubUrl && demoUrl && ' '}

                  {demoUrl && (
                    <a className="button" href={demoUrl} target="noopener">
                      Try It Out
                    </a>
                  )}
                </p>
              </section>
            )}

            <section dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <div className="col col-sm-12 col-md-4 col-lg-4">
            <section>
              Libraries:
              <ul style={{ marginTop: 0 }}>
                {libraries.map(lib => (
                  <li key={lib}>{lib}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    )
  }
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
