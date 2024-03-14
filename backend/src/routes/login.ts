import { Request, Response, Router } from 'express'
import { loginController } from '../controller/login'

export const LoginRouter: Router = Router()

LoginRouter.post('/', (req: Request, res: Response) =>
  loginController(req, res),
)
