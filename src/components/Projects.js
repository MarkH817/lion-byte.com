import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Project from './Project'

const ProjectListStyles = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

export const Projects = () => (
  <StaticQuery query={PROJECTS_QUERY}>
    {data => {
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
    }}
  </StaticQuery>
)

export default Projects
