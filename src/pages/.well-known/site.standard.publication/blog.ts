import type { APIRoute } from 'astro'
import AT from '#data/at.json' with { type: 'json' }

export const GET = (() => {
  return new Response(AT['standard.site.publication'].blog, {
    headers: { 'Content-Type': 'text/plain' },
  })
}) satisfies APIRoute
