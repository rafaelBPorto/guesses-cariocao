import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().trim().required()
})

export { userSchema }