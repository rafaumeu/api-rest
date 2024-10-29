import express from 'express'
const app = express()

const PORT = 3333

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}/ or \nhttp://192.168.0.55:${PORT}` )
})