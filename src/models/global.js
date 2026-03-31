import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "../prisma.js";
/**
 * Retourne le membre en fonction de son email
 * @param {*} email
 * @returns membre
 */
export async function getMemberByEmail(email) {
  const member = await prisma.member.findFirst({
    where: {
      email: email,
    },
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
      Admin: true,
      Community_member: true,
      Employee: true,
      Player: true,
      Sponsor: true,
      Team: true,
      Team_member: true,
    },
  });
  return member;
}
/**
 * Retourne le membre en fonction de son user_name
 * @param {*} user_name
 * @returns membre
 */
export async function getMemberByName(user_name) {
  const member = await prisma.member.findUnique({
    where: {
      user_name: user_name,
    },
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
      Admin: true,
      Community_member: true,
      Employee: true,

      Player: {
        include: {
          Tournament: true
        }
      },

      Sponsor: true,

      Team: {
        select: {
          id_team: true,
          name: true,
          key_team: true,

          Tournament: {
            select: {
              name: true
            }
          },

          Team_member: {
            select: {
              status: true,
              Member: {
                select: {
                  user_name: true,
                  avatar: true
                }
              }
            }
          }
        }
      },

      Team_member: true,
    },
  });

  return member;
}
export async function getMembersByCommunity(id_community) {
  const id = Number.parseInt(id_community);
  const community = await prisma.community.findUnique({
    where: {
      id_community: id,
    },
    include: {
      Community_member: true,
    },
  });
  const members = [];
  for (const member of community.Community_member) {
    members.push(await getMemberByName(member.user_name));
  }
  return members;
}
export async function getMemberPassword(user_name) {
  return await prisma.member.findUnique({
    where: {
      user_name: user_name,
    },
    select: {
      password: true,
    },
  });
}
/**
 * Récupére la liste de tous les membres
 * @returns La liste des membres
 */
export async function getMembers() {
  console.log("Server:", process.env.DB_SERVER);
  const members = await prisma.member.findMany({
    include: {
      Admin: true,
    },
  });
  console.log("correct");
  return members;
}
/**
 * Récupère les noms d'utilisateur
 * @returns Les usernames utilisateur
 */
