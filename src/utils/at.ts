import AT from '#data/at.json' with { type: 'json' }

/**
 * Create URI associated with my DID
 */
export function getATUri(collection: string, rkey: string): string {
  return `at://${AT.did}/${collection}/${rkey}`
}
