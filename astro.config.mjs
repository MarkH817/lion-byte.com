// @ts-check
import SITE from '#data/site.json' with { type: 'json' }
import { externalLinksPlugin } from '#utils/plugins/satteri.ts'
import { satteri } from '@astrojs/markdown-satteri'
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap'
import icon from 'astro-icon'
import og from 'astro-og'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: SITE.url,
  integrations: [
    icon(),
    og(),
    sitemap({
      lastmod: new Date(),
      changefreq: ChangeFreqEnum.WEEKLY,
      chunks: {
        posts: (item) => {
          if (/\/(blog|notes)\//.test(item.url)) {
            item.priority = 0.7
            return item
          }
        },
      },
      serialize: (item) => {
        if (item.url.endsWith('.com/')) {
          item.changefreq = ChangeFreqEnum.DAILY
          item.priority = 1
        } else if (/\/about\//.test(item.url)) {
          item.priority = 0.7
        }
        return item
      },
    }),
  ],
  markdown: {
    shikiConfig: { wrap: true, theme: 'dark-plus' },
    processor: satteri({
      features: { gfm: { footnotes: { clobberPrefix: 'footnote--' } } },
      hastPlugins: [externalLinksPlugin],
    }),
  },
  trailingSlash: 'always',
})
