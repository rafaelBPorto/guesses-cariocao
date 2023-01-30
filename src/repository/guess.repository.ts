import prisma from "../database/database.js";
import { guessInput } from "../protocols.js";

async function createGuess(guess: guessInput) {

    return await prisma.guesses.create({ data: guess });
}

async function findManyGuesses() {
    return prisma.guesses.findMany({
        select: {
            id: true,
            users: {
                select: {
                    id: true,
                    name: true
                }
            },
            matches: {
                select: {
                    id: true,
                    teams_matches_homeTeamIdToteams: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    teams_matches_visitingTeamIdToteams: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            },
            possibilitiesGuesses: {
                select: {
                    id: true,
                    description: true
                }
            }
        }
    });
}

async function findManyGuessesByUserId(userId: number) {
    return prisma.guesses.findMany({
        select: {
            id: true,
            matches: {
                select: {
                    id: true,
                    teams_matches_homeTeamIdToteams: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    teams_matches_visitingTeamIdToteams: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            },
            possibilitiesGuesses: {
                select: {
                    id: true,
                    description: true
                }
            }
        }
    });

}

// async function findManyWinnerGuesses() {
//     return prisma.guesses.findMany({
//        include : {
//         matches : true
//        },
//        where :{
//         matches:{
//             resultMatch: {
//                 equals:{
                    
//                 }
//             }
//         }
//        }
//     })
// }
export {
    createGuess,
    findManyGuesses,
    findManyGuessesByUserId,
    // findManyWinnerGuesses
}
