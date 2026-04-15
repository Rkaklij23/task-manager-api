const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('')
});

const updateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow('')
});

module.exports = { createTaskSchema, updateTaskSchema };