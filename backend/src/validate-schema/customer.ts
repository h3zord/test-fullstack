import { z } from 'zod'
import { ZodError, fromZodError } from 'zod-validation-error'

const createAndUpdateCustomerSchema = z
  .object({
    fullName: z
      .string({
        required_error: 'O campo full name é obrigatório!',
        invalid_type_error: 'O campo full name deve ser uma string!',
      })
      .min(5, {
        message: 'O campo full name deve conter no mínimo 5 caracteres!',
      }),
    email: z
      .string({
        required_error: 'O campo email é obrigatório!',
        invalid_type_error: 'O campo email deve ser uma string!',
      })
      .email({ message: 'O email é inválido!' })
      .toLowerCase(),
    cpf: z
      .string({
        required_error: 'O campo CPF é obrigatório!',
        invalid_type_error: 'O campo CPF deve ser uma string!',
      })
      .length(11, {
        message: 'O campo CPF deve conter exatamente 11 caracteres!',
      }),
    phone: z
      .string({
        required_error: 'O campo phone é obrigatório!',
        invalid_type_error: 'O campo phone deve ser uma string!',
      })
      .length(11, {
        message: 'O campo phone deve conter exatamente 11 caracteres!',
      }),
    status: z.enum(['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'], {
      required_error: 'O campo status é obrigatório!',
      invalid_type_error:
        'O campo status deve exatamente "Ativo" ou "Inativo" ou "Aguardando autorização ou "Desativado"!',
    }),
  })
  .required()

export type TCreateAndUpdateCustomerSchema = z.infer<
  typeof createAndUpdateCustomerSchema
>

export function validateSchema({
  fullName,
  email,
  cpf,
  phone,
  status,
}: TCreateAndUpdateCustomerSchema) {
  let customerDataParsed = {} as TCreateAndUpdateCustomerSchema

  try {
    customerDataParsed = createAndUpdateCustomerSchema.parse({
      fullName,
      email,
      cpf,
      phone,
      status,
    })
  } catch (error) {
    const validationError = fromZodError(error as ZodError)

    throw new Error(validationError.message)
  }

  return {
    fullName: customerDataParsed.fullName,
    email: customerDataParsed.email,
    cpf: customerDataParsed.cpf,
    phone: customerDataParsed.phone,
    status: customerDataParsed.status,
  }
}
