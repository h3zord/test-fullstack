import { NextFunction, Request, Response, Router } from 'express'
import { readLoginController } from '../controller/login'

export const LoginRouter: Router = Router()

LoginRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  readLoginController(req, res, next),
)
