import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';
import { GetRedisCache, SetRedisCache, DelRedisCache } from '../services/redis.js';

/**Ajouter membre à une équipe*/
export async function addMemberToTeam(id_team,user_name){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache(`teams-by-tour-*`);
        await DelRedisCache(`tour-teams-community-*`);
    } catch (error) {
        console.error("Cache invalidation error in addMemberToTeam:", error);
    }

    await prisma.team_member.create({
        data:{
            id_team:id_team,
            user_name:user_name,
            status: true
        }
    })
}

/**Retirer membre d'une équipe*/
export async function deleteMemberFromTeam(id_team,user_name){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache(`teams-by-tour-*`);
        await DelRedisCache(`tour-teams-community-*`);
    } catch (error) {
        console.error("Cache invalidation error in deleteMemberFromTeam:", error);
    }

    await prisma.team_member.deleteMany({
        where:{
            id_team:id_team,
            user_name:user_name
        }
    })
}

/**Créer tournoi*/
export async function createTour(
    name,
    location,
    members,
    start_date,
    end_date,
    avatar,
    id_community
){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
    } catch (error) {
        console.error("Cache invalidation error in createTour:", error);
    }

    return await prisma.tournament.create({

        data:{
            name:name,
            location:location,
            members:members,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            avatar:avatar,
            id_community:id_community,
        }
    });
}

//Créer tournoi
export async function createTourWithPrizes(
    name,
    location,
    members,
    start_date,
    end_date,
    avatar,
    id_community,
    fees,
    prizes
){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
    } catch (error) {
        console.error("Cache invalidation error in createTourWithPrizes:", error);
    }

    return await prisma.tournament.create({
        data:{
            name:name,
            location:location,
            members:members,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            avatar:avatar,
            id_community:id_community,
            fees: fees,

            Prize:{
                create: prizes
            }
        },
        include:{
            Prize:true
        }
    });

}
//Modifier nombre d'équipes
export async function updateTourTeams(id_tour,id_community,teams){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
        await DelRedisCache(`teams-by-tour-*`);
    } catch (error) {
        console.error("Cache invalidation error in updateTourTeams:", error);
    }

    await prisma.tournament.updateMany({
        where:{
            id_tour:id_tour,
            id_community:id_community
        },
        data:{
            teams:teams
        }
    })
}

/**Ouvrir/Fermer inscriptions*/
export async function updateTourStatus(id_tour,id_community,status){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
    } catch (error) {
        console.error("Cache invalidation error in updateTourStatus:", error);
    }

    await prisma.tournament.update({
        where:{
            id_tour:id_tour,
            id_community:id_community
        },
        data:{
            status:status
        }
    })
}

/**Retirer équipe du tournoi*/
export async function deleteTeamFromTour(id_team, id_tour){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
        await DelRedisCache(`teams-by-tour-*`);
    } catch (error) {
        console.error("Cache invalidation error in deleteTeamFromTour:", error);
    }

    return await prisma.team.updateMany({
        where: {
            id_team: id_team,
            id_tour: id_tour
        },
        data: {
            id_tour: null
        }
    });
}

/**Créer prix*/
export async function createPrize(
    name,
    spots,
    group_spot,
    id_tour,
    id_type,
    id_admin
){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
    } catch (error) {
        console.error("Cache invalidation error in createPrize:", error);
    }

    return await prisma.prize.create({
        data: {
            name,
            spots,
            group_spot,
            id_admin,

            Tournament: {
                connect: { id_tour }
            },

            Type: {
                connect: { id_type }
            }
        }
    });
}
/**Supprimer prix*/
export async function deletePrize(id_prize, id_tour){
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
    } catch (error) {
        console.error("Cache invalidation error in deletePrize:", error);
    }

    //doit supprimer le Prix sponsored avant car Key Foreign
    await prisma.prize_sponsor.deleteMany({
        where: {
            id_prize: id_prize
        }
    });
    //Ensuite on peut supprimer le Prix
    return await prisma.prize.deleteMany({
        where: {
            id_prize: id_prize,
            id_tour: id_tour
        }
    });
}

/**Modifier nombre prix   */  
export async function updatePrize(id_prize, id_tour, spots) {
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
    } catch (error) {
        console.error("Cache invalidation error in updatePrize:", error);
    }

    return await prisma.prize.updateMany({
        where: {
            id_prize: id_prize,
            id_tour: id_tour
        },
        data: {
            spots: spots
        }
    });
}

