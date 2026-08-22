import { z } from 'astro/zod'

export const postSchema = z.object({
  date: z.date(),
  title: z.string(),
  description: z.string(),
})
