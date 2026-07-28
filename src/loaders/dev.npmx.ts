import like from '#lexicons/dev/npmx/feed/like.ts'
import { z } from 'zod/mini'
import { listAll } from './utils/lex-client'
import { parseRKey } from './utils/parse-rkey'

export const NpmxLikesCollection = z.object({
  id: z.string(),
  createdAt: z.date(),
  subjectRef: z.url(),
  packageName: z.string(),
})

export async function getNpmxLikes() {
  const records = await listAll(like)
  return records.reduce<z.infer<typeof NpmxLikesCollection>[]>(
    (acc, record) => {
      if (like.matches(record.value)) {
        acc.push({
          id: parseRKey(record.uri),
          createdAt: new Date(record.value.createdAt),
          subjectRef: record.value.subjectRef,
          packageName: extractPackageName(record.value.subjectRef),
        })
      }
      return acc
    },
    [],
  )
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
