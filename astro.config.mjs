// @ts-check
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap'
import icon from 'astro-icon'
import og from 'astro-og'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.lion-byte.com',
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
        if (/\.com\/$/.test(item.url)) {
          item.changefreq = ChangeFreqEnum.DAILY
          item.priority = 1
        } else if (/\/about\//.test(item.url)) {
          item.priority = 0.7
        }
        return item
      },
    }),
  ],
  markdown: { shikiConfig: { wrap: true, theme: 'dark-plus' } },
})
