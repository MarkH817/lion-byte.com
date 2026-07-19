import { z } from 'zod/mini'

export const DateTimeSchema = z.pipe(
  z.iso.datetime(),
  z.transform((d) => new Date(d)),
)

const BaseATRecordSchema = z.object({
  $type: z.optional(z.string()),
  uri: z.string(),
  cid: z.string(),
  value: z.record(z.string(), z.unknown()),
})
export function defineRecordSchema<
  T extends z.core.$ZodRecord | z.core.$ZodObject,
>(valueSchema: T) {
  return z.pipe(
    z.extend(BaseATRecordSchema, { value: valueSchema }),
    z.transform((v) => ({
      ...v,
      id: v.uri.split('/').pop()!,
    })),
  )
}
