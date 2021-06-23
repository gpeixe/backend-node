import { Express, Router } from 'express'
import { productRoutes } from './product-routes'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  productRoutes(router)
  app.use('/api', router)
}
