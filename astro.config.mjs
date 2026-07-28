// @ts-check
import icon from 'astro-icon'
import og from 'astro-og'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.lion-byte.com',
  integrations: [icon(), og()],
  markdown: { shikiConfig: { wrap: true, theme: 'dark-plus' } },
})
