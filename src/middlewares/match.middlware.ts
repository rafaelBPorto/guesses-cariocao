import { NextFunction, Request, Response } from "express";
import { resultMatchSchema } from "../models/match.model.js";

function matchUpdateValidation(req: Request, res: Response, next: NextFunction) {
    const match = req.body;

    const { error } = resultMatchSchema.validate(match, { abortEarly: false });

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send({ message: errors });
    }

    res.locals.resultMatch = Number(match.resultMatch);
    next();
}

export{
    matchUpdateValidation
}