import { NextFunction, Request, Response } from 'express'

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(404).json({ error: error.message })

  next(error.message)
}
