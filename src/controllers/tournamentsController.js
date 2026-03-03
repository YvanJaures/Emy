import * as tournamentModel from "../models/tournaments.js";

export const getTournaments = async (req, res) => {
    try {
        const tours = await tournamentModel.getAllTournaments();
        res.json(tours);
    } catch (error) {
        console.error("GET TOURNAMENTS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
export const getTournamentsByCommunity = async (req, res) => {
    try {
        const id_community = parseInt(req.params.id);

        if (!id_community) {
            return res.status(400).json({ message: "id_community requis" });
        }

        const tours = await adminModel.getTournamentsByCommunity(id_community);

        res.json(tours);
    } catch (error) {
        console.error("GET TOURNAMENTS BY COMMUNITY:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};