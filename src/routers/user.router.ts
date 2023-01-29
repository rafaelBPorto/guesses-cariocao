import { Router } from "express";
import { userPost } from "../controllers/user.controllers.js";
import { userValidation } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.post("/add-user", userValidation, userPost)

export {
    userRouter
}