import { Prisma } from "@prisma/client";
import Joi from "joi";

const userSchema = Joi.object<Prisma.usersCreateInput>({
    name: Joi.string().trim().required()
})

export { userSchema }