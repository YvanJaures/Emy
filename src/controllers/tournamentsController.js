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
