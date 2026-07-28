import AT from '#data/at.json' with { type: 'json' }
import { Client, RecordSchema } from '@atproto/lex'

const client = new Client(AT.pdsUrl)

export async function listAll<T extends RecordSchema>(ns: T) {
  return await Array.fromAsync(
    client.listAll(ns, {
      repo: AT.handle as `${string}.${string}`,
    }),
  )
}
