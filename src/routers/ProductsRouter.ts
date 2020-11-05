import { Router } from 'express'
import ProductsController from '../controllers/ProductsController'
import productValidationMiddleware from '../validations/products/createProduct'

const router = Router()
const productsController = new ProductsController()

router.get('/', productsController.get)
router.post('/', productValidationMiddleware, productsController.post)

export default router
