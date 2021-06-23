import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'
import { product } from '../models/product'

export class GetAllProductsController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    try {
      const products = await product.find({})
      if (!products) {
        return response.status(204)
      }
      return response.status(200).json(products)
    } catch (err) {
      return response.status(500).json(err.stack)
    }
  }
}
