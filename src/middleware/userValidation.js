const Joi = require('joi');
const status = require('../utils');

const validateUser = (req, res, next) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    displayName: Joi.string().min(8).required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  }).required();

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(status[error.details[0].type]).json({
      message: error.details[0].message });
  }
  next();
};

module.exports = validateUser;