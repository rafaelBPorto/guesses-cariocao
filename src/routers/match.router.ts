import { Router } from "express";
import { matchPut } from "../controllers/match.controllers.js";
import { matchUpdateValidation } from "../middlewares/match.middlware.js";

const matchRouter = Router();

matchRouter.put("/match/:idMatch", matchUpdateValidation, matchPut)

export {matchRouter}