import prisma from "../database/database.js";
import { guessInput } from "../protocols.js";

async function createGuess(guess: guessInput) {

    return await prisma.guesses.create({ data: guess });
}

export {
    createGuess
}
