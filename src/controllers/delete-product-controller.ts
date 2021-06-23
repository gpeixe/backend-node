import { Controller } from "./protocols/controller";
import { Request, Response, response } from 'express'

export default class DeleteProductController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    return response.status(200).json({})
  }
}