import Joi from "joi";

const guessSchema = Joi.object({
    userId: Joi.number().required(),
    matchId: Joi.number().required(),
    guess: Joi.number().min(1).max(3).required(),
})

export {
    guessSchema
}

