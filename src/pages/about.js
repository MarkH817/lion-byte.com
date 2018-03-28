import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { TextType } from '../components/Animated/textType'
import { Project } from '../components/Project'
import './about.less'

const AboutPage = ({
  data: {
    dataJson: { projects },
    bio: { html: aboutHtml },
    site: { siteMetadata: { title: siteTitle } }
  }
}) => {
  return (
    <Fragment>
      <Helmet title='About | Mark Hernandez (lion-byte)' />

      <h2>
        <TextType text='About' />
      </h2>

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
    site {
      siteMetadata {
        title
      }
    }

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

    bio: markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "about" } }
    ) {
      html
    }
  }
`
