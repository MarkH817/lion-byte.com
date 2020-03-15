const { resolve } = require('path')

/** @type {import('gatsby').GatsbyNode} */
module.exports = {
  async createPages ({ actions, graphql }) {
    const { createPage } = actions
    const blogPostTemplate = resolve(
      __dirname,
      './src/templates/BlogPostPage.js'
    )

    const result = await graphql(`
      query CreatePagesQuery {
        posts: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "post" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      throw result.errors
    }

    const { edges } = result.data.posts

    edges.forEach(edge => {
      const {
        id,
        frontmatter: { path }
      } = edge.node
      createPage({ path, component: blogPostTemplate, context: { id } })
    })
  }
}
