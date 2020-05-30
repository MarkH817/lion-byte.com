const path = require('path')

const theme = require('./src/styles/theme')

const gql = String.raw

const PLUGIN_FEED_QUERY = gql`
  query PLUGIN_FEED_QUERY {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
`

const PLUGIN_FEED_BLOG_POSTS_QUERY = gql`
  query PLUGIN_FEED_BLOG_POSTS_QUERY {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "post" } } }
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
`

/** @type {import('gatsby').GatsbyConfig} */
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
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    { resolve: 'gatsby-plugin-less', options: { modifyVars: theme } },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: { color: theme['color-primary'], showSpinner: true }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: PLUGIN_FEED_QUERY,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              })),
            query: PLUGIN_FEED_BLOG_POSTS_QUERY,
            output: '/rss.xml',
            title: 'Mark Hernandez (lion-byte)'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './src/posts'),
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './src/images'),
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './src/projects'),
        name: 'projects'
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
            options: { showCaptions: true }
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
        theme_color: theme['color-primary'],
        display: 'minimal-ui',
        icon: './src/images/profile.png'
      }
    },
    'gatsby-plugin-offline', // Must be placed after `gatsby-plugin-manifest`
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
