import { z } from 'astro/zod'

export const postSchema = z.object({
  publishedDate: z.date(),
  modifiedDate: z.date().optional(),
  title: z.string(),
  description: z.string(),
})
