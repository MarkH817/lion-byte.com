const dateFilter = require('./src/filters/date-filter')
const isoDateFilter = require('./src/filters/iso-date-filter')

module.exports = config => {
  config.addPassthroughCopy('./src/images/')

  // Filters
  config.addFilter('dateFilter', dateFilter)
  config.addFilter('isoDateFilter', isoDateFilter)

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
