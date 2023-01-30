import { Request, Response } from "express";
import { guessInput } from "../protocols.js";
import { findManyGuessesByUserId, findManyGuesses } from "../repository/guess.repository.js";
import { insertUniqueGuess } from "../services/guess.service.js";



async function guessPost(req: Request, res: Response) {
    const guess = res.locals.guess as guessInput;
    try {
        const insertGuess = await insertUniqueGuess(guess);
        if (!insertGuess) {
            return res.status(409).send("Unable to make a guess on the match")
        }
        res.sendStatus(201);

    } catch (error) {
        res.send(error).status(500)
    }
}

async function guessesFindMany(req: Request, res: Response) {
    const userId = req.query.userId
    const winner = req.query.winner
    const losted = req.query.losted

    try {
        if(userId && !winner &&!losted) {
            const userGuesses = await findManyGuessesByUserId(Number(userId))
            return res.status(200).send(userGuesses)
        }  
        
        // if(winner && !userId && !losted){
        //     const winnerGuesses = await findManyWinnerGuesses()
        //     return res.status(200).send(winnerGuesses)
        // }

        // if(losted && !userId && !winner){
        //     const lostedGuesses = await findManyLostedrGuesses()
        //     return res.status(200).send(losted)
        // }
        // if(userId && winner &&!losted){
        //     const userWinnerGuesses = await findManyUserWinnerGuesses(Number(userId))
        //     return res.status(200).send(userWinnerGuesses)
        // }
        // if(userId && losted && !winner){
        //     const userWinnerGuesses = await findManylLostedGuesses(Number(userId))
        //     return res.status(200).send(userWinnerGuesses)
        // }

        const guesses = await findManyGuesses();
        res.status(200).send(guesses);

    } catch (error) {
        res.send(error).status(500)
    }
}

export {
    guessPost,
    guessesFindMany,
}