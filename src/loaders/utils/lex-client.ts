import { Client, RecordSchema, type AtIdentifierString } from '@atproto/lex'
import AT from '#data/at.json' with { type: 'json' }

const client = new Client(AT.pdsUrl)

export async function listAll<T extends RecordSchema>(ns: T) {
  return await Array.fromAsync(
    client.listAll(ns, {
      repo: AT.did as AtIdentifierString,
    }),
  )
}
