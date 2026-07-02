import NAVIGATION from '#data/navigation.json' with { type: 'json' }
import SITE from '#data/site.json' with { type: 'json' }
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, test } from 'vitest'
import Header from './Header.astro'

describe('Header', () => {
  test('contains main navigation links', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Header)
    for (const link of NAVIGATION.main) {
      expect(result).toContain(link.url)
    }
  })

  test('add aria-current=page and data-state=active for /blog', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Header, {
      request: new Request(new URL('/blog', SITE.url)),
    })
    expect(result).toContain('aria-current="page"')
    expect(result).toContain('data-state="active"')
  })

  test('only add data-state=active for /blog/*', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Header, {
      request: new Request(new URL('/blog/hello', SITE.url)),
    })
    expect(result).not.toContain('aria-current="page"')
    expect(result).toContain('data-state="active"')
  })
})
