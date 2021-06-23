import { Router } from 'express'
import { adaptRoute } from './route-adapter'

import UpdateProductController from '../controllers/update-product-controller'
import DeleteProductController from '../controllers/delete-product-controller'
import CreateProductController from '../controllers/create-product-controller'
import GetAllProductsController from '../controllers/get-all-products-controller'

export const productRoutes = (router: Router): void => {
  router.put('/products/:id', adaptRoute(new UpdateProductController()))
  router.get('/products', adaptRoute(new GetAllProductsController()))
  router.post('/products', adaptRoute(new CreateProductController()))
  router.delete('/products/:id', adaptRoute(new DeleteProductController()))
}
