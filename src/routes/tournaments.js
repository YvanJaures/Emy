import * as tournamentModel from "../models/tournaments.js";
import express from "express";

const router = express.Router();

export const getTournaments = async (req, res) => {
    try {
        const tours = await tournamentModel.getAllTournaments();
        res.json(tours);
    } catch (error) {
        console.error("GET TOURNAMENTS:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export const getTournamentsByAdmin = async (req, res) => {
    try {
        const id_admin = parseInt(req.params.id);

        const tours = await tournamentModel.getTournamentsByAdmin(id_admin);

        res.json(tours);
    } catch (error) {
        console.error("GET TOURNAMENT BY ADMIN:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

export default router;