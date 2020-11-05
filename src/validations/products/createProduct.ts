import { validate, Joi } from 'express-validation'

const validation = {
  body: Joi.object({
    name: Joi.string()
      .required(),
    price: Joi.number()
      .strict()
      .required()
  })
}

const middleware = validate(validation, {}, {})

export default middleware
