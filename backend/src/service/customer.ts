export async function readCustomerService() {
  const customerList = prisma.customer.findMany()

  return { customerList }
}

interface ICreateCustomerData {
  fullName: string
  email: string
  cpf: string
  phone: string
  status: string
}

export async function createCustomerService({
  fullName,
  email,
  cpf,
  phone,
  status,
}: ICreateCustomerData) {
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
