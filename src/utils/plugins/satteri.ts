import SITE from '#data/site.json' with { type: 'json' }
import { defineHastPlugin } from 'satteri'

/**
 * Reference: https://satteri.bruits.org/docs/plugins/#hast-plugins
 */
export const externalLinksPlugin = defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties.href
      if (typeof href === 'string' && href.startsWith('http')) {
        ctx.setProperty(node, 'target', '_blank')
        ctx.setProperty(node, 'rel', 'noopener')
      }
    },
  },
})

/**
 * For documents to be read externally from the site (i.e. `rss.xml`)
 */
export const absolutePathsPlugin = defineHastPlugin({
  name: 'absolute-paths',
  element: [
    {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties.href
        if (typeof href === 'string' && href.startsWith('/')) {
          ctx.setProperty(node, 'href', new URL(href, SITE.url).href)
        }
      },
    },
    {
      filter: ['img'],
      visit(node, ctx) {
        const src = node.properties.src
        if (typeof src === 'string' && src.startsWith('/')) {
          ctx.setProperty(node, 'src', new URL(src, SITE.url).href)
        }
      },
    },
  ],
})
