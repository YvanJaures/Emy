import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';
/**
 * Retourne le membre en fonction de son email
 * @param {*} email 
 * @returns membre
 */
export async function getMemberByEmail(email){
    const member= await prisma.member.findFirst({
        where:{
            email:email
        }
    });
    return member
}
/**
 * Retourne le membre en fonction de son user_name
 * @param {*} user_name 
 * @returns membre
 */
export async function getMemberByName(user_name){
    const member= await prisma.member.findUnique({
        where:{
            user_name:user_name
        }
    });
    return member
}
/**
 * Récupére la liste de tous les membres
 * @returns La liste des membres
 */
export async function getMembers(){
    console.log("Server:", process.env.DB_SERVER);
    const members=await prisma.member.findMany()
    console.log('correct')
    return members
}
/**
 * Récupère les noms d'utilisateur
 * @returns Les usernames utilisateur
 */
export async function getMembersUserNames() {
    const userNames=await prisma.member.findMany({
        select:{
            user_name:true
        }
    })
    return userNames
}
/**
 * Crée un membre
 * @param {String} user_name nom unique de l'utilisateur
 * @param {String} name      nom de l'utilisateur
 * @param {String} surname   prénom de l'utilisateur
 * @param {String} address   adresse
 * @param {Date} birth_date  date de naissance
 * @param {String} phone     numéro de téléphone
 * @param {String} email     adresse courriel
 * @param {String} avatar    lien vers l'avatar de profil
 * @param {String} password  mot de passe
 */
export async function addMember(user_name,name,surname,address,birth_date,country,email,avatar,password){
    const hash_password=await bcrypt.hash(password,10)
    const member=await prisma.member.create({
        data:{
            user_name:user_name,
            name:name,
            surname:surname,
            address:address,
            birth_date:birth_date,
            country:country,
            email:email,
            avatar:avatar,
            password:hash_password
        }
    });
}
/**
 * Met à jour les informations de membre en fonction de se qu'il souhait modifier
 * @param {*} user_name nom de l'utilisateur
 * @param {*} alias     mot clé de la valeure à modifier
 * @param {*} new_info  nouvelle valeure 
 */
export async function updateMember(user_name,alias,new_info){
    switch(alias){
        case "name":
            await prisma.member.update({
                where:{
                    user_name:user_name
                },
                data:{
                    name:new_info
                }
            });
            break;
        case "address":
            await prisma.member.update({
                where:{
                    user_name:user_name
                },
                data:{
                    address:new_info
                }
            });
            break;
        case "avatar":
            await prisma.member.update({
                where:{
                    user_name:user_name
                },
                data:{
                    avatar:new_info
                }
            });
            break;
        case "birth_date":
            await prisma.member.update({
                where:{
                    user_name:user_name
                },
                data:{
                    birth_date:new_info
                }
            });
            break;
        default:
            await prisma.member.update({
                where:{
                    user_name:user_name
                },
                data:{
                    phone:new_info
                }
            });
            break;
    }
    
}
/**
 * Crée une équipe
 * @param {*} name nom de l'équipe
 * @param {*} id_tour identifiant du tournoi associé
 * @param {*} key_team clé d'accès à l'équipe
 */
export async function addTeam(name,id_tour,key_team){
    await prisma.team.create({
        data:{
            name:name,
            id_tour:id_tour,
            key_team:key_team,
            players:4
        }
    })
}
/**
 * Ajoute un membre a une équipe mais avec un status =0 indiquant que le membre est temporaire
 * @param {*} id_team  idenfiant de l'équipe
 * @param {*} user_name nom de l'utilisateur
 */
export async function addTeamMemberWait(id_team,user_name){
    await prisma.team_member.create({
        data:{
            id_team:id_team,
            user_name:user_name,
            status:0
        }
    })
}
/**
 * Modifie le status d'un memebre d'équipe à status =1 indiquant que le membre est définitif
 * @param {*} user_name nom de l'utilisateur
 */
export async function addTeamMember(user_name){
    await prisma.team_member.update({
        where:{
            user_name:user_name
        },
        data:{
            status:1
        }
    });
}
/**
 * Effectue le paiement
 */
export async function pay(){

}
/**
 * Modifie le mot de passe du membre
 * @param {*} user_name 
 * @param {*} new_password 
 */
export async function updatePasswordMember(user_name,new_password){
    const client=await getMemberByName(user_name)
    if(client){
        await prisma.member.update({
            where:{
                user_name:user_name
            },
            data:{
                password:await bcrypt.hash(new_password,10)
            }
        })
    }
    else{
        client=await getMemberByEmail(user_name)
        if(client){
            await prisma.member.update({
                where:{
                    email:user_name
                },
                data:{
                    password:await bcrypt.hash(new_password,10)
                }
            })
        }
    }
}

export async function addCommunityMember(id_community,user_name,join_date){
    await prisma.community_member.create({
        data:{
           id_community:id_community,
           user_name:user_name,
           join_date:join_date 
        }
    })
}
export async function addPlayer(id_tour,user_name){
    await prisma.tournament.create({
        data:{
           id_tour:id_tour,
           user_name:user_name
        }
    })
}