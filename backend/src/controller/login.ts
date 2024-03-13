import { Request, Response } from 'express'
import { readLoginService } from '../service/login'
import { TReadLoginSchema, validateSchema } from '../validate-schema/login'

export async function readLoginController(req: Request, res: Response) {
  const { email, password } = req.body as TReadLoginSchema

  const readLoginData = validateSchema({
    email,
    password,
  })

  await readLoginService({
    email: readLoginData.email,
    password: readLoginData.password,
  })

  return res.status(200).end()
}
