/// <reference types='vitest/config' />
import SITE from '#data/site.json' with { type: 'json' }
import { getViteConfig } from 'astro/config'

export default getViteConfig({}, { site: SITE.url })
