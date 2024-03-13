import { NextFunction, Request, Response } from 'express'
import { getCustomerService } from '../service/customer'
import { z } from 'zod'
import { ZodError, fromZodError } from 'zod-validation-error'

export async function getCustomerController(_req: Request, res: Response) {
  const { customerList } = await getCustomerService()

  return res.status(200).json(customerList)
}

export async function postCustomerController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const createCustomerSchema = z
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
      status: z.enum(
        ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'],
        {
          required_error: 'Status is required',
          invalid_type_error:
            'Status must be exactly "Ativo" or "Inativo" or "Aguardando autorização" or "Desativado"',
        },
      ),
    })
    .required()

  type CreateCustomerSchema = z.infer<typeof createCustomerSchema>

  const { fullName, email, cpf, phone, status } =
    req.body as CreateCustomerSchema

  let postCustomerData = {} as CreateCustomerSchema

  try {
    postCustomerData = createCustomerSchema.parse({
      fullName,
      email,
      cpf,
      phone,
      status,
    })
  } catch (error) {
    const validationError = fromZodError(error as ZodError)

    return next(validationError)
  }

  await postCustomerService({
    fullName: postCustomerData.fullName,
    email: postCustomerData.email,
    cpf: postCustomerData.cpf,
    phone: postCustomerData.phone,
    status: postCustomerData.status,
  })

  return res.status(201).end()
}
