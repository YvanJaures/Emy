import { prisma } from "../prisma.js";

export async function getAllTournaments() {
    return await prisma.tournament.findMany({
        include: {
            Community: true,
            Admin: true
        }
    });
}

