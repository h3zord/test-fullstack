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
    await prisma.create({
      data: {
        fullName,
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
    await prisma.update({
      where: {
        id,
      },
      data: {
        fullName,
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
