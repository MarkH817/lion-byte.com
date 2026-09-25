/// <reference types='vitest/config' />

import { getViteConfig } from 'astro/config'
import SITE from '#data/site.json' with { type: 'json' }

export default getViteConfig({ test: { dir: './src/' } }, { site: SITE.url })
