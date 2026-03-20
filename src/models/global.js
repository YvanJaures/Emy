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
        },
        select:{
            user_name        :true,
            name             :true,
            surname          :true,
            address          :true,
            birth_date       :true,
            country          :true,
            email            :true,
            phone            :true,
            avatar           :true,
            Admin            :true,
            Community_member :true,
            Employee         :true,
            Player           :true,
            Sponsor          :true,
            Team             :true,
            Team_member      :true
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
        },
        select:{
            user_name        :true,
            name             :true,
            surname          :true,
            address          :true,
            birth_date       :true,
            country          :true,
            email            :true,
            phone            :true,
            avatar           :true,
            Admin            :true,
            Community_member :true,
            Employee         :true,
            Player           :true,
            Sponsor          :true,
            Team             :true,
            Team_member      :true
        }
    });
    return member
}
export async function getMembersByCommunity(id_community){
    const id=Number.parseInt(id_community)
    const  community=await prisma.community.findUnique({
        where:{
            id_community:id
        },
        include:{
            Community_member:true
        }
    })
    const members=[]
    for(const member of community.Community_member){
        members.push(await getMemberByName(member.user_name))
    }
    return members
}
export async function getMemberPassword(user_name){
    return await prisma.member.findUnique({
        where:{
            user_name:user_name
        },
        select:{
            password:true
        }
    })
}
/**
 * Récupére la liste de tous les membres
 * @returns La liste des membres
 */
export async function getMembers(){
    console.log("Server:", process.env.DB_SERVER);
    const members=await prisma.member.findMany({
        include:{
            Admin:true
        }
    })
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
export async function addMember(user_name,name,surname,address,birth_date,country,email,avatar,password, phone){
    const hash_password=await bcrypt.hash(password,10)
    const birth=new Date(birth_date)
    const member=await prisma.member.create({
        data:{
            user_name:user_name,
            name:name,
            surname:surname,
            address:address,
            birth_date:birth,
            country:country,
            email:email,
            avatar:avatar,
            password:hash_password,
            phone: phone
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
export async function updatePasswordMember(user_name,password){
    const client=await getMemberByName(user_name)
    if(client){
        await prisma.member.update({
            where:{
                user_name:user_name
            },
            data:{
                password:await bcrypt.hash(password,10)
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
                    password:await bcrypt.hash(password,10)
                }
            })
        }
    }
}

export async function addCommunityMember(id_community,user_name){
    await prisma.community_member.create({
        data:{
           id_community:id_community,
           user_name:user_name,
           join_date:new Date() 
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

/**Modifier une equipe */
export async function updateTeam(id_team, patch) {
  const data = {};
  if (patch.name !== undefined) data.name = patch.name;
  if (patch.id_tour !== undefined) data.id_tour = patch.id_tour;
  if (patch.open !== undefined) data.open = patch.open;
  if (patch.key_team !== undefined) data.key_team = patch.key_team;

  return await prisma.team.update({
    where: { id_team },
    data,
  });
}

/**Afficher details d'une equipe */
export async function getTeamDetails(id_team) {
  return await prisma.team.findUnique({
    where: { id_team: id_team },
    select: {
      id_team: true,
      name: true,
      id_tour: true,
      open: true,
      key_team: true,
      Team_member: { select: { user_name: true } },
    },
  });
}


/**Recuperer le detail d un tournoi + prizes */
export async function getTourAndPrizes(id_tour, id_community) {
  return await prisma.tournament.findFirst({
    where: {
      id_tour: id_tour,
      id_community: id_community,
    },
    include: {
      Prize: true,
    },
  });
}