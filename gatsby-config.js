const path = require('path')

module.exports = {
  siteMetadata: {
    author: 'Mark Hernandez',
    description: 'A blog for NodeJS, web development, and stuff',
    siteUrl: 'https://www.lion-byte.com',
    title: 'Mark Hernandez'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false
        },
        logo: path.resolve(__dirname, './src/icons/favicon.png')
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: path.join(site.siteMetadata.siteUrl, edge.node.frontmatter.path),
                  guid: path.join(site.siteMetadata.siteUrl, edge.node.frontmatter.path),
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [ frontmatter___date ] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        date
                        path
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './posts'),
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
