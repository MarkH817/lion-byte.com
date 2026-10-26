import {
  Client,
  RecordSchema,
  type AtIdentifierString,
  type InferInput,
} from '@atproto/lex'
import AT from '#data/at.json' with { type: 'json' }
import { parseRKey } from './parse-rkey'

const client = new Client(AT.pdsUrl)

export async function listAll<T extends RecordSchema>(ns: T) {
  return await Array.fromAsync(
    client.listAll(ns, {
      repo: AT.did as AtIdentifierString,
    }),
  ).then((list) =>
    list
      .filter((record) => ns.matches(record.value))
      .map((record) => ({
        uri: record.uri,
        rkey: parseRKey(record.uri),
        value: record.value as InferInput<T>,
      })),
  )
}
