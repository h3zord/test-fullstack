import { prisma } from '../../src/lib/prisma'
import { readCustomerService } from '../../src/service/customer'
import { TCreateAndUpdateCustomerSchema } from '../../src/validate-schema/customer'

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    customer: {
      findMany: jest.fn(),
    },
  })),
}))

describe('readCustomerService', () => {
  it('should return customer list', async () => {
    const mockCustomerList: TCreateAndUpdateCustomerSchema[] = [
      {
        fullName: 'Lucas Test',
        email: 'test@test.com',
        cpf: '00000000000',
        phone: '00000000000',
        status: 'Ativo',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        cpf: '99999999999',
        phone: '99999999999',
        status: 'Desativado',
      },
    ]

    ;(prisma.customer.findMany as jest.Mock).mockResolvedValueOnce(
      mockCustomerList,
    )

    const result = await readCustomerService()

    expect(result).toEqual({ customerList: mockCustomerList })
  })
})
