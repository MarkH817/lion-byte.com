import { fetchListRecords, type BaseRecord } from './utils'

export interface NpmxFeedLike extends BaseRecord {
  subjectRef: string
  packageName: string
}

export async function getNpmxLikes(): Promise<NpmxFeedLike[]> {
  const records = await fetchListRecords<NpmxFeedLike>(
    'dev.npmx.feed.like',
    (record) => {
      if (!('subjectRef' in record.value) || !('createdAt' in record.value)) {
        throw new Error(`Invalid liked package record: ${record.uri}.`, {
          cause: record,
        })
      }

      return {
        id: record.uri.split('/').pop()!,
        createdAt: new Date(record.value.createdAt as string),
        subjectRef: record.value.subjectRef as string,
        packageName: extractPackageName(record.value.subjectRef as string),
      }
    },
  )
  return records
}

/**
 * Extracts the package name from an npmx package URL.
 *
 * Examples:
 * - 'https://npmx.dev/package/lit' --> 'lit'
 * - 'https://npmx.dev/package/@angular/core' --> '@angular/core'
 */
export function extractPackageName(subjectRef: string): string {
  const match = subjectRef.match(/\/package\/(.+)$/)
  return match ? decodeURIComponent(match[1]) : subjectRef
}
