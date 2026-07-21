import { getMarginAtNotes, MarginNoteCollection } from '#loaders/at.margin.ts'
import { getNpmxLikes, NpmxLikesCollection } from '#loaders/dev.npmx.ts'
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
  loader: {
    name: 'npmx-likes-loader',
    load: async ({ logger, parseData, store }) => {
      if (isCheckMode()) {
        return
      }

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
  schema: NpmxLikesCollection,
})
const marginAtNotes = defineCollection({
  loader: {
    name: 'margin-at-notes-loader',
    load: async ({ logger, parseData, store }) => {
      if (isCheckMode()) {
        return
      }

      logger.info('Fetching margin.at notes...')
      const notes = await getMarginAtNotes()
      store.clear()
      for (const note of notes) {
        const id = note.id
        const data = await parseData({ id, data: note })
        store.set({ id, data })
      }
    },
  },
  schema: MarginNoteCollection,
})

export const collections = { blog, notes, npmxLikes, marginAtNotes }
