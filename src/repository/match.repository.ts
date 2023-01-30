import prisma from "../database/database.js";

async function findResultMatch(idMatch: number) {
    const match  = await prisma.matches.findFirst({
        where: {
            id: idMatch,
        },
        select: {
            resultMatch: true
        }
    });

    console.log(match?.resultMatch)

    if (!match?.resultMatch) {
        return 0
    }
    return match.resultMatch;
}

export {
    findResultMatch
}