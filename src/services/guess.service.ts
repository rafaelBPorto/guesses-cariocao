import { guessInput } from "../protocols.js";
import { createGuess } from "../repository/guess.repository.js";
import { findResultMatch } from "../repository/match.repository.js";

async function insertUniqueGuess(guess: guessInput) {
    const resultMatch = Number(await findResultMatch(guess.matchId))
    if (resultMatch !== 4) {
        return false
    }
    return createGuess(guess)
}

export {
    insertUniqueGuess
}