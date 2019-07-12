import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Project from './Project'

const ProjectListStyles = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
  }
`

const PROJECTS_QUERY = graphql`
  query PROJECTS_QUERY {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
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

export function Projects () {
  const data = useStaticQuery(PROJECTS_QUERY)
  const { edges } = data.projects

  return (
    <ProjectListStyles>
      <h2>Projects</h2>

      <section className='projects'>
        {edges.map(({ node }) => (
          <Project key={node.frontmatter.title} {...node} />
        ))}
      </section>
    </ProjectListStyles>
  )
}

export default Projects
