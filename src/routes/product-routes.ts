import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/:id/:user', myMiddleware, productsController.index)

productsRoutes.post('/', productsController.create)

export { productsRoutes }