import { NextFunction, Request, Response } from "express";
import { guessSchema } from "../models/guess.model.js";

function guessValidation(req: Request, res: Response, next: NextFunction){
    const guess = req.body;

    const {error} = guessSchema.validate(guess, {abortEarly: false});

    if(error){
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send({message: errors});
    }

    res.locals.guess = guess;
    next();
}

export{
    guessValidation
};