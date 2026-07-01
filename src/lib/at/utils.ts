import AT from '#data/at.json' with { type: 'json' }
import {
  Agent,
  CredentialSession,
  ComAtprotoRepoListRecords,
} from '@atproto/api'

let client: Agent | null = null

export function getAgent(): Agent {
  if (client) {
    return client
  }

  client = new Agent(new CredentialSession(new URL(AT.pdsUrl)))
  return client
}

export const DEFAULT_PAGE_SIZE = 50

export async function fetchListRecords<Item>(
  collection: string,
  predicate: (record: ComAtprotoRepoListRecords.Record) => Item,
  pageSize = DEFAULT_PAGE_SIZE,
): Promise<Item[]> {
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
      records.push(predicate(record))
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
