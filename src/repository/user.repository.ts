
import { Prisma, users } from "@prisma/client";
import prisma from "../database/database.js";

async function insertUniqueUser(user: Prisma.usersCreateInput) {
    await prisma.users.create({ data: user })
}

async function  findManyUsers(){
    return await prisma.users.findMany()
    

}

export {
    insertUniqueUser,
    findManyUsers
}