import express from "express";
import * as tournamentController from "../controllers/tournamentsController.js";
import { verifyAdmin } from "../middlewares/adminAuth.js";

const router = express.Router();

// GET tous les tournois
router.get("/tournaments", tournamentController.getTournaments);

// GET tournois par admin
router.get("/tournaments/admin/:id", verifyAdmin, tournamentController.getTournamentsByAdmin);

export default router;