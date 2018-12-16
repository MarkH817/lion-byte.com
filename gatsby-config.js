const path = require('path')

module.exports = {
  siteMetadata: {
    author: 'Mark Hernandez',
    description: 'A blog for NodeJS, web development, and stuff',
    siteUrl: 'https://www.lion-byte.com',
    title: 'Mark Hernandez (lion-byte)',
    keywords: 'portfolio, web development, JavaScript, NodeJS'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(
                ({ node: { excerpt, html, frontmatter } }) => {
                  return Object.assign({}, frontmatter, {
                    description: excerpt,
                    url: path.join(site.siteMetadata.siteUrl, frontmatter.path),
                    guid: path.join(
                      site.siteMetadata.siteUrl,
                      frontmatter.path
                    ),
                    custom_elements: [{ 'content:encoded': html }]
                  })
                }
              )
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [ frontmatter___date ] }
                  filter: { frontmatter: {type: {eq: "post"}}}
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './src'),
        name: 'site'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 624
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mark Hernandez (lion-byte)',
        short_name: 'Mark H.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#28579d',
        display: 'minimal-ui',
        icon: './src/icons/profile.png'
      }
    },
    'gatsby-plugin-offline', // Must be placed after `gatsby-plugin-manifest`
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
