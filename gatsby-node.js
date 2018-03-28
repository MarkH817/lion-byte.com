const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.join(__dirname, './src/templates/blog-post.js')

  return graphql(`
    query CreatePagesQuery {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(({ errors, data: { posts: { edges } } }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    edges.forEach(({ node: { frontmatter } }) => {
      switch (frontmatter.type) {
        case 'post':
          createPage({
            path: frontmatter.path,
            component: blogPostTemplate,
            context: {}
          })
          break
        default:
      }
    })
  })
}
