import { TID } from '@atproto/common-web'
import { hash } from 'node:crypto'

/**
 * Get clock ID for a given `namespace` input.
 * Further reduces collision chance for generated `TID` values.
 */
export function getClockID(namespace: string) {
  const hex = hash('sha256', namespace, 'hex')
  return Number.parseInt(hex.slice(0, 4), 16) % 1024
}

export function dateToTID(namespace: string, date: Date) {
  const clockID = getClockID(namespace)
  /** Unix timestamp in microseconds */
  const timestamp = date.getTime() * 1_000
  return TID.fromTime(timestamp, clockID)
}
