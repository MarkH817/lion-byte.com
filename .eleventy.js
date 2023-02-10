const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/filters/date-filter')
const isoDateFilter = require('./src/filters/iso-date-filter')

module.exports = config => {
  // Plugins
  config.addPlugin(pluginRss)
  config.addPlugin(pluginSyntaxHighlight)

  // Passthrough copies
  config.addPassthroughCopy('./src/images/')

  // Filters
  config.addFilter('dateFilter', dateFilter)
  config.addFilter('isoDateFilter', isoDateFilter)

  // Collections
  config.addCollection('blog', collection =>
    Array.from(collection.getFilteredByGlob('./src/posts/*.md')).reverse()
  )
  config.addCollection('notes', collection =>
    Array.from(collection.getFilteredByGlob('./src/notes/*.md'))
  )

  // Additional watch targets
  config.addWatchTarget('./src-app/')

  // Other configurations
  config.setWatchThrottleWaitTime(250)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: { input: 'src', output: 'dist' }
  }
}
