import { Router } from "express";
import { userPost, usersFindMany } from "../controllers/user.controllers.js";
import { userValidation } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter
    .post("/add-user", userValidation, userPost)
    .get("/find-all-users", usersFindMany)

export {
    userRouter
}