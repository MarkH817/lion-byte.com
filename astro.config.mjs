// @ts-check
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.lion-byte.com',
  integrations: [icon()],
  markdown: { shikiConfig: { wrap: true, theme: 'dark-plus' } }
})
