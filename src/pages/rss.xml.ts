import SITE from '#data/site.json'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import rss, { type AtomEntry } from 'astrojs-atom'
import { parse as htmlParser } from 'node-html-parser'
import sanitizeHtml from 'sanitize-html'
import { markdownToHtml } from 'satteri'

export const GET = (async (context) => {
  const posts = await getCollection('blog').then((list) =>
    list.toSorted((a, b) => b.data.date.valueOf() - a.data.date.valueOf()),
  )

  const entries: AtomEntry[] = []
  for (const post of posts) {
    // Referencing https://billyle.dev/posts/adding-rss-feed-content-and-fixing-markdown-image-paths-in-astro#the-image-relative-path-fix
    const body = markdownToHtml(post.body!)
    const html = htmlParser.parse(body.html)
    const images = html.querySelectorAll('img')

    for (const img of images) {
      const src = img.getAttribute('src')
      if (!src) {
        continue
      }
      if (src.startsWith('/')) {
        img.setAttribute('src', new URL(src, SITE.url).href)
      }
    }

    const postUrl = new URL(`/blog/${post.id}`, context.site).href
    entries.push({
      title: post.data.title,
      link: [{ href: postUrl }],
      id: postUrl,
      updated: post.data.date.toISOString(),
      content: {
        type: 'html',
        value: sanitizeHtml(html.toString(), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        }),
      },
    })
  }

  return rss({
    title: `Blog | ${SITE.name}`,
    subtitle: 'A feed of the latest blog posts',
    link: [
      { href: new URL('/rss.xml', context.site).href, rel: 'self' },
      { href: context.site!.href },
    ],
    generator: undefined,
    updated: posts[0].data.date.toISOString(),
    id: context.site?.href!,
    author: [{ name: SITE.authorName, email: SITE.authorEmail }],
    entry: entries,
  })
}) satisfies APIRoute
