import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'
import { product } from '../models/product'

export class CreateProductController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    try {
      const { body } = httpRequest.body
      const requiredFields = ['title', 'price', 'description', 'imageUrl']
      for (const field of requiredFields) {
        if(!body[field]) {
          return response.status(400).json('Informe o campo: ' + field)
        }
      }
      const productCreated = await product.create({
        title: body.title,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl
      })
      return response.status(201).json(productCreated)
    } catch (err) {
      return response.status(500).json(err.stack)
    }
  }
}