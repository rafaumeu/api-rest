import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router();

productsRoutes.get('//:id/:user', myMiddleware, (req, res) => {
  const { id, user } = req.params
  res.send(`Produto id: ${id} do usuário ${user} `)
})

productsRoutes.get('/', (req, res) => {
  const { page, limit } = req.query
  res.send(`Pagina: ${page} de ${limit}`)
})

productsRoutes.post('/', (req, res) => {
  const { name, price } = req.body
  res.json({
    name,
    price,
    user_id: req.user_id
  }).status(201)
})

export { productsRoutes }