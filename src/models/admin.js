import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';

/**Ajouter membre à une équipe*/
export async function addMemberToTeam(id_team,user_name){
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
    await prisma.tournament.updateMany({
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
    return await prisma.admin.create({
        data:{
            user_name,
            id_community
        }
    });
}

/**Supprimer admin*/
export async function deleteAdmin(id_admin,user_name,id_community) {
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
    await prisma.admin_action.create({
        data:{
            id_admin:id_admin,
            details:details,
            date:new Date()
        }
    })
}

export async function deleteMemberFromTour(id_tour,user_name) {

    const deleted = await prisma.player.deleteMany({
        where:{
            id_tour:id_tour,
            user_name:user_name
        }
    });

    return deleted;
}

export async function deleteMemberFromCommunity(id_community,user_name) {

    const deleted = await prisma.community_member.deleteMany({
        where:{
            id_community:id_community,
            user_name:user_name
        }
    });

    return deleted;
}

export async function updateCommunity(id_community, alias, new_info) {
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
    return await prisma.admin.findMany({
        include: {
            Member: true,
            Community: true
        }
    });
}

export async function getAdminById(id_admin) {
    return await prisma.admin.findUnique({
        where: {
            id_admin: id_admin
        },
        include: {
            Member: true,
            Community: true
        }
    });
}
/**
 * Recuperation des equipe selon l'id de leur communaute
 */
export async function getTourTeamsByCommunity(id_community) {
  return await prisma.tournament.findMany({
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
}


/** Supprimer un tournoi */
export async function deleteTour(id_tour, id_community) {
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
  return await prisma.tournament.findUnique({
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
}

/**Modifier une equipe */
// models/adminModel.js
export async function patchTeam(id_team, id_tour, patch) {
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