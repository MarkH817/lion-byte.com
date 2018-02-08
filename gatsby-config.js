module.exports = {
  siteMetadata: {
    title: 'Mark Hernandez',
    author: 'Mark Hernandez'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
