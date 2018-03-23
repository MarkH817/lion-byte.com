import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { Project } from '../components/Project'
import { TextType } from '../components/Animated/textType'
import './about.less'

const AboutPage = ({ data }) => {
  const { projects } = data.dataJson
  const { html: aboutHtml } = data.markdownRemark

  return (
    <Fragment>
      <Helmet title='About | Mark Hernandez' />

      <h1>
        <TextType text='About' />
      </h1>

      <section
        className='bio'
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />

      <h2>
        <TextType text='Projects' />
      </h2>

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
