import { Request, Response } from 'express'
import {
  readCustomerService,
  createCustomerService,
  updateCustomerService,
  readCustomerByIdService,
} from '../service/customer'
import {
  TCreateAndUpdateCustomerSchema,
  validateSchema,
} from '../validate-schema/customer'

export async function readCustomerController(_req: Request, res: Response) {
  const { customerList } = await readCustomerService()

  return res.status(200).json(customerList)
}

export async function readCustomerByIdController(req: Request, res: Response) {
  const { id } = req.params

  if (!id) throw new Error('É necessário fornececer um ID!')

  const { customerData } = await readCustomerByIdService(id)

  return res.status(200).json(customerData)
}

export async function createCustomerController(req: Request, res: Response) {
  const { fullName, email, cpf, phone, status } =
    req.body as TCreateAndUpdateCustomerSchema

  const createCustomerData = validateSchema({
    fullName,
    email,
    cpf,
    phone,
    status,
  })

  await createCustomerService({
    fullName: createCustomerData.fullName,
    email: createCustomerData.email,
    cpf: createCustomerData.cpf,
    phone: createCustomerData.phone,
    status: createCustomerData.status,
  })

  return res.status(201).json({ success: 'Cliente criado com sucesso!' })
}

export async function updateCustomerController(req: Request, res: Response) {
  const { fullName, email, cpf, phone, status } =
    req.body as TCreateAndUpdateCustomerSchema

  const { id } = req.params

  if (!id) throw new Error('É necessário fornececer um ID!')

  const updateCustomerData = validateSchema({
    fullName,
    email,
    cpf,
    phone,
    status,
  })

  await updateCustomerService({
    id,
    fullName: updateCustomerData.fullName,
    email: updateCustomerData.email,
    cpf: updateCustomerData.cpf,
    phone: updateCustomerData.phone,
    status: updateCustomerData.status,
  })

  return res.status(200).json({ success: 'Cliente atualizado com sucesso!' })
}
