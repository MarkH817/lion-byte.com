import { z } from 'astro/zod'
import { DateTimeSchema, defineRecordSchema, fetchListRecords } from './utils'

const MotivationEnum = z.enum(['bookmarking', 'highlighting'])

const MarginNoteRecord = defineRecordSchema(
  z.object({
    createdAt: z.iso.datetime(),
    tags: z.string().array().default([]),
    target: z.object({
      title: z.string().default(''),
      source: z.string(),
      selector: z.object({ exact: z.string().optional() }).optional(),
    }),
    motivation: MotivationEnum,
  }),
)

export const MarginNoteCollection = z.object({
  createdAt: DateTimeSchema,
  tags: z.string().array(),
  title: z.string(),
  source: z.string(),
  highlightQuote: z.string().nullable(),
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
