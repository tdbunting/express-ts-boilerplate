import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/CustomError'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof CustomError) {
    console.error(err.serializeErrors(), err.statusCode);
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  // if not a custom error, throw a default 500
  console.error(err)
  res.status(500).send({
    errors: [{ message: 'Something went wrong', error: err }]
  })
}
