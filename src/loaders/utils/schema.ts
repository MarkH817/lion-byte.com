import { z } from 'zod/mini'

export const DateTimeSchema = z.pipe(
  z.iso.datetime(),
  z.transform((d) => new Date(d)),
)
