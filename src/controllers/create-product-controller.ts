import { Controller, HttpResponse, HttpRequest } from "./protocols/controller";
import { product } from '../models/product'

export class CreateProductController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest
      console.log("Body: ", body)   
      const requiredFields = ['name', 'price', 'description']
      for (const field of requiredFields) {
        if(!body[field]) {
          return {
            statusCode: 400,
            body: new Error('Faltando parâmentro: ' + field)
          }
        }
      }
      const { name, price, description } = body
      const productToAdd = { name, price, description }
      const productCreated = await product.create(productToAdd)
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