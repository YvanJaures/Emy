import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';

//Ajouter membre à une équipe
export async function addMemberToTeam(id_team,user_name){
    await prisma.team_member.create({
        data:{
            id_team:id_team,
            user_name:user_name,
            status:1
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
    teams,location,start_date,end_date,status,avatar,id_admin,id_community
){
    await prisma.tour.create({
        data:{
            teams:teams,
            location:location,
            start_date:new Date(start_date),
            end_date:new Date(end_date),
            status:status,
            avatar:avatar,
            id_admin:id_admin,
            id_community:id_community
        }
    })
}

//Modifier nombre d'équipes
export async function updateTourTeams(id_tour,id_community,teams){
    await prisma.tour.updateMany({
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
    await prisma.tour.updateMany({
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
export async function deleteTeamFromTour(id_team,id_tour){
    await prisma.tournament_team.deleteMany({
        where:{
            id_team:id_team,
            id_tour:id_tour
        }
    })
}

//Créer prix
export async function createPrize(
    name,spots,group_spots,id_tour,id_type,id_admin,number
){
    await prisma.prize.create({
        data:{
            name:name,
            spots:spots,
            group_spots:group_spots,
            id_tour:id_tour,
            id_type:id_type,
            id_admin:id_admin,
            number:number
        }
    })
}

//Supprimer prix
export async function deletePrize(id_prize,id_tour){
    await prisma.prize.deleteMany({
        where:{
            id_prize:id_prize,
            id_tour:id_tour
        }
    })
}

//Modifier nombre prix
export async function updatePrize(id_prize,id_tour,number){
    await prisma.prize.updateMany({
        where:{
            id_prize:id_prize,
            id_tour:id_tour
        },
        data:{
            number:number
        }
    })
}


//Ajouter admin
export async function addAdmin(user_name,id_community){
    await prisma.admin.create({
        data:{
            user_name:user_name,
            id_community:id_community
        }
    })
}

//Supprimer admin
export async function deleteAdmin(id_admin,user_name,id_community){
    await prisma.admin.deleteMany({
        where:{
            id_admin:id_admin,
            user_name:user_name,
            id_community:id_community
        }
    })
}

//Enregistrer action admin
export async function logAdminAction(id_admin,details){
    await prisma.admin_action.create({
        data:{
            id_admin:id_admin,
            details:details,
            date:new Date()
        }
    })
}

export async function deleteMemberFromTour(id_tour,user_name){

    const deleted = await prisma.player.deleteMany({
        where:{
            id_tour:id_tour,
            user_name:user_name
        }
    });

    return deleted;
}


export async function deleteMemberFromCommunity(id_community,user_name){

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
    console.log("admins")
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
