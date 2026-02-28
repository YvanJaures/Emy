import * as adminModel from '../models/admin.js';
import { prisma } from "../prisma.js";


//**A re-tester pour la relation avec "teams" */
export const updateTourTeams = async (req, res) => {
    try {
        const { id_tour, id_community, teams } = req.body;

        if (!id_tour || !id_community || teams === undefined) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.updateTourTeams(
            Number(id_tour),
            Number(id_community),
            Number(teams)
        );

        res.json({
            message: "Nombre d'équipes mis à jour"
        });

    } catch (error) {
        console.error("UPDATE TOUR TEAMS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

//Tester et fonctionne
export const updateTourStatus = async (req, res) => {
    try {
        const { id_tour, id_community, status } = req.body;

        if (!id_tour || !id_community || status === undefined) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.updateTourStatus(
            Number(id_tour),
            Number(id_community),
            Number(status)
        );

        res.status(200).json({
            message: "Statut du tournoi mis à jour"
        });

    } catch (error) {
        console.error("UPDATE TOUR STATUS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const deleteTeamFromTour = async (req, res) => {
    try {
        const { id_team, id_tour } = req.body;

        if (!id_team || !id_tour) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.deleteTeamFromTour(
            Number(id_team),
            Number(id_tour)
        );

        res.status(200).json({
            message: "Équipe retirée du tournoi"
        });

    } catch (error) {
        console.error("DELETE TEAM FROM TOUR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const addAdmin = async (req, res) => {
    try {
        const { user_name, id_community } = req.body;

        if (!user_name || !id_community) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.addAdmin(
            user_name,
            Number(id_community)
        );

        res.status(201).json({
            message: "Administrateur ajouté"
        });

    } catch (error) {
        console.error("ADD ADMIN:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const { id_admin, user_name, id_community } = req.body;

        if (!id_admin || !user_name || !id_community) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.deleteAdmin(
            Number(id_admin),
            user_name,
            Number(id_community)
        );

        res.status(200).json({
            message: "Administrateur supprimé"
        });

    } catch (error) {
        console.error("DELETE ADMIN:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


export const addMemberToTeam = async (req, res) => {
    try {
        const { id_team, user_name } = req.body;

        if (!id_team || !user_name) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.addMemberToTeam(
            Number(id_team),
            user_name
        );

        res.status(201).json({
            message: "Membre ajouté à l'équipe"
        });

    } catch (error) {
        console.error("ADD MEMBER TO TEAM:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};


export const deleteMemberFromTeam = async (req, res) => {
    try {
        const { id_team, user_name } = req.body;

        if (!id_team || !user_name) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.deleteMemberFromTeam(
            Number(id_team),
            user_name
        );

        res.status(200).json({
            message: "Membre retiré de l'équipe"
        });

    } catch (error) {
        console.error("DELETE MEMBER FROM TEAM:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const createTour = async (req, res) => {
    try {
        const {
            location,
            start_date,
            end_date,
            status,
            avatar,
            id_admin,
            id_community
        } = req.body;

        if (!location || !start_date || !end_date || !id_admin || !id_community) {
            return res.status(400).json({
                message: "Paramètres manquants"
            });
        }

        await adminModel.createTour(
            location,
            start_date,
            end_date,
            Number(status),
            avatar,
            Number(id_admin),
            Number(id_community)
        );

        res.status(201).json({
            message: "Tournoi créé"
        });

    } catch (error) {
        console.error("CREATE TOUR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const createPrize = async (req, res) => {
    try {
        const {
            name,
            spots,
            group_spot,
            id_tour,
            id_type,
            id_admin,
            number
        } = req.body;

        if(!name || spots == null || group_spot == null || !id_tour){
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.createPrize(
            name,
            Number(spots),
            Number(group_spot),
            Number(id_tour),
            Number(id_type),
            Number(id_admin)
        );

        res.status(200).json({ message: "Prix créé" });

    } catch (error) {
        console.error("CREATE PRIZE:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const deletePrize = async (req, res) => {
    try {
        const { id_prize, id_tour } = req.body;

        if (!id_prize || !id_tour) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.deletePrize(
            Number(id_prize),
            Number(id_tour)
        );

        res.status(200).json({
            message: "Prix supprimé"
        });

    } catch (error) {
        console.error("DELETE PRIZE:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const updatePrize = async (req, res) => {
    try {
        const { id_prize, id_tour, spots } = req.body;

        if (!id_prize || !id_tour || spots == null) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.updatePrize(
            Number(id_prize),
            Number(id_tour),
            Number(spots)
        );

        res.status(200).json({ message: "Prix mis à jour" });

    } catch (error) {
        console.error("UPDATE PRIZE:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

//************* */
export const logAdminAction = async (req, res) => {
    try {
        const { id_admin, details } = req.body;

        if (!id_admin || !details) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        await adminModel.logAdminAction(
            Number(id_admin),
            details
        );

        res.status(201).json({
            message: "Action enregistrée"
        });

    } catch (error) {
        console.error("LOG ADMIN ACTION:", error);
        res.status(500).json({ message: "Erreur serveur" });
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

        res.status(200).json({
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

        res.status(200).json({
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

        res.status(200).json({
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

        res.status(200).json(admins);

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

        res.status(201).json(admin);

    } catch (error) {
        console.error("GET ADMIN:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}