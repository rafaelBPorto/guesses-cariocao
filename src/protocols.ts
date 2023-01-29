import { users } from "@prisma/client";

type UserInput = Omit<users, "id" | "createAt"> 