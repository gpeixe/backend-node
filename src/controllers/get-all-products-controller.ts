import { Controller, HttpResponse, HttpRequest } from "./protocols/controller";
import { product } from '../models/product'

export class GetAllProductsController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('Product: ', product)
      const products = await product.find({})
      console.log('Products: ', products)
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
