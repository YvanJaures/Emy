import { prisma } from "../prisma.js";

export async function getAllTournaments() {
    return await prisma.tournament.findMany({
        include: {
            Community: true,
            Admin: true
        }
    });
}
export async function getTournamentsByCommunity(id_community) {
    return await prisma.tournament.findMany({
        where: {
            id_community: id_community
        },
        include:{
            Team:true
        }
    });
}

