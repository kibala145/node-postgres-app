import { ValidationError } from 'express-validation'
import { ErrorRequestHandler } from 'express'

const middleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
}

export default middleware
