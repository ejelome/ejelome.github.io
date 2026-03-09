import { z } from 'zod'

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Note = z.infer<typeof NoteSchema>
