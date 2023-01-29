import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { userSchema } from "../models/user.model.js";

function userValidation(req: Request, res: Response, next: NextFunction){
    const user = req.body as Prisma.usersCreateInput;

    const {error} = userSchema.validate(user, {abortEarly: false});

    if(error){
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send({message: errors});
    }

    res.locals.user = user;
    next();
}

export{
    userValidation
};