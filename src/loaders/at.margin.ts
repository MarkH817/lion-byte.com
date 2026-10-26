import { z } from 'astro/zod'
import note from '#lexicons/at/margin/note.ts'
import { unique } from '#utils/list.ts'
import { listAll } from './utils/lex-client'

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
  const records = await listAll(note).then((list) =>
    list.toSorted(
      (a, b) =>
        new Date(a.value.createdAt).getTime() -
        new Date(b.value.createdAt).getTime(),
    ),
  )
  const notesBySource = new Map<string, typeof records>()

  // Group entries by the source (uri)
  for (const record of records) {
    const source = record.value.target.source
    if (notesBySource.has(source)) {
      notesBySource.get(source)!.push(record)
    } else {
      notesBySource.set(source, [record])
    }
  }

  // Combine entries into single record
  return Array.from(notesBySource.values()).map<
    z.infer<typeof MarginNoteCollection>
  >((noteRecords) => {
    const first = noteRecords[0]
    return {
      id: first.rkey,
      createdAt: new Date(first.value.createdAt),
      title: first.value.target.title ?? '',
      source: first.value.target.source,
      uris: noteRecords.map((r) => r.uri),
      tags: unique(noteRecords.flatMap((r) => r.value.tags ?? [])),
      annotations: noteRecords
        .filter((r) => r.value.motivation === 'tagging')
        .map((r) => r.value.body?.value ?? ''),
      quotes: noteRecords
        .filter((r) => r.value.motivation === 'highlighting')
        .map((r) => r.value.target.selector?.exact ?? ''),
    }
  })
}
