import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';

//Ajouter membre à une équipe
export async function addMemberToTeam(id_team,user_name){
    await prisma.team_member.create({
        data:{
            id_team:id_team,
            user_name:user_name,
            status: true
        }
    })
}

//Retirer membre d'une équipe
export async function deleteMemberFromTeam(id_team,user_name){
    await prisma.team_member.deleteMany({
        where:{
            id_team:id_team,
            user_name:user_name
        }
    })
}

//Créer tournoi
export async function createTour(
    location,
    start_date,
    end_date,
    status,
    avatar,
    id_admin,
    id_community
){
    return await prisma.tournament.create({
        data:{
            location,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            status,
            avatar,
            id_admin,
            id_community
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

//Ouvrir/Fermer inscriptions
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

//Retirer équipe du tournoi
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

//Créer prix
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
//Supprimer prix
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

//Modifier nombre prix     ***
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

//Ajouter admin
export async function addAdmin(user_name,id_community) {
    return await prisma.admin.create({
        data:{
            user_name,
            id_community
        }
    });
}

//Supprimer admin
export async function deleteAdmin(id_admin,user_name,id_community) {
    await prisma.admin.deleteMany({
        where:{
            id_admin:id_admin,
            user_name:user_name,
            id_community:id_community
        }
    })
}

//Enregistrer action admin
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
