import { Request, Response } from "express";
class ProductsController {
  index(req: Request, res: Response) {
    const { id, user } = req.params
    res.send(`Produto id: ${id} do usuário ${user} `)
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body
    res.json({
      name,
      price,
      user_id: req.user_id
    }).status(201)
  }
}

export { ProductsController }