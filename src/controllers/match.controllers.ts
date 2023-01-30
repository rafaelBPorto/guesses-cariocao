import { Request, Response } from "express";
import { updateResulMatch } from "../repository/match.repository.js";

async function matchPut(req: Request, res: Response) {
    const idMatch = Number(req.params.idMatch)
    const resultMatch = res.locals.resultMatch as number
    
    try {
        const error = await updateResulMatch(idMatch, resultMatch)
        if(error){
            return res.sendStatus(409);
        }
    } catch (error) {
        res.sendStatus(500);
    }
    res.sendStatus(201);
}

export{
    matchPut
}
