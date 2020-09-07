const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/filters/date-filter')
const isoDateFilter = require('./src/filters/iso-date-filter')

module.exports = config => {
  // Plugins
  config.addPlugin(syntaxHighlight)

  // Passthrough copies
  config.addPassthroughCopy('./src/images/')

  // Filters
  config.addFilter('dateFilter', dateFilter)
  config.addFilter('isoDateFilter', isoDateFilter)

  // Collections
  config.addCollection('blog', collection =>
    Array.from(collection.getFilteredByGlob('./src/posts/*.md')).reverse()
  )
  config.addCollection('projects', collection =>
    Array.from(collection.getFilteredByGlob('./src/projects/*.md'))
  )

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: { input: 'src', output: 'dist' }
  }
}
