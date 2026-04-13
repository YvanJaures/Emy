import { prisma } from "../prisma.js";
import { SetRedisCache, GetRedisCache } from "../services/redis.js";

export async function getAllTournaments() {
  try {
    const res = await GetRedisCache("tournaments");
    if (res) return res;
    const tournaments = await prisma.tournament.findMany({
      include: {
        Community: true,
        //Admin: true,
        Player: true,
        Prize: {
          include: {
            Prize_sponsor: true,
          },
        },
        Team: {
          select: {
            id_team: true,
            name: true,
            id_tour: true,
            open: true,
            key_team: true,
            members: true,
            Team_member: {
              include: {
                Member: {
                  select: {
                    user_name: true,
                    name: true,
                    surname: true,
                    address: true,
                    birth_date: true,
                    country: true,
                    email: true,
                    phone: true,
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    await SetRedisCache("tournaments",tournaments);
    return tournaments
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}
export async function getTournamentsByCommunity(id_community) {
  try {
    const res = await GetRedisCache("tournaments-"+id_community);
    if (res) return res;
    const tournaments = await prisma.tournament.findMany({
      where: {
        id_community: id_community,
      },
      include: {
        Prize: {
          include: {
            Prize_sponsor: true,
          },
        },
        Team: {
          select: {
            id_team: true,
            name: true,
            id_tour: true,
            open: true,
            players: true,
            key_team: true,
            members: true,
            Team_member: {
              include: {
                Member: {
                  select: {
                    user_name: true,
                    name: true,
                    surname: true,
                    address: true,
                    birth_date: true,
                    country: true,
                    email: true,
                    phone: true,
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    await SetRedisCache(`tournaments-${id_community}`,tournaments);
    return tournaments;
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}
