import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'
const app = express()

const PORT = 3333
app.use(express.json())

app.use(myMiddleware)

// app.get('/products/', (req, res) => {
//   res.send(`Produto`)
// })

app.get('/products/:id/:user', (req, res) => {
  const { id, user } = req.params
  res.send(`Produto id: ${id} do usuário ${user} `)
})

app.get('/products', (req, res) => {
  const { page, limit } = req.query
  res.send(`Pagina: ${page} de ${limit}`)
})

app.post('/products', (req, res) => {
  const { name, price } = req.body
  res.json({
    name,
    price
  }).status(201)
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}/ or \nhttp://192.168.0.55:${PORT}` )
})