import { z } from 'zod'
import { ZodError, fromZodError } from 'zod-validation-error'

const loginSchema = z
  .object({
    email: z
      .string({
        required_error: 'O campo email é obrigatório!',
        invalid_type_error: 'O campo email deve ser uma string!',
      })
      .email({ message: 'O email é inválido!' })
      .toLowerCase(),
    password: z
      .string({
        required_error: 'O campo password é obrigatório!',
        invalid_type_error: 'O campo password deve ser uma string!',
      })
      .min(5, {
        message: 'O campo password deve conter no mínimo 5 caracteres!',
      }),
  })
  .required()

export type TLoginSchema = z.infer<typeof loginSchema>

export function validateSchema({ email, password }: TLoginSchema) {
  let loginDataParsed = {} as TLoginSchema

  try {
    loginDataParsed = loginSchema.parse({ email, password })
  } catch (error) {
    const validationError = fromZodError(error as ZodError)

    throw new Error(validationError.message)
  }

  return {
    email: loginDataParsed.email,
    password: loginDataParsed.password,
  }
}
