import Joi from "joi";

const resultMatchSchema = Joi.object({
    resultMatch: Joi.number().min(1).max(5).required()
})

export{
    resultMatchSchema
}