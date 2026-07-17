import AT from '#data/at.json' with { type: 'json' }
import { Agent, CredentialSession } from '@atproto/api'
import { z } from 'astro/zod'

let client: Agent | null = null

function getAgent(): Agent {
  if (client) {
    return client
  }

  client = new Agent(new CredentialSession(new URL(AT.pdsUrl)))
  return client
}

const DEFAULT_PAGE_SIZE = 50

interface FetchListRecordsOptions<
  RecordSchema extends z.ZodObject | z.ZodPipe,
  Item,
> {
  collection: string
  recordSchema: RecordSchema
  transform(record: z.infer<RecordSchema>): Item
  /** @default 50 */
  pageSize?: number
}
export async function fetchListRecords<
  RecordSchema extends z.ZodObject | z.ZodPipe,
  Item,
>({
  collection,
  recordSchema,
  transform,
  pageSize = DEFAULT_PAGE_SIZE,
}: FetchListRecordsOptions<RecordSchema, Item>) {
  const isCheckMode =
    process.argv.includes('check') || process.argv.includes('sync')
  if (isCheckMode) {
    console.info(`Check mode! Skipping fetch for "${collection}"`)
    return []
  }

  const agent = getAgent()
  const { data: identity } = await agent.resolveHandle({ handle: AT.handle })
  let cursor: string | undefined
  const records: Item[] = []

  // Paginate records
  do {
    const { data } = await agent.com.atproto.repo.listRecords({
      repo: identity.did,
      collection,
      limit: pageSize,
      cursor,
    })

    // Iterate over page
    for (const record of data.records) {
      const v = recordSchema.parse(record)
      records.push(transform(v as z.infer<RecordSchema>))
    }

    // Move to next page
    // Stop if no cursor is given or the page isn't full
    cursor = data.cursor
    if (data.records.length < pageSize) {
      break
    }
  } while (cursor)

  return records
}

export const DateTimeSchema = z.iso.datetime().transform((d) => new Date(d))
const BaseATRecordSchema = z.object({
  $type: z.string().optional(),
  uri: z.string(),
  cid: z.string(),
  value: z.record(z.string(), z.unknown()),
})

export function defineRecordSchema<T extends z.ZodRecord | z.ZodObject>(
  valueSchema: T,
) {
  return BaseATRecordSchema.extend({ value: valueSchema }).transform((v) => ({
    ...v,
    id: v.uri.split('/').pop()!,
  }))
}
