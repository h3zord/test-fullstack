export async function getCustomerService() {
  const customerList = prisma.customer.findMany()

  return { customerList }
}
