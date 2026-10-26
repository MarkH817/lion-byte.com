import { z } from 'astro/zod'
import position from '#lexicons/id/sifa/profile/position.ts'
import { listAll } from './utils/lex-client'

export const PositionCollection = z.object({
  id: z.string(),
  uri: z.string(),
  title: z.string(),
  company: z.optional(z.string()),
  startedAt: z.string(),
  endedAt: z.optional(z.string()),
  description: z.optional(z.string()),
})

export async function getPositions() {
  const records = await listAll(position)
  return records.reduce<z.infer<typeof PositionCollection>[]>((acc, record) => {
    if (typeof record.value.isPrimary === 'boolean') {
      acc.push({
        id: record.rkey,
        uri: record.uri,
        title: record.value.title,
        company: record.value.company,
        startedAt: record.value.startedAt,
        endedAt: record.value.endedAt,
        description: record.value.description,
      })
    }
    return acc
  }, [])
}
