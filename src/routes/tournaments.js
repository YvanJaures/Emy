import express from "express";
import * as tournamentController from "../controllers/tournamentsController.js";
import { verifyAdmin } from "../middlewares/adminAuth.js";

const routerTournament = express.Router();

// GET tous les tournois
routerTournament.get("/tournaments", tournamentController.getTournaments);
routerTournament.get("/tournament", tournamentController.getTournamentsByCommunity);


export default routerTournament;