import note from '#lexicons/at/margin/note.ts'
import { z } from 'zod/mini'
import { listAll } from './utils/lex-client'
import { parseRKey } from './utils/parse-rkey'

export const MarginNoteCollection = z.object({
  id: z.string(),
  uri: z.string(),
  createdAt: z.date(),
  tags: z.array(z.string()),
  title: z.string(),
  source: z.url(),
  highlightQuote: z.nullable(z.string()),
  motivation: z.string(),
})

export async function getMarginAtNotes() {
  const records = await listAll(note)
  return records.reduce<z.infer<typeof MarginNoteCollection>[]>(
    (acc, record) => {
      if (note.matches(record.value)) {
        acc.push({
          id: parseRKey(record.uri),
          uri: record.uri,
          createdAt: new Date(record.value.createdAt),
          tags: record.value.tags ?? [],
          title: record.value.target.title ?? '',
          source: record.value.target.source,
          highlightQuote: record.value.target.selector?.exact ?? null,
          motivation: record.value.motivation,
        })
      }
      return acc
    },
    [],
  )
}
