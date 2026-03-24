import {
  addCommunityMember,
  addMember,
  addPlayer,
  addTeam,
  addTeamMember,
  addTeamMemberWait,
  getMemberByEmail,
  getMemberByName,
  getMembers,
  getMembersUserNames,
  updateMember,
  updatePasswordMember,
  getMembersByCommunity,
  getTeamDetails,
  updateTeam,
  getTourAndPrizes,
  getRegistrationFees,
  registrationPlayer,
  getLastTeam
} from "../models/global.js";
import "../services/auth.js";
import passport from "passport";
import "dotenv/config";
// copier et adapter
/*
export const basefunction=async(request,response)=>{
    try{

    }catch(error){
        response.status(400).end()
    }
}*/
/**
 * recupére l'utilisateur connecté
 * @param {*} request
 * @param {*} response
 */
export const getUser = async (request, response) => {
  const user = request.user;
  if (!user) {
    response.status(400).json({ info: "no_user" });
    return;
  }
  response.status(200).json(user);
};
/**
 * recupére le membre en fonction de l'email
 * @param {*} request
 * @param {*} response
 */
export const getMemberByEmailC = async (request, response) => {
  try {
    const member = await getMemberByEmail(request.query.email);
    response.status(200).json(member);
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * recupére le membre en fonction du username
 * @param {*} request
 * @param {*} response
 */
export const getMemberByNameC = async (request, response) => {
  try {
    const member = await getMemberByName(request.query.user_name);
    response.status(200).json(member);
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * recupére tous les membres de l'application
 * @param {*} request
 * @param {*} response
 */
export const getMembersC = async (request, response) => {
  try {
    const members = await getMembers();
    response.status(200).json(members);
  } catch (error) {
    console.log(error);
    response.status(400).end();
  }
};
/**
 * récupére les membres d'une communauté précise. (passer
 * l'id community en paramètres via le query)
 */
export const getMembersByCommunityC = async (request, response) => {
  try {
    const members = await getMembersByCommunity(request.query.id_community);
    response.status(200).json(members);
  } catch (error) {
    console.log(error);
    response.status(400).end();
  }
};
/**
 * recupére les noms d'utilisateurs de membres de l'application
 * @param {*} request
 * @param {*} response
 */
export const getMembersUserNamesC = async (request, response) => {
  try {
    const userNames = await getMembersUserNames();
    response.status(200).json(userNames);
  } catch (error) {
    response.status(400).end();
  }
};
export const getLastTeamC=async(request,response)=>{
  try{
    const team=await getLastTeam()
    response.status(200).json(team)
  } catch (error) {
    response.status(400).json({message:'une erreur est survenue :'+error});
  }
}
/**
 * ajoute un membre
 * @param {*} request
 * @param {*} response
 */
export const addMemberC = async (request, response) => {
  try {
    await addMember(
      request.body.user_name,
      request.body.name,
      request.body.surname,
      request.body.address,
      request.body.birth_date,
      request.body.country,
      request.body.email,
      request.body.avatar,
      request.body.password,
      request.body.phone,
    );
    response.status(201).end();
  } catch (error) {
    console.log(error);
    response.status(400).end();
  }
};
/**
 * met à jour un membre
 * @param {*} request
 * @param {*} response
 */
export const updateMemberC = async (request, response) => {
  try {
    await updateMember(
      request.body.user_name,
      request.body.alias,
      request.body.new_info,
    );
    response.status(200).end();
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * ajoute un team à une équipe
 * @param {*} request
 * @param {*} response
 */
export const addTeamC = async (request, response) => {
  try {
    await addTeam(
      request.body.name,
      request.body.id_tour,
      request.body.key_team,
      request.body.user_name,
      request.body.open
    );
    response.status(201).end();
  } catch (error) {
    response.status(400).json({error});
  }
};
/**
 * ajoute un membre à une équipe (en attente)
 * @param {*} request
 * @param {*} response
 */
export const addTeamMemberWaitC = async (request, response) => {
  try {
    await addTeamMemberWait(request.body.id_team, request.body.user_name);
    response.status(201).end();
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * ajoute un membre à une équipe (définitivement)
 * @param {*} request
 * @param {*} response
 */
export const addTeamMemberC = async (request, response) => {
  try {
    await addTeamMember(request.body.user_name);
    response.status(200).end();
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * paye
 * @param {*} request
 * @param {*} response
 */
export const payC = async (request, response) => {
  try {
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * modifie le mot de passe de l'utilisateur
 * @param {*} request
 * @param {*} response
 */
export const updatePasswordMemberC = async (request, response) => {
  try {
    await updatePasswordMember(request.body.user_name, request.body.password);
    response.status(200).end();
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "impossible " + error });
  }
};
/**
 * ajoute un membre à une communauté
 * @param {*} request
 * @param {*} response
 */
export const addCommunityMemberC = async (request, response) => {
  try {
    await addCommunityMember(request.body.id_community, request.body.user_name);
    response.status(201).end();
  } catch (error) {
    response.status(400).end();
  }
};
/**
 * ajoute un joueur à une équipe
 * @param {*} request
 * @param {*} response
 */
export const addPlayerC = async (request, response) => {
  try {
    await addPlayer(request.body.id_tour, request.body.user_name);
  } catch (error) {
    response.status(400).end();
  }
};

/**
 * connecte l'utilisateur à l'application
 * @param {*} request
 * @param {*} response
 */
export const connexion = async (request, response, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return next(error);
    if (!user) return response.status(401).json(info);
    request.logIn(user, (error) => {
      if (error) return next(error);
      response.sendStatus(200);
    });
  })(request, response, next);
};
/**
 * déconnecte l'utilisateur à l'application
 * @param {*} request
 * @param {*} response
 */
export const deconnexion = async (request, response, next) => {
  request.logout((error) => {
    if (error) return next(error);
    response.status(200).end();
  });
};

/**Modifier le details dune equipe */
export const updateTeamC = async (req, res) => {
  try {
    const { id_team, name, id_tour, open, key_team } = req.body;

    if (!id_team || Number.isNaN(Number(id_team))) {
      return res.status(400).json({ message: "id_team invalide" });
    }

    const data = {};

    if (name !== undefined) data.name = name;
    if (id_tour !== undefined && id_tour !== "") data.id_tour = Number(id_tour);
    if (open !== undefined) data.open = Boolean(open);
    if (key_team !== undefined) data.key_team = key_team;

    await updateTeam(Number(id_team), data);

    return res.status(200).json({ message: "Équipe mise à jour" });
  } catch (e) {
    console.error("updateTeamC error:", e);
    return res.status(500).json({
      message: "Erreur serveur",
      error: e.message,
    });
  }
};

/**Afficher details d une equipe */
export const getTeamDetailsC = async (req, res) => {
  try {
    const id_team = Number(req.query.id_team);

    if (!id_team || Number.isNaN(id_team)) {
      return res.status(400).json({ message: "id_team invalide" });
    }

    const team = await getTeamDetails(id_team);

    if (!team) {
      return res.status(404).json({ message: "Équipe introuvable" });
    }

    return res.status(200).json(team);
  } catch (e) {
    console.error("getTeamDetailsC error:", e);
    return res.status(500).json({
      message: "Erreur serveur",
      error: e.message,
    });
  }
};

/**Recuperer le detail d un tournoi + prizes */
export const getTourAndPrizesC = async (req, res) => {
  try {
    const { id_tour, id_community } = req.query;

    if (!id_tour || !id_community) {
      return res.status(400).json({
        message: "Paramètres manquants",
      });
    }

    const tournament = await getTourAndPrizes(
      Number(id_tour),
      Number(id_community),
    );

    if (!tournament) {
      return res.status(404).json({
        message: "Tournoi introuvable",
      });
    }

    return res.status(200).json(tournament);
  } catch (error) {
    console.error("GET TOUR DETAILS:", error);
    return res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

/**Recuperer le prix d inscription d un tournoi auquel l utilisateur veut s'inscrire */
export const getRegistrationFeesC = async (request, response) => {
  try {
    const { id_tour } = request.query;

    if (!id_tour) {
      return response.status(400).json({
        message: "id_tour est requis",
      });
    }

    const tournament = await getRegistrationFees(id_tour);

    if (!tournament) {
      return response.status(404).json({
        message: "Tournoi introuvable",
      });
    }

    return response.status(200).json({
      id_tour: tournament.id_tour,
      tournament_name: tournament.name,
      fees: tournament.fees,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Erreur lors de la récupération des frais d'inscription",
      error: error.message,
    });
  }
};

/** Inscription a un tournoi */
export const registrationPlayerC = async (request, response) => {
  try {
    const { id_tour, user_name } = request.body;

    if (!id_tour || !user_name) {
      return response.status(400).json({
        message: "id_tour et user_name sont requis"
      });
    }

    const player = await registrationPlayer(id_tour, user_name);

    return response.status(201).json({
      message: "Inscription au tournoi réussie",
      player
    });
  } catch (error) {
    if (error.message === "Ce membre est déjà inscrit à ce tournoi") {
      return response.status(400).json({
        message: "Vous êtes déjà inscrit à ce tournoi"
      });
    }

    return response.status(400).json({
      message: "Erreur lors de l'inscription au tournoi",
      error: error.message
    });
  }
};