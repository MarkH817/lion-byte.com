import PAGES from '#data/pages.json' with { type: 'json' }
import SITE from '#data/site.json' with { type: 'json' }
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET = (async (ctx) => {
  const blogPosts = await getCollection('blog').then((l) =>
    l.toSorted(
      (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
    ),
  )
  const notePosts = await getCollection('notes').then((l) =>
    l.toSorted(
      (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
    ),
  )

  const body = `# ${SITE.name}

> ${SITE.description}

## Pages

${Object.entries(PAGES)
  .filter(([_, page]) => page.description && page.description.length > 0)
  .map(
    ([path, page]) =>
      `- [${page.title}](${new URL(path, ctx.url.origin)}): ${page.description}`,
  )
  .join('\n')}

## Blog

${blogPosts.map((p) => `- [${p.data.title}](${new URL(`/blog/${p.id}.md`, ctx.url.origin)}): ${p.data.description}`).join('\n')}

## Notes

${notePosts.map((p) => `- [${p.data.title}](${new URL(`/notes/${p.id}.md`, ctx.url.origin)}): ${p.data.description}`).join('\n')}
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}) satisfies APIRoute
