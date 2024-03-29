const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginWebc = require('@11ty/eleventy-plugin-webc')
const htmlMin = require('html-minifier')

const dateFilter = require('./src/filters/date-filter')
const isoDateFilter = require('./src/filters/iso-date-filter')

/**
 * @param {import('@11ty/eleventy').UserConfig} config
 */
module.exports = function (config) {
  // Plugins
  config.addPlugin(pluginRss)
  config.addPlugin(pluginSyntaxHighlight)
  config.addPlugin(pluginWebc, {
    components: ['./src/_includes/components/*.webc']
  })

  // Transforms
  config.addTransform('html-min', function (content) {
    if (this.page.outputPath?.endsWith('.html')) {
      return htmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }

    return content
  })

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
  config.setServerOptions({ showAllHosts: true, showVersion: true })

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: { input: 'src', output: 'dist' }
  }
}
