import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { postFrontmatter } from '#utils/markdown.ts'

export const getStaticPaths = (async () => {
  const posts = await getCollection('notes')
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }))
}) satisfies GetStaticPaths

export const GET = (async ({ props }) => {
  const post = props.post as CollectionEntry<'notes'>
  const body = `${postFrontmatter(post)}

${post.body ?? ''}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}) satisfies APIRoute
