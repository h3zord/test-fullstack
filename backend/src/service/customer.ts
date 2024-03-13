export async function getCustomerService() {
  const customerList = prisma.customer.findMany()

  return { customerList }
}

interface IPostCustomerData {
  fullName: string
  email: string
  cpf: string
  phone: string
  status: string
}

export async function postCustomerService({
  fullName,
  email,
  cpf,
  phone,
  status,
}: IPostCustomerData) {
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
