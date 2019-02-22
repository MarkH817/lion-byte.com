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
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#28579d',
        showSpinner: true
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              }))
            },
            query: `{
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}}}) {
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
            }`,
            output: '/rss.xml',
            title: 'Mark Hernandez (lion-byte)'
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
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              showCaptions: true
            }
          }
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
        icon: './src/images/profile.png'
      }
    },
    'gatsby-plugin-offline', // Must be placed after `gatsby-plugin-manifest`
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
