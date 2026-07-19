import { z } from 'zod/mini'
import { fetchListRecords } from './utils'
import { DateTimeSchema, defineRecordSchema } from './utils/schema'

const MotivationEnum = z.enum(['bookmarking', 'highlighting'])

const MarginNoteRecord = defineRecordSchema(
  z.object({
    createdAt: z.iso.datetime(),
    tags: z._default(z.array(z.string()), []),
    target: z.object({
      title: z._default(z.string(), ''),
      source: z.string(),
      selector: z.optional(z.object({ exact: z.optional(z.string()) })),
    }),
    motivation: MotivationEnum,
  }),
)

export const MarginNoteCollection = z.object({
  createdAt: DateTimeSchema,
  tags: z.array(z.string()),
  title: z.string(),
  source: z.string(),
  highlightQuote: z.nullable(z.string()),
  motivation: MotivationEnum,
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
