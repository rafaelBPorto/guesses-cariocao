import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { insertUniqueUser } from "../repository/user.repository.js";

async function userPost(req: Request, res: Response) {
    const user = res.locals.user as Prisma.usersCreateInput;
    try {
        await insertUniqueUser(user);
        res.sendStatus(201);

    } catch (error) {
        res.send(error).status(500)
    }
}

export {
    userPost
}