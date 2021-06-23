import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'
import { product } from '../models/product'

export class DeleteProductController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    try {
      const { id } = httpRequest.params
      if (!id) {
        return response.status(400)
      }
      const products = await product.deleteOne({ id })
      return response.status(200).json(products)
    } catch (err) {
      return response.status(500).json(err.stack)
    }
  }
}