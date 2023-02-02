const Joi = require('joi');
const status = require('../utils');

const validateBody = (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required().message({
      'string.required': '"email" is required',
      'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().min(5).required().message({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
      'string.empty': 'Some required fields are missing',
    }),
  }).required();

  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(status[error.details[0].type]).json({
      message: error.details[0].message });
  }
  next();
};

module.exports = validateBody;