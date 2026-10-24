import type { InferInput } from '@atproto/lex'
import { z } from 'astro/zod'
import note from '#lexicons/at/margin/note.ts'
import type { NonEmptyList } from '#types/list.ts'
import { unique } from '#utils/list.ts'
import { listAll } from './utils/lex-client'
import { parseRKey } from './utils/parse-rkey'

export const MarginNoteCollection = z.object({
  id: z.string(),
  createdAt: z.date(),
  title: z.string(),
  source: z.url(),
  uris: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  quotes: z.array(z.string()).default([]),
  annotations: z.array(z.string()).default([]),
})

export async function getMarginAtNotes() {
  const records = await listAll(note)
  const notesBySource = new Map<
    string,
    NonEmptyList<{ uri: string; value: InferInput<typeof note> }>
  >()

  // Group entries by the source (uri)
  for (const record of records) {
    if (!note.matches(record.value)) {
      continue
    }
    const source = record.value.target.source
    const noteRecord = { uri: record.uri, value: record.value }
    if (notesBySource.has(source)) {
      notesBySource.get(source)!.push(noteRecord)
    } else {
      notesBySource.set(source, [noteRecord])
    }
  }

  // Combine entries into single record
  const result: Array<z.infer<typeof MarginNoteCollection>> = []
  for (const noteRecords of notesBySource.values()) {
    const sortedRecords = noteRecords.toSorted(
      (a, b) =>
        new Date(a.value.createdAt).getTime() -
        new Date(b.value.createdAt).getTime(),
    )
    const first = sortedRecords[0]
    result.push({
      id: parseRKey(first.uri),
      createdAt: new Date(first.value.createdAt),
      title: first.value.target.title ?? '',
      source: first.value.target.source,
      uris: sortedRecords.map((r) => r.uri),
      tags: unique(sortedRecords.flatMap((r) => r.value.tags ?? [])),
      annotations: sortedRecords
        .filter((r) => r.value.motivation === 'tagging')
        .map((r) => r.value.body?.value ?? ''),
      quotes: sortedRecords
        .filter((r) => r.value.motivation === 'highlighting')
        .map((r) => r.value.target.selector?.exact ?? ''),
    })
  }
  return result
}
