import Joi from 'joi'

export default Joi.object({
    username: Joi.string().min(3).max(30).required(),
    age: Joi.number().min(0).max(100).required(),
    password: Joi.string().min(6).max(30).required()
})