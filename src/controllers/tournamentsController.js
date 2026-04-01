import * as tournamentModel from "../models/tournaments.js";

export const getTournaments = async (req, res) => {
    try {
        const tours = await tournamentModel.getAllTournaments();
        res.status(200).json(tours);
    } catch (error) {
        console.error("GET TOURNAMENTS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
export const getTournamentsByCommunity = async (req, res) => {
    try {
        // changement de params à query
        const id_community = Number.parseInt(req.query.id_community);

        if (!id_community) {
            return res.status(400).json({ message: "id_community requis" });
        }

        const tours = await tournamentModel.getTournamentsByCommunity(id_community);

        res.status(200).json(tours);
    } catch (error) {
        console.error("GET TOURNAMENTS BY COMMUNITY:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};