import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { findManyUsers, insertUniqueUser } from "../repository/user.repository.js";

async function userPost(req: Request, res: Response) {
    const user = res.locals.user as Prisma.usersCreateInput;
    try {
        await insertUniqueUser(user);
        res.sendStatus(201);

    } catch (error) {
        res.send(error).status(500)
    }
}

async function usersFindMany(req: Request, res: Response) {
    
    try {
        const users = await findManyUsers() ;
        res.status(200).send(users);

    } catch (error) {
        res.send(error).status(500)
    }
}

export {
    userPost,
    usersFindMany
}