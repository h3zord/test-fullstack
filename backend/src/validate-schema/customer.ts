import { z } from 'zod'
import { ZodError, fromZodError } from 'zod-validation-error'

const createAndUpdateCustomerSchema = z
  .object({
    fullName: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .min(5, { message: 'Name must be 5 or more characters long' }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .email({ message: 'Invalid email address' })
      .toLowerCase(),
    cpf: z
      .string({
        required_error: 'CPF is required',
        invalid_type_error: 'CPF must be a string',
      })
      .length(11, { message: 'CPF must be exactly 11 characters long' }),
    phone: z
      .string({
        required_error: 'Phone number is required',
        invalid_type_error: 'Phone number must be a string',
      })
      .length(11, { message: 'CPF must be exactly 11 characters long' }),
    status: z.enum(['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'], {
      required_error: 'Status is required',
      invalid_type_error:
        'Status must be exactly "Ativo" or "Inativo" or "Aguardando autorização" or "Desativado"',
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
