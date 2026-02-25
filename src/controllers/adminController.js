import * as adminModel from '../models/admin.js';
import { prisma } from "../prisma.js";

export const updateTourTeams = async (req,res)=>{
    try{
        const { id_tour, id_community, teams } = req.body;

        if(!id_tour || !id_community || teams === undefined){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Nombre d'équipes du tournoi modifié",
            data:{id_tour,id_community,teams}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const updateTourStatus = async (req, res) => {
  try {
    const { id_tour, id_community, status } = req.body;

    console.log(req.body);

    if (id_tour == null || id_community == null || status == null) {
      return res.status(400).json({ message: "Paramètres manquants" });
    }

    await prisma.tour.updateMany({
      where: {
        id_tour: Number(id_tour),
        id_community: Number(id_community),
      },
      data: {
        status: Number(status),
      },
    });

    res.json({
      message: "Statut du tournoi modifié",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message
    });
  }
};

export const deleteTeamFromTour = async (req,res)=>{
    try{
        const { id_team, id_tour } = req.body;

        if(!id_team || !id_tour){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Équipe retirée du tournoi",
            data:{id_team,id_tour}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const addAdmin = async (req,res)=>{
    try{
        const { user_name, id_community } = req.body;

        if(!user_name || !id_community){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Administrateur ajouté",
            data:{user_name,id_community}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const deleteAdmin = async (req,res)=>{
    try{
        const { id_admin, user_name, id_community } = req.body;

        if(!id_admin || !user_name || !id_community){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Administrateur supprimé",
            data:{id_admin,user_name,id_community}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const addMemberToTeam = async (req,res)=>{
    try{
        const { id_team, user_name } = req.body;

        if(!id_team || !user_name){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Membre ajouté à l'équipe",
            data:{id_team,user_name}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const deleteMemberFromTeam = async (req,res)=>{
    try{
        const { id_team, user_name } = req.body;

        if(!id_team || !user_name){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Membre retiré de l'équipe",
            data:{id_team,user_name}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const createTour = async (req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json({message:"Données manquantes"});
        }

        res.json({
            message:"Tournoi créé",
            data:req.body
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const createPrize = async (req,res)=>{
    try{
        res.json({
            message:"Prix créé",
            data:req.body
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const deletePrize = async (req,res)=>{
    try{
        const { id_prize,id_tour } = req.body;

        if(!id_prize || !id_tour){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Prix supprimé",
            data:{id_prize,id_tour}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const updatePrize = async (req,res)=>{
    try{
        const { id_prize,id_tour,number } = req.body;

        if(!id_prize || !id_tour || number === undefined){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Prix mis à jour",
            data:{id_prize,id_tour,number}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const logAdminAction = async (req,res)=>{
    try{
        const { id_admin,details } = req.body;

        if(!id_admin || !details){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        res.json({
            message:"Action enregistrée",
            data:{id_admin,details}
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Erreur serveur",error:error.message});
    }
};

export const deleteMemberFromTour = async (req,res)=>{
    try{
        let { id_tour, user_name } = req.body;

        id_tour = parseInt(id_tour);

        const result = await adminModel.deleteMemberFromTour(id_tour,user_name);

        if(result.count === 0){
            return res.status(404).json({
                message:"Ce joueur n'est pas inscrit à ce tournoi"
            });
        }

        res.json({
            message:"Membre retiré du tournoi",
            data:{id_tour,user_name}
        });
    }
    catch(error){
        console.error("DELETE MEMBER TOUR:", error);
        res.status(500).json({message:"Erreur serveur"});
    }
};

export const deleteMemberFromCommunity = async (req,res)=>{
    try{
        const { id_community, user_name } = req.body;

        if(!id_community || !user_name){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        const result = await adminModel.deleteMemberFromCommunity(Number(id_community), user_name);

        if(result.count === 0){
            return res.status(404).json({message:"Membre non trouvé dans la communauté"});
        }

        res.json({
            message:"Membre retiré de la communauté",
            data:{id_community,user_name}
        });
    }
    catch(error){
        console.error("DELETE MEMBER COMMUNITY:", error);
        res.status(500).json({message:"Erreur serveur"});
    }
};

export const updateCommunity = async (req,res)=>{
    try{
        const { id_community, alias, new_info } = req.body;

        if(!id_community || !alias || new_info === undefined){
            return res.status(400).json({message:"Paramètres manquants"});
        }

        const result = await adminModel.updateCommunity(Number(id_community), alias, new_info);

        res.json({
            message:"Communauté mise à jour",
            data:{id_community,alias,new_info}
        });
    }
    catch(error){
        console.error("UPDATE COMMUNITY:", error);
        res.status(500).json({message:"Erreur serveur"});
    }
};

export async function getAdmins(req, res) {
    try {
        const admins = await adminModel.getAllAdmins();
        res.json(admins);
    } catch (error) {
        console.error("GET ADMINS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}


export async function getAdmin(req, res) {
    try {
        const id = parseInt(req.params.id);

        const admin = await adminModel.getAdminById(id);

        if (!admin)
            return res.status(404).json({ message: "Admin non trouvé" });

        res.json(admin);

    } catch (error) {
        console.error("GET ADMIN:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}