import AT from '#data/at.json' with { type: 'json' }
import { Agent, CredentialSession } from '@atproto/api'

let client: Agent | null = null
export function getClient(): Agent {
  if (!client) {
    client = new Agent(new CredentialSession(new URL(AT.pdsUrl)))
  }
  return client
}

let did: string | null = null
export async function getDid() {
  if (did === null) {
    const client = getClient()
    const { data: identity } = await client.resolveHandle({ handle: AT.handle })
    did = identity.did
  }
  return did
}
