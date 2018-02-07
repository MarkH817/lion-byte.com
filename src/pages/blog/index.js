import React from 'react'
import Helmet from 'react-helmet'

const BlogPost = ({ frontmatter, excerpt }) => (
  <article>
    <h1>{frontmatter.title}</h1>

    <section>
      <p>{excerpt}</p>
    </section>
  </article>
)

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <section>
      <Helmet title='Blog | Mark Hernandez' />
      <h1>Blog</h1>
      {posts.map(({ node }, index) => <BlogPost key={index} {...node} />)}
    </section>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`
