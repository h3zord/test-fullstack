import { Request, Response, Router } from 'express'

export const customerRouter: Router = Router()

customerRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({ message: 'OK!' }),
)
