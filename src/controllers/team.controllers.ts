import { Request, Response } from "express";
import { findManyTeams } from "../repository/team.repository.js";

async function teamsFindMany(req: Request, res: Response) {
    try {
        const teams = await findManyTeams();
        res.status(200).send(teams);

    } catch (error) {
        res.send(error).status(500)
    }
}

export {
    teamsFindMany
}