/**Ajouter admin */
export async function addAdmin(user_name,id_community) {
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("admins");
        await DelRedisCache(`admin-*`);
        await DelRedisCache(`communities`);
    } catch (error) {
        console.error("Cache invalidation error in addAdmin:", error);
    }

    return await prisma.admin.create({
        data:{
            user_name,
            id_community
        }
    });
}

/**Supprimer admin*/
export async function deleteAdmin(id_admin,user_name,id_community) {
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("admins");
        await DelRedisCache(`admin-*`);
        await DelRedisCache(`admin-*`);
        await DelRedisCahe('communities')
    } catch (error) {
        console.error("Cache invalidation error in deleteAdmin:", error);
    }

    await prisma.admin.deleteMany({
        where:{
            id_admin:id_admin,
            user_name:user_name,
            id_community:id_community
        }
    })
}

/**Enregistrer action admin*/
export async function logAdminAction(id_admin,details) {
    // Pas d'invalidation de cache nécessaire pour le logging
    await prisma.admin_action.create({
        data:{
            id_admin:id_admin,
            details:details,
            date:new Date()
        }
    })
}

export async function deleteMemberFromTour(id_tour,user_name) {
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("tournaments");
        await DelRedisCache(`tournaments-*`);
        await DelRedisCache(`tour-teams-community-*`);
        await DelRedisCache(`teams-by-tour-*`);
    } catch (error) {
        console.error("Cache invalidation error in deleteMemberFromTour:", error);
    }

    const deleted = await prisma.player.deleteMany({
        where:{
            id_tour:id_tour,
            user_name:user_name
        }
    });

    return deleted;
}

export async function deleteMemberFromCommunity(id_community,user_name) {
    // Invalider le cache au début de l'opération
    try {
        await DelRedisCache("members");
        await DelRedisCache(`community-members-*`);
        await DelRedisCache("communities");
        await DelRedisCache(`community-*`);
    } catch (error) {
        console.error("Cache invalidation error in deleteMemberFromCommunity:", error);
    }

    const deleted = await prisma.community_member.deleteMany({
        where:{
            id_community:id_community,
            user_name:user_name
        }
    });

    return deleted;
}

export async function updateCommunity(id_community, alias, new_info) {
  // Invalider le cache au début de l'opération
  try {
    await DelRedisCache("communities");
    await DelRedisCache(`community-*`);
  } catch (error) {
    console.error("Cache invalidation error in updateCommunity:", error);
  }

  switch(alias){
    case "name":
        return await prisma.community.update({
            where: { id_community },
            data: { name: new_info }
        });
    case "description":
        return await prisma.community.update({
            where: { id_community },
            data: { details: new_info } 
        });
    case "avatar":
        return await prisma.community.update({
            where: { id_community },
            data: { avatar: new_info }
        });
    default:
        break;
  }
}

export async function getAllAdmins() {
    try {
        const cacheKey = "admins";
        const cached = await GetRedisCache(cacheKey);
        if (cached) return cached;

        const admins = await prisma.admin.findMany({
            include: {
                Member: true,
                Community: true
            }
        });

        await SetRedisCache(cacheKey, admins);
        return admins;
    } catch (error) {
        console.error("getAllAdmins error:", error);
        throw error;
    }
}

export async function getAdminById(id_admin) {
    try {
        const cacheKey = `admin-${id_admin}`;
        const cached = await GetRedisCache(cacheKey);
        if (cached) return cached;

        const admin = await prisma.admin.findUnique({
            where: {
                id_admin: id_admin
            },
            include: {
                Member: true,
                Community: true
            }
        });

        if (admin) await SetRedisCache(cacheKey, admin);
        return admin;
    } catch (error) {
        console.error("getAdminById error:", error);
        throw error;
    }
}
/**
 * Recuperation des equipe selon l'id de leur communaute
 */
export async function getTourTeamsByCommunity(id_community) {
  try {
    const cacheKey = `tour-teams-community-${id_community}`;
    const cached = await GetRedisCache(cacheKey);
    if (cached) return cached;

    const tours = await prisma.tournament.findMany({
      where: { id_community:id_community },
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
      },
      orderBy: { id_tour: "desc" }
    });

    await SetRedisCache(cacheKey, tours);
    return tours;
  } catch (error) {
    console.error("getTourTeamsByCommunity error:", error);
    throw error;
  }
}


