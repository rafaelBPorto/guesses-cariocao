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

    if (!match?.resultMatch) {
        return 0
    }
    return match.resultMatch;
}

async function updateResulMatch(idMatch: number, resultMatch: number){
    try{
        await prisma.matches.update({
            where :{
                id: idMatch
            },
            data:{
                resultMatch: resultMatch
            }
        })
    }catch(error){
        return error
    }
    
}

export {
    findResultMatch,
    updateResulMatch
}