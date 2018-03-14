import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import './about.less'
import { Project } from '../components/Project'

const AboutPage = ({ data }) => {
  const { projects } = data.dataJson
  const { html: aboutHtml } = data.markdownRemark

  return (
    <Fragment>
      <Helmet title='About | Mark Hernandez' />

      <h1>About</h1>

      <section
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />

      <h2>Projects</h2>

      <section className='project-area'>
        {projects.map((project, idx) => <Project key={idx} {...project} />)}
      </section>
    </Fragment>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    dataJson(name: { eq: "projects" }) {
      projects {
        title
        description
        demoUrl
        githubUrl
        languages
        libraries
      }
    }

    markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "about" } }
    ) {
      html
    }
  }
`
