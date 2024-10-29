import express from 'express'
const app = express()

const PORT = 3333

app.get('/products/:id/:user', (req, res) => {
  const { id, user } = req.params
  res.send(`Produto id: ${id} do usuário ${user} `)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}/ or \nhttp://192.168.0.55:${PORT}` )
})