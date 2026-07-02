import { getNpmxLikes } from '#lib'
import { postSchema } from '#models'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/posts' }),
  schema: postSchema,
})
const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/notes' }),
  schema: postSchema,
})
const npmxLikes = defineCollection({
  loader: {
    name: 'npmx-likes-loader',
    load: async ({ logger, parseData, store }) => {
      logger.info('Fetching npmx likes...')
      const npmxLikes = await getNpmxLikes()
      store.clear()
      for (const like of npmxLikes) {
        const id = like.id
        const data = await parseData({ id, data: like })
        store.set({ id, data })
      }
    },
  },
  schema: z.object({
    subjectRef: z.url(),
    packageName: z.string(),
    createdAt: z.date(),
  }),
})

export const collections = { blog, notes, npmxLikes }
