import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import { PostPreviewList } from '../components/post'
import { ProfileImage } from '../components/profile'
import { Page } from '../templates/page'
import { Project } from '../components/project'

const center = { textAlign: 'center' }

export default class HomePage extends React.PureComponent {
  render () {
    return (
      <Page>
        <h1>Welcome</h1>

        <section style={{ display: 'flex', alignItems: 'center' }}>
          <section>
            <ProfileImage />
          </section>

          <section style={{ flex: '1 1 auto', margin: '0 1em' }}>
            <p>
              Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a
              web developer and a computer science student at the University of
              Nebraska - Lincoln.
            </p>
          </section>
        </section>

        <section>
          <h2>Recent Blog Posts</h2>

          <hr />

          <PostPreviewList limit={2} />

          <div style={center}>
            <Link to='/blog'>&laquo; View more posts &raquo;</Link>
          </div>
        </section>

        <section>
          <h2>Projects</h2>

          <hr />

          <StaticQuery
            query={graphql`
              {
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
            `}
            render={data => {
              const {
                projects: { edges }
              } = data

              return edges.map(({ node }) => (
                <Project key={node.frontmatter.title} {...node} />
              ))
            }}
          />
        </section>
      </Page>
    )
  }
}
