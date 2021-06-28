import { Controller, HttpRequest, HttpResponse } from "./protocols/controller";
import { product } from '../models/product'

export class UpdateProductController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const { body } = httpRequest
      console.log("Request: ", httpRequest)
      if (!id) {
        return {
          statusCode: 400,
          body: new Error('Faltando parâmentro: id')
        }
      }
      const { name, price, description } = body
      const productToUpdate = {
        name,
        price,
        description
      }
      const productUpdated = await product.updateOne({ _id: id }, productToUpdate)
      return {
        statusCode: 200,
        body: productUpdated
      }
    } catch (err) {
      console.log("Err: ", err.message)
      return {
        statusCode: 500,
        body: err.message
      }
    }
  }
}