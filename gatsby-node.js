const { resolve } = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = resolve(__dirname, './src/templates/BlogPostPage.js')

  return graphql(`
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.posts

    edges.forEach(edge => {
      const {
        id,
        frontmatter: { path }
      } = edge.node

      createPage({
        path,
        component: blogPostTemplate,
        context: {
          id
        }
      })
    })
  })
}
