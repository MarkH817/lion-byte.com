import { z } from 'zod/mini'
import { getClient, getDid } from './utils/atproto-client'
import { isCheckMode } from './utils/is-check-mode'

const DEFAULT_PAGE_SIZE = 50

interface FetchListRecordsOptions<
  RecordSchema extends z.core.$ZodObject | z.core.$ZodPipe,
  Item,
> {
  collection: string
  recordSchema: RecordSchema
  transform(record: z.infer<RecordSchema>): Item
  pageSize?: number
}
export async function fetchListRecords<
  RecordSchema extends z.core.$ZodObject | z.core.$ZodPipe,
  Item,
>({
  collection,
  recordSchema,
  transform,
  pageSize = DEFAULT_PAGE_SIZE,
}: FetchListRecordsOptions<RecordSchema, Item>) {
  if (isCheckMode()) {
    console.info(`Check mode! Skipping fetch for "${collection}"`)
    return []
  }

  const client = getClient()
  const did = await getDid()
  let cursor: string | undefined
  const records: Item[] = []

  // Paginate records
  do {
    const { data } = await client.com.atproto.repo.listRecords({
      repo: did,
      collection,
      limit: pageSize,
      cursor,
    })

    // Iterate over page
    for (const record of data.records) {
      const v = z.parse(recordSchema, record)
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
