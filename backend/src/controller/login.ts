import { Request, Response } from 'express'
import { loginService } from '../service/login'
import { TLoginSchema, validateSchema } from '../validate-schema/login'

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body as TLoginSchema

  console.log(req.body)

  const loginData = validateSchema({
    email,
    password,
  })

  await loginService({
    email: loginData.email,
    password: loginData.password,
  })

  return res.status(200).json({ sucess: 'Login successfully!' })
}
