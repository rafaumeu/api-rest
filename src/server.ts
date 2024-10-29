import express from 'express'
import { routes } from './routes'

const PORT = 3333

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}/ or \nhttp://192.168.0.55:${PORT}` )
})