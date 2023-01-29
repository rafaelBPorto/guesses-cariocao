import prisma from "../src/database/database.js"

async function main() {
    await prisma.teams.createMany({
        skipDuplicates: true,
        data: [
            { name: "Audax-RJ" },       // id: 1
            { name: "Bangu" },          // id: 2
            { name: "Boavista" },       // id: 3
            { name: "Botafogo" },       // id: 4
            { name: "Flamengo" },       // id: 5
            { name: "Fluminense" },     // id: 6
            { name: "Madureira" },      // id: 7
            { name: "Nova Iguaçu" },    // id: 8
            { name: "Portuguesa-RJ" },  // id: 9
            { name: "Resende" },        // id: 10
            { name: "Vasco" },          // id: 11
            { name: "Volta Redonda" },  // id: 12
        ]
    })
    await prisma.possibilitiesResults.createMany({
        skipDuplicates: true,
        data: [
            { description: "home team" },        // id : 1
            { description: "tie" },              // id : 2
            { description: "visiting team" },    // id : 3
            { description: "uninitiated" },      // id : 4
            { description: "cancelled" },        // id : 5
        ]
    })

    await prisma.possibilitiesGuesses.createMany({
        skipDuplicates: true,
        data: [
            { description: "home team" },        // id : 1
            { description: "tie" },              // id : 2
            { description: "visiting team" },    // id : 3
        ]
    })

    await prisma.matches.createMany({
        skipDuplicates: true,
        data: [
            { homeTeamId: 8, visitingTeamId: 12, resultMatch: 4 },  // id : 1
            { homeTeamId: 10, visitingTeamId: 6, resultMatch: 4 },  // id : 2
            { homeTeamId: 11, visitingTeamId: 7, resultMatch: 4 },  // id : 3
            { homeTeamId: 3, visitingTeamId: 2, resultMatch: 4 },   // id : 4
            { homeTeamId: 4, visitingTeamId: 1, resultMatch: 4 },   // id : 5
            { homeTeamId: 5, visitingTeamId: 9, resultMatch: 4 },   // id : 6
            { homeTeamId: 6, visitingTeamId: 8, resultMatch: 4 },   // id : 7
            { homeTeamId: 2, visitingTeamId: 10, resultMatch: 4 },  // id : 8
            { homeTeamId: 7, visitingTeamId: 2, resultMatch: 4 },   // id : 9
            { homeTeamId: 9, visitingTeamId: 3, resultMatch: 4 },   // id : 10
            { homeTeamId: 12, visitingTeamId: 4, resultMatch: 4 },  // id : 11
            { homeTeamId: 1, visitingTeamId: 11, resultMatch: 4 },  // id : 12
            { homeTeamId: 5, visitingTeamId: 8, resultMatch: 4 },   // id : 13
            { homeTeamId: 9, visitingTeamId: 2, resultMatch: 4 },   // id : 14
            { homeTeamId: 10, visitingTeamId: 3, resultMatch: 4 },  // id : 15
            { homeTeamId: 12, visitingTeamId: 1, resultMatch: 4 },  // id : 16
            { homeTeamId: 7, visitingTeamId: 6, resultMatch: 4 },   // id : 17
            { homeTeamId: 11, visitingTeamId: 4, resultMatch: 4 },  // id : 18
            { homeTeamId: 2, visitingTeamId: 5, resultMatch: 4 },   // id : 19
            { homeTeamId: 1, visitingTeamId: 8, resultMatch: 4 },   // id : 20
            { homeTeamId: 12, visitingTeamId: 10, resultMatch: 4 }, // id : 21
            { homeTeamId: 9, visitingTeamId: 11, resultMatch: 4 },  // id : 22
            { homeTeamId: 4, visitingTeamId: 7, resultMatch: 4 },   // id : 23
            { homeTeamId: 6, visitingTeamId: 3, resultMatch: 4 },   // id : 24
        ]
    })
};

main().then(() => {
    console.log("The records inserted successfully");
}).catch((e) => {
    console.log("Unable to insert records");
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})