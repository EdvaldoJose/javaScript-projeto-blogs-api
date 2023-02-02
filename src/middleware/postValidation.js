const Joi = require('joi');
const status = require('../utils');

const postValidate = (req, res, next) => {
  const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number().integer()).min(1),
  }).required();

  const { title, content, categoryIds } = req.body;

  const { error } = postSchema.validate({
    title,
    content,
    categoryIds,
   });

  if (error) {
    return res
   .status(status[error.details[0].type]).json({
    message: 'Some required fields are missing',
  });
  }
  next();
};
module.exports = postValidate;