import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const PROJECTS_QUERY = graphql`
  query PROJECTS_QUERY {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            demoUrl
            githubUrl
            languages
            libraries
          }
          html
        }
      }
    }
  }
`

export const ProjectListStyles = styled.div`
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
  }

  .project {
    .description p {
      margin-bottom: 1.5em;
    }

    footer {
      font-size: 0.85em;

      p {
        margin: 0.5em 0;
      }
    }
  }
`

/**
 * @typedef {object} ProjectData
 * @property {string} id
 * @property {object} frontmatter
 * @property {string} frontmatter.title
 * @property {Array<string>} frontmatter.languages
 * @property {Array<string>} frontmatter.libraries
 * @property {string} [frontmatter.githubUrl]
 * @property {string} [frontmatter.demoUrl]
 * @property {string} html
 */

export function Projects () {
  const data = useStaticQuery(PROJECTS_QUERY)
  /** @type {Array<ProjectData>} */
  const projects = data.projects.edges.map(edge => edge.node)

  return (
    <ProjectListStyles>
      <h2>Projects</h2>

      <section className='project-list'>
        {projects.map(project => (
          <article key={project.id} className='project'>
            <h3>{project.frontmatter.title}</h3>

            <section
              className='description'
              dangerouslySetInnerHTML={{ __html: project.html }}
            />

            <footer>
              {project.frontmatter.demoUrl ? (
                <a
                  href={project.frontmatter.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.frontmatter.demoUrl}
                </a>
              ) : null}

              {project.frontmatter.githubUrl ? (
                <a
                  href={project.frontmatter.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.frontmatter.githubUrl}
                </a>
              ) : null}

              <p>Written in: {project.frontmatter.languages.join(', ')}</p>
              <p>Libraries: {project.frontmatter.libraries.join(', ')}</p>
            </footer>
          </article>
        ))}
      </section>
    </ProjectListStyles>
  )
}

export default Projects
