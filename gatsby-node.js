const { resolve } = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const {
      posts: { edges }
    } = data

    edges.forEach(({ node }) => {
      const {
        id,
        frontmatter: { path }
      } = node

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
