import { NextFunction, Request, Response, Router } from 'express'
import { getCustomerController } from '../controller/customer'

export const customerRouter: Router = Router()

customerRouter.get('/', (req: Request, res: Response) =>
  getCustomerController(req, res),
)
