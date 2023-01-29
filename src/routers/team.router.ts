import { Router } from "express";
import { teamsFindMany } from "../controllers/team.controllers.js";

const teamRouter = Router()

teamRouter.get("/find-all-teams", teamsFindMany)

export {
    teamRouter
}