import prisma from "../database/database.js";

async function findManyTeams() {
    return await prisma.teams.findMany();
    
}

export{
    findManyTeams
}