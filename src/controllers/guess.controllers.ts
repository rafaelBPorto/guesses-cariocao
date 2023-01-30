import { Request, Response } from "express";
import { guessInput } from "../protocols.js";
import { findManyGuesses } from "../repository/guess.repository.js";
import { insertUniqueGuess } from "../services/guess.service.js";



async function guessPost(req: Request, res: Response) {
    const guess = res.locals.guess as guessInput;
    try {
        const insertGuess = await insertUniqueGuess(guess);
        if (!insertGuess){
            return res.status(409).send("Unable to make a guess on the match")
        }
        res.sendStatus(201);

    } catch (error) {
        res.send(error).status(500)
    }
}

async function guessesFindMany(req: Request, res: Response) {
    
    try {
        const guesses = await findManyGuesses() ;
        res.status(200).send(guesses);

    } catch (error) {
        res.send(error).status(500)
    }
}

export {
    guessPost,
    guessesFindMany
}