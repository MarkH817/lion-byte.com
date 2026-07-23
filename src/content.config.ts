import { getMarginAtNotes, MarginNoteCollection } from '#loaders/at.margin.ts'
import { getNpmxLikes, NpmxLikesCollection } from '#loaders/dev.npmx.ts'
import { getPositions, PositionCollection } from '#loaders/id.sifa.ts'
import { isCheckMode } from '#loaders/utils/is-check-mode.ts'
import { postSchema } from '#models'
import { glob } from 'astro/loaders'
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
  loader: () => (isCheckMode() ? Promise.resolve([]) : getNpmxLikes()),
  schema: NpmxLikesCollection,
})
const marginAtNotes = defineCollection({
  loader: () => (isCheckMode() ? Promise.resolve([]) : getMarginAtNotes()),
  schema: MarginNoteCollection,
})
const careerPositions = defineCollection({
  loader: () => (isCheckMode() ? Promise.resolve([]) : getPositions()),
  schema: PositionCollection,
})

export const collections = {
  blog,
  notes,
  npmxLikes,
  marginAtNotes,
  careerPositions,
}
