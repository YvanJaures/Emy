import { prisma } from "../prisma.js";

export async function getAllTournaments() {
    return await prisma.tournament.findMany({
        include: {
            Community: true,
            Admin: true
        }
    });
}

export async function getTournamentsByAdmin(id_admin) {
    return await prisma.tournament.findMany({
        where: {
            id_admin: id_admin
        },
        include: {
            Community: true
        }
    });
}