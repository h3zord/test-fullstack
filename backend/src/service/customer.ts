import { prisma } from '../lib/prisma'
import { TCreateAndUpdateCustomerSchema } from '../validate-schema/customer'

export async function readCustomerService() {
  const customerList = await prisma.customer.findMany()

  return { customerList }
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
    throw new Error('Failed to create a new customer')
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
    throw new Error('Failed to update a customer')
  }
}
