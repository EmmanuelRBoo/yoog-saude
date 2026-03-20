import express from 'express'
import cors from 'cors'

import router from './routes'

const app = express()

app.use(cors({
  allowedHeaders: '*',
  origin: '*',
  credentials: true
}))
app.use(express.json())

app.use('/api', router)

process.on('SIGINT', async () => {
  process.exit(0)
})

export default app