
import { Prisma } from "@prisma/client";
import prisma from "../database/database.js";

async function insertUniqueUser(user: Prisma.usersCreateInput) {
    await prisma.users.create({ data: user })
}

export {
    insertUniqueUser
}