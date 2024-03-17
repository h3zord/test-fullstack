import { prisma } from '../lib/prisma'
import { TCreateAndUpdateCustomerSchema } from '../validate-schema/customer'

export async function readCustomerService() {
  const customerList = await prisma.customer.findMany()

  return { customerList }
}

export async function readCustomerByIdService(id: string) {
  const customerData = await prisma.customer.findUnique({
    where: {
      id,
    },
  })

  if (!customerData) throw new Error('O cliente não existe!')

  return { customerData }
}

export async function createCustomerService({
  fullName,
  email,
  cpf,
  phone,
  status,
}: TCreateAndUpdateCustomerSchema) {
  try {
    await prisma.customer.create({
      data: {
        full_name: fullName,
        email,
        cpf,
        phone,
        status,
      },
    })
  } catch (_error) {
    throw new Error('Email ou CPF já cadastrados!')
  }
}

interface IUpdateCustomerData extends TCreateAndUpdateCustomerSchema {
  id: string
}

export async function updateCustomerService({
  id,
  fullName,
  email,
  cpf,
  phone,
  status,
}: IUpdateCustomerData) {
  try {
    await prisma.customer.update({
      where: {
        id,
      },
      data: {
        full_name: fullName,
        email,
        cpf,
        phone,
        status,
      },
    })
  } catch (_error) {
    throw new Error('Falha ao atualizar um cliente!')
  }
}
