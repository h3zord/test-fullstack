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
