import { Request, Response } from 'express'
import { getCustomerService } from '../service/customer'

export async function getCustomerController(_req: Request, res: Response) {
  const { customerList } = await getCustomerService()

  res.status(200).json(customerList)
}
