import { postSchema } from '#models'
import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/posts' }),
  schema: postSchema
})
const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/notes' }),
  schema: postSchema
})

export const collections = { blog, notes }
