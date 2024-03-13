import { Request, Response, Router } from 'express'

export const LoginRouter: Router = Router()

LoginRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({ message: 'OK!' }),
)
