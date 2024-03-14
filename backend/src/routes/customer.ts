import { Request, Response, Router } from 'express'
import {
  readCustomerController,
  createCustomerController,
  updateCustomerController,
} from '../controller/customer'

export const customerRouter: Router = Router()

customerRouter.get('/', (req: Request, res: Response) =>
  readCustomerController(req, res),
)

customerRouter.post('/', (req: Request, res: Response) =>
  createCustomerController(req, res),
)

customerRouter.put('/:id', (req: Request, res: Response) =>
  updateCustomerController(req, res),
)
