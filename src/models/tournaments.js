import { prisma } from "../prisma.js";

export async function getAllTournaments() {
    return await prisma.tournament.findMany({
        include: {
            Community: true,
            //Admin: true,
            Prize:true,
            Team: {
                select: {
                id_team: true,
                name: true,
                id_tour: true,
                open: true,
                key_team: true,
                members: true,
                Team_member: {
                    select: {
                    Member: {
                        select: {
                        user_name: true,
                        avatar: true,
                        name: true,
                        surname: true,
                        },
                    },
                    },
                },
                },
            }
        }
    });
}
export async function getTournamentsByCommunity(id_community) {
    return await prisma.tournament.findMany({
        where: {
            id_community: id_community
        },
        select: {
            id_tour: true,
            location: true,
            start_date: true,
            end_date: true,
            avatar: true,
            Team: {
                select: {
                id_team: true,
                name: true,
                id_tour: true,
                open: true,
                key_team: true,
                members: true,
                Team_member: {
                    select: {
                    Member: {
                        select: {
                        user_name: true,
                        avatar: true,
                        name: true,
                        surname: true,
                        },
                    },
                    },
                },
                },
            },
            }
    });
}

