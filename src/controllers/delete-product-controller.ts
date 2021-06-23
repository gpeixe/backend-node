import { Controller, HttpRequest, HttpResponse } from "./protocols/controller";
import { product } from '../models/product'

export class DeleteProductController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      if (!id) {
        return {
          statusCode: 400,
          body: new Error('Faltando parâmentro: id')
        }
      }
      const products = await product.deleteOne({ _id: id })
      return {
        statusCode: 200,
        body: products
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err.message
      }
    }
  }
}