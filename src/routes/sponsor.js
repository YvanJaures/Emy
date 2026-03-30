import express from 'express';
import * as sponsorController from "../controllers/sponsorController.js";

/**
 * Routeur Express pour les endpoints liés aux sponsors
 */
const routerSponsor=express.Router();

// Routes pour la gestion des sponsors
/**
 * @route GET /sponsors/all
 * @description Récupère tous les sponsors
 * @access Public
 */
routerSponsor.get('/sponsors/all', sponsorController.getSponsorsC);

/**
 * @route GET /sponsor
 * @description Récupère un sponsor par son nom d'utilisateur
 * @access Public
 */
routerSponsor.get('/sponsor', sponsorController.getSponsorByUserNameC);

/**
 * @route POST /sponsor/add
 * @description Ajoute un nouveau sponsor
 * @access Public
 */
routerSponsor.post('/sponsor/add', sponsorController.addSponsorC);

/**
 * @route DELETE /sponsor/delete
 * @description Supprime un sponsor
 * @access Public
 */
routerSponsor.delete('/sponsor/delete', sponsorController.deleteSponsorC);

export default routerSponsor;