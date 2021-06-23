import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'

export default class CreateProductController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    return response.status(200).json({})
  }
}