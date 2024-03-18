import { Request, Response } from 'express'
import { TCreateAndUpdateCustomerSchema } from '../../validate-schema/customer'
import {
  createCustomerService,
  readCustomerService,
  updateCustomerService,
} from '../../service/customer'
import {
  createCustomerController,
  readCustomerController,
  updateCustomerController,
} from '../../controller/customer'

jest.mock('../../service/customer', () => ({
  readCustomerService: jest.fn(),
  createCustomerService: jest.fn(),
  updateCustomerService: jest.fn(),
}))

describe('Testing functions on CustomerController layer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return list of customers from the service', async () => {
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

    ;(readCustomerService as jest.Mock).mockResolvedValueOnce({
      customerList: mockCustomerList,
    })

    const req = {} as Request
    const jsonMock = jest.fn()
    const statusMock = jest.fn().mockReturnValue({ json: jsonMock })
    const res = { status: statusMock } as unknown as Response

    await readCustomerController(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith(mockCustomerList)
  })

  it('should return success message for creating customer', async () => {
    const customerData: TCreateAndUpdateCustomerSchema = {
      fullName: 'Admin',
      email: 'admin@example.com',
      cpf: '11111111111',
      phone: '11111111111',
      status: 'Ativo',
    }

    ;(createCustomerService as jest.Mock).mockResolvedValueOnce(undefined)

    const req = { body: customerData } as Request
    const jsonMock = jest.fn()
    const statusMock = jest.fn().mockReturnValue({ json: jsonMock })
    const res = { status: statusMock } as unknown as Response

    await createCustomerController(req, res)

    expect(statusMock).toHaveBeenCalledWith(201)
    expect(jsonMock).toHaveBeenCalledWith({
      success: 'Cliente criado com sucesso!',
    })
  })

  it('should return success message for updating customer', async () => {
    const customerId = '1'
    const customerData: TCreateAndUpdateCustomerSchema = {
      fullName: 'Admin Test',
      email: 'test@example.com',
      cpf: '44444444444',
      phone: '22222222222',
      status: 'Aguardando ativação',
    }

    ;(updateCustomerService as jest.Mock).mockResolvedValueOnce(undefined)

    const req = {
      params: { id: customerId },
      body: customerData,
    } as unknown as Request

    const jsonMock = jest.fn()
    const statusMock = jest.fn().mockReturnValue({ json: jsonMock })
    const res = { status: statusMock } as unknown as Response

    await updateCustomerController(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith({
      success: 'Cliente atualizado com sucesso!',
    })
  })
})
