import { NextFunction, Request, Response } from 'express'
import { ZodError, z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { readLoginService } from '../service/login'

export async function readLoginController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const readLoginSchema = z
    .object({
      email: z
        .string({
          required_error: 'Email is required',
          invalid_type_error: 'Email must be a string',
        })
        .email({ message: 'Invalid email address' })
        .toLowerCase(),
      password: z
        .string({
          required_error: 'Password is required',
          invalid_type_error: 'Password must be a string',
        })
        .min(5, {
          message: 'Password must be 5 or more characters long',
        }),
    })
    .required()

  type TReadLoginSchema = z.infer<typeof readLoginSchema>

  const { email, password } = req.body as TReadLoginSchema

  let userData = {} as TReadLoginSchema

  try {
    userData = readLoginSchema.parse({ email, password })
  } catch (error) {
    const validationError = fromZodError(error as ZodError)

    return next(validationError)
  }

  await readLoginService({
    email: userData.email,
    password: userData.password,
  })

  return res.status(200).end()
}
