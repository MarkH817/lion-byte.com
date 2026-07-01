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
  loader: async () => {
    const records = await getNpmxLikes()
    return records
  },
  schema: z.object({
    subjectRef: z.url(),
    packageName: z.string(),
    createdAt: z.date(),
  }),
})

export const collections = { blog, notes, npmxLikes }
