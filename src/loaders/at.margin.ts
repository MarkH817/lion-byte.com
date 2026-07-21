import AT from '#data/at.json' with { type: 'json' }
import note from '#lexicons/at/margin/note.ts'
import { Client } from '@atproto/lex'
import { z } from 'zod/mini'
import { parseRKey } from './utils/parse-rkey'

export const MarginNoteCollection = z.object({
  id: z.string(),
  createdAt: z.date(),
  tags: z.array(z.string()),
  title: z.string(),
  source: z.url(),
  highlightQuote: z.nullable(z.string()),
  motivation: z.string(),
})

export async function getMarginAtNotes() {
  const client = new Client(AT.pdsUrl)
  const iterator = client.listAll(note, {
    repo: AT.handle as `${string}.${string}`,
  })

  const results: z.infer<typeof MarginNoteCollection>[] = []
  for await (const record of iterator) {
    if (!note.matches(record.value)) {
      continue
    }
    results.push({
      id: parseRKey(record.uri),
      createdAt: new Date(record.value.createdAt),
      tags: record.value.tags ?? [],
      title: record.value.target.title ?? '',
      source: record.value.target.source,
      highlightQuote: record.value.target.selector?.exact ?? null,
      motivation: record.value.motivation,
    })
  }
  return results
}
