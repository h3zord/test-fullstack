import { NextFunction, Request, Response } from 'express'
import { readCustomerService, createCustomerService } from '../service/customer'
import {
  TCreateAndUpdateCustomerSchema,
  validateSchema,
} from '../validate-schema/customer'

export async function readCustomerController(_req: Request, res: Response) {
  const { customerList } = await readCustomerService()

  return res.status(200).json(customerList)
}

export async function createCustomerController(req: Request, res: Response) {
  const { fullName, email, cpf, phone, status } =
    req.body as TCreateAndUpdateCustomerSchema

  const postCustomerData = validateSchema({
    fullName,
    email,
    cpf,
    phone,
    status,
  })

  await createCustomerService({
    fullName: postCustomerData.fullName,
    email: postCustomerData.email,
    cpf: postCustomerData.cpf,
    phone: postCustomerData.phone,
    status: postCustomerData.status,
  })

  return res.status(201).end()
}

export async function updateCustomerController(
  req: Request,
  res: Response,
  next: NextFunction,
) { }
