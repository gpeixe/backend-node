import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'
import { product } from '../models/product'

export class UpdateProductController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    try {
      const { id } = httpRequest.params
      const { body } = httpRequest.body
      if (!id) {
        response.status(400).json('Informe o seguinte parâmetro no path da rota: id')
      }
      const productUpdated = await product.updateOne({ id }, body)
      return response.status(200).json(productUpdated)
    } catch (err) {
      return response.status(500).json(err.stack)
    }
  }
}