import type { Request, Response } from 'express'
import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`)
})