export async function getMembersUserNames() {
  const userNames = await prisma.member.findMany({
    select: {
      user_name: true,
    },
  });
  return userNames;
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
export async function addMember(
  user_name,
  name,
  surname,
  address,
  birth_date,
  country,
  email,
  avatar,
  password,
  phone,
) {
  const hash_password = await bcrypt.hash(password, 10);
  const birth = new Date(birth_date);
  const member = await prisma.member.create({
    data: {
      user_name: user_name,
      name: name,
      surname: surname,
      address: address,
      birth_date: birth,
      country: country,
      email: email,
      avatar: avatar,
      password: hash_password,
      phone: phone,
    },
  });
}
/**
 * Met à jour les informations de membre en fonction de se qu'il souhait modifier
 * @param {*} user_name nom de l'utilisateur
 * @param {*} alias     mot clé de la valeure à modifier
 * @param {*} new_info  nouvelle valeure
 */
export async function updateMember(user_name, aliasOrData, new_info) {
  
  if (typeof aliasOrData === "object") {
    return prisma.member.update({
      where: { user_name },
      data: {
        name: aliasOrData.name,
        surname: aliasOrData.surname,
        email: aliasOrData.email,
        phone: aliasOrData.phone,
        address: aliasOrData.address,
        birth_date: aliasOrData.birth_date
          ? new Date(aliasOrData.birth_date)
          : null,
      },
    });
  }

  const alias = aliasOrData;

  switch (alias) {
    case "name":
      return prisma.member.update({
        where: { user_name },
        data: { name: new_info },
      });

    case "address":
      return prisma.member.update({
        where: { user_name },
        data: { address: new_info },
      });

    case "avatar":
      return prisma.member.update({
        where: { user_name },
        data: { avatar: new_info },
      });

    case "birth_date":
      return prisma.member.update({
        where: { user_name },
        data: { birth_date: new Date(new_info) },
      });

    default:
      return prisma.member.update({
        where: { user_name },
        data: { phone: new_info },
      });
  }
}
/**
 * Crée une équipe
 * @param {*} name nom de l'équipe
 * @param {*} id_tour identifiant du tournoi associé
 * @param {*} key_team clé d'accès à l'équipe
 */
export async function addTeam(name, id_tour, key_team,user_name,open) {
  await prisma.team.create({
    data: {
      name: name,
      id_tour: id_tour,
      key_team: key_team,
      user_name:user_name,
      open:open,
      players:0
    },
  });
}
/**Creer une equipe et recuperer l'id de l'equipe */
export async function addTeams(name, id_tour, key_team, user_name, open) {
  return await prisma.team.create({
    data: {
      name,
      id_tour,
      key_team,
      user_name,
      open,
      players: 0,
      members: 0,
    },
    select: {
      id_team: true,
      name: true,
      id_tour: true,
      key_team: true,
      user_name: true,
      open: true,
      players: true,
      members: true,
    },
  });
}
/**
 * Ajoute un membre a une équipe mais avec un status =0 indiquant que le membre est temporaire
 * @param {*} id_team  idenfiant de l'équipe
 * @param {*} user_name nom de l'utilisateur
 */
export async function addTeamMemberWait(id_team, user_name) {
  await prisma.team_member.create({
    data: {
      id_team: id_team,
      user_name: user_name,
      status:false,
    },
  });
}
/**
 * Modifie le status d'un memebre d'équipe à status =1 indiquant que le membre est définitif
 * @param {*} user_name nom de l'utilisateur
 */
export async function addTeamMember(id_team, user_name){
    await prisma.team_member.updateMany({
        where:{
            user_name: user_name,
            id_team: id_team
        },
        data:{
            status:true
        }
    });
}
/**
 * Effectue le paiement
 */
export async function pay() {}
/**
 * Modifie le mot de passe du membre
 * @param {*} user_name
 * @param {*} new_password
 */
export async function updatePasswordMember(user_name, password) {
  const client = await getMemberByName(user_name);
  if (client) {
    await prisma.member.update({
      where: {
        user_name: user_name,
      },
      data: {
        password: await bcrypt.hash(password, 10),
      },
    });
  } else {
    client = await getMemberByEmail(user_name);
    if (client) {
      await prisma.member.update({
        where: {
          email: user_name,
        },
        data: {
          password: await bcrypt.hash(password, 10),
        },
      });
    }
  }
}

export async function addCommunityMember(id_community, user_name) {
  await prisma.community_member.create({
    data: {
      id_community: id_community,
      user_name: user_name,
      join_date: new Date(),
    },
  });
}

export async function addPlayer(id_tour, user_name) {
  try {
    let tournament = await prisma.tournament.findUnique({
      where: { id_tour: Number(id_tour) }
    });

    if (!tournament) {
      tournament = await prisma.tournament.create({
        data: {
          id_tour: Number(id_tour),
          name: "Fake Tournament " + id_tour,
          start_date: new Date(),
          end_date: new Date(Date.now() + 86400000),
          location: "Test",
        },
      });

      console.log("Fake tournament created:", tournament);
    }

    const existing = await prisma.player.findFirst({
      where: {
        id_tour: Number(id_tour),
        user_name: user_name
      }
    });

    if (existing) {
      console.log("Player already registered");
      return existing;
    }

    const player = await prisma.player.create({
      data: {
        id_tour: Number(id_tour),
        user_name: user_name,
      },
    });

    return player;

  } catch (error) {
    console.error("addPlayer error:", error);
    throw error;
  }
}
/**
 * Récupère la dernière équipe
 * @returns la dernière équipe
 */
export async function getLastTeam(){
  const teams= await prisma.team.findMany({})
  return teams[teams.length-1]
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

/**Recuperer le prix d inscription d un tournoi auquel l utilisateur veut s'inscrire */
export async function getRegistrationFees(id_tour) {
  const tournament = await prisma.tournament.findUnique({
    where: {
      id_tour: Number(id_tour),
    },
    select: {
      id_tour: true,
      name: true,
      fees: true,
    },
  });

  return tournament;
}

/** Inscription a un tournoi */
export async function registrationPlayer(id_tour, user_name) {
  const existingPlayer = await prisma.player.findFirst({
    where: {
      id_tour: Number(id_tour),
      user_name: user_name
    }
  });

  if (existingPlayer) {
    throw new Error("Ce membre est déjà inscrit à ce tournoi");
  }

  const player = await prisma.player.create({
    data: {
      id_tour: Number(id_tour),
      user_name: user_name
    }
  });

  return player;
}

/**Afficher toutes les équipes + détails d’un membre */
export async function getAllTeams() {
  return await prisma.team.findMany({
    include: {
      Tournament: true,
      Team_member: {
        include: {
          Member: true
        }
      }
    }
  });
}