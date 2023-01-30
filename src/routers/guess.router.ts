import { Router } from "express";
import {guessesFindMany, guessPost } from "../controllers/guess.controllers.js";
import { guessValidation } from "../middlewares/guess.middleware.js";

const guessRouter = Router();

guessRouter
    .post("/add-guess", guessValidation, guessPost)
    .get("/find-all-guesses", guessesFindMany)
export {
    guessRouter
}