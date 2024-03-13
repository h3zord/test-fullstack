import { NextFunction, Request, Response, Router } from 'express'
import { getLoginController } from '../controller/login'

export const LoginRouter: Router = Router()

LoginRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  getLoginController(req, res, next),
)
