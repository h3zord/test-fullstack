import { Request, Response, Router } from 'express'
import { readLoginController } from '../controller/login'

export const LoginRouter: Router = Router()

LoginRouter.get('/', (req: Request, res: Response) =>
  readLoginController(req, res),
)
