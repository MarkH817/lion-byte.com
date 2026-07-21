import { z } from 'zod/mini'
import { fetchListRecords } from './utils'
import { DateTimeSchema, defineRecordSchema } from './utils/schema'

const MarginNoteRecord = defineRecordSchema(
  z.object({
    createdAt: DateTimeSchema,
    tags: z._default(z.array(z.string()), []),
    target: z.object({
      title: z._default(z.string(), ''),
      source: z.url(),
      selector: z.optional(z.object({ exact: z.optional(z.string()) })),
    }),
    motivation: z.string(),
  }),
)

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
  const records = await fetchListRecords({
    collection: 'at.margin.note',
    recordSchema: MarginNoteRecord,
    transform: (record) => {
      return {
        id: record.id,
        createdAt: record.value.createdAt,
        tags: record.value.tags,
        title: record.value.target.title,
        source: record.value.target.source,
        highlightQuote: record.value.target.selector?.exact ?? null,
        motivation: record.value.motivation,
      }
    },
  })
  return records
}
