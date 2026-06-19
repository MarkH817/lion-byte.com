import { z } from 'astro/zod'

export const postSchema = z.object({
  date: z.date(),
  title: z.string()
})

export type PostFrontmatter = z.infer<typeof postSchema>
