import { Controller, HttpResponse, HttpRequest } from "./protocols/controller";
import { product } from '../models/product'

export class CreateProductController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest
      const requiredFields = ['name', 'price', 'description', 'imageUrl']
      for (const field of requiredFields) {
        if(!body[field]) {
          return {
            statusCode: 400,
            body: new Error('Faltando parâmentro: ' + field)
          }
        }
      }
      const productCreated = await product.create(body)
      return {
        statusCode: 201,
        body: productCreated
      }
    } catch (err) {
      console.log('Err: ', err)
      return {
        statusCode: 500,
        body: err.message
      }
    }
  }
}