/** Supprimer un tournoi */
export async function deleteTour(id_tour, id_community) {
  // Invalider le cache au début de l'opération
  try {
    await DelRedisCache("tournaments");
    await DelRedisCache(`tournaments-*`);
    await DelRedisCache(`tour-teams-community-*`);
    await DelRedisCache(`teams-by-tour-*`);
  } catch (error) {
    console.error("Cache invalidation error in deleteTour:", error);
  }

  return await prisma.$transaction(async (tx) => {
    // vérifier que le tournoi appartient à la communauté
    const tour = await tx.tournament.findFirst({
      where: { id_tour, ...(id_community ? { id_community } : {}) },
      select: { id_tour: true }
    });

    if (!tour) {
      return { count: 0 };
    }

    // prize_sponsor  doit partir avant Prize 
    await tx.prize_sponsor.deleteMany({
      where: {
        Prize: { id_tour }
      }
    });

    // prizes du tournoi
    await tx.prize.deleteMany({
      where: { id_tour }
    });

    // players du tournoi
    await tx.player.deleteMany({
      where: { id_tour }
    });

    // teams: détacher du tournoi (sinon FK NoAction bloque)
    await tx.team.updateMany({
      where: { id_tour },
      data: { id_tour: null }
    });

    // supprimer le tournoi
    const deleted = await tx.tournament.deleteMany({
      where: { id_tour, ...(id_community ? { id_community } : {}) }
    });

    return deleted; 
  });
}

/**Afficher le detail de toutes les equipes d'un tournoi */
// models/adminModel.js
export async function getTeamsByTour(id_tour) {
  try {
    const cacheKey = `teams-by-tour-${id_tour}`;
    const cached = await GetRedisCache(cacheKey);
    if (cached) return cached;

    const tournament = await prisma.tournament.findUnique({
      where: { id_tour: Number(id_tour) },
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
          orderBy: { id_team: "asc" },
        },
      },
    });

    if (tournament) await SetRedisCache(cacheKey, tournament);
    return tournament;
  } catch (error) {
    console.error("getTeamsByTour error:", error);
    throw error;
  }
}

/**Modifier une equipe */
// models/adminModel.js
export async function patchTeam(id_team, id_tour, patch) {
  // Invalider le cache au début de l'opération
  try {
    await DelRedisCache(`teams-by-tour-*`);
    await DelRedisCache(`tour-teams-community-*`);
  } catch (error) {
    console.error("Cache invalidation error in patchTeam:", error);
  }

  const data = {};
  if (patch.name !== undefined) data.name = patch.name;
  if (patch.open !== undefined) data.open = patch.open;
  if (patch.key_team !== undefined) data.key_team = patch.key_team;
  if (patch.members !== undefined) data.members = patch.members;

  // rien à modifier
  if (Object.keys(data).length === 0) {
    return await prisma.team.findUnique({ where: { id_team } });
  }

  // si id_tour est fourni, on sécurise (updateMany) pour éviter modifier une team d’un autre tournoi
  if (id_tour !== undefined) {
    await prisma.team.updateMany({
      where: { id_team, id_tour },
      data,
    });

    return await prisma.team.findFirst({
      where: { id_team, id_tour },
    });
  }

  // sinon update direct
  return await prisma.team.update({
    where: { id_team },
    data,
  });
}

/**Modification tournoi et pizes */
export async function updateTourAndPrizes(
  id_tour,
  id_community,
  name,
  location,
  members,
  start_date,
  end_date,
  avatar,
  fees,
  prizes
) {
  // Invalider le cache au début de l'opération
  try {
    await DelRedisCache("tournaments");
    await DelRedisCache(`tournaments-*`);
    await DelRedisCache(`tour-teams-community-*`);
    await DelRedisCache(`teams-by-tour-*`);
  } catch (error) {
    console.error("Cache invalidation error in updateTourAndPrizes:", error);
  }

  return await prisma.$transaction(async (tx) => {
    await tx.tournament.updateMany({
      where: {
        id_tour: id_tour,
        id_community: id_community,
      },
      data: {
        name: name,
        location: location,
        members: members,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        avatar: avatar,
        fees: fees
      },
    });

    await tx.prize.deleteMany({
      where: {
        id_tour: id_tour,
      },
    });

    await tx.prize.createMany({
      data: prizes.map((prize) => ({
        name: prize.name,
        value: prize.value,
        spots: prize.spots,
        group_spot: prize.group_spot,
        id_tour: id_tour,
      })),
    });
  });
}