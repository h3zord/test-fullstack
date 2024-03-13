import { z } from 'zod'
import { ZodError, fromZodError } from 'zod-validation-error'

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

export type TReadLoginSchema = z.infer<typeof readLoginSchema>

export function validateSchema({ email, password }: TReadLoginSchema) {
  let loginDataParsed = {} as TReadLoginSchema

  try {
    loginDataParsed = readLoginSchema.parse({ email, password })
  } catch (error) {
    const validationError = fromZodError(error as ZodError)

    throw new Error(validationError.message)
  }

  return {
    email: loginDataParsed.email,
    password: loginDataParsed.password,
  }
}
