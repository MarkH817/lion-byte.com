import { z } from 'astro/zod'
import { fetchListRecords, type BaseRecord } from './utils'

export interface MarginAtNote extends BaseRecord {
  tags: string[]
  /** `target.title` */
  title: string
  /** `target.source` */
  source: string
  /** `target.selector?.exact` */
  highlightQuote: string | null
  motivation: 'bookmarking' | 'highlighting' | ({} & string)
}

const internalSchema = z.object({
  createdAt: z.iso.datetime(),
  tags: z.string().array().default([]),
  target: z.object({
    title: z.string(),
    source: z.string(),
    selector: z.object({ exact: z.string().optional() }).optional(),
  }),
  motivation: z.string(),
})

export async function getMarginAtNotes(): Promise<MarginAtNote[]> {
  const records = await fetchListRecords<MarginAtNote>(
    'at.margin.note',
    (record) => {
      const data = internalSchema.parse(record.value)

      return {
        id: record.uri.split('/').pop()!,
        createdAt: new Date(data.createdAt),
        tags: data.tags,
        title: data.target.title,
        source: data.target.source,
        highlightQuote: data.target.selector?.exact ?? null,
        motivation: data.motivation,
      }
    },
  )
  return records
}
