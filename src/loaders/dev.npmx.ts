import { z } from 'astro/zod'
import { DateTimeSchema, defineRecordSchema, fetchListRecords } from './utils'

const NpmxFeedLikeRecord = defineRecordSchema(
  z.object({
    subjectRef: z.string(),
    createdAt: DateTimeSchema,
  }),
)
export const NpmxLikesCollection = z.object({
  subjectRef: z.url(),
  packageName: z.string(),
  createdAt: z.date(),
})

export async function getNpmxLikes() {
  const records = await fetchListRecords({
    collection: 'dev.npmx.feed.like',
    recordSchema: NpmxFeedLikeRecord,
    transform: (record) => {
      return {
        id: record.id,
        createdAt: record.value.createdAt,
        subjectRef: record.value.subjectRef,
        packageName: extractPackageName(record.value.subjectRef),
      }
    },
  })
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
