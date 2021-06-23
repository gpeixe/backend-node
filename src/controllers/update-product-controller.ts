import { Controller, HttpRequest, HttpResponse } from "./protocols/controller";
import { product } from '../models/product'

export class UpdateProductController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const { body } = httpRequest.body
      if (!id) {
        return {
          statusCode: 400,
          body: new Error('Faltando parâmentro: id')
        }
      }
      const productUpdated = await product.updateOne({ _id: id }, body)
      return {
        statusCode: 200,
        body: productUpdated
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: err.message
      }
    }
  }
}