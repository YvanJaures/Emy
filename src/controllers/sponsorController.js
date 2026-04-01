import {
  getSponsors,
  getSponsorByUserName,
  addSponsor,
  deleteSponsor,
  addPrizeSponsor
} from "../models/sponsor.js";

/**
 * Contrôleur pour récupérer tous les sponsors
 *
 * @param {Object} req - Objet de requête Express
 * @param {Object} res - Objet de réponse Express
 * @returns {Promise<void>} Réponse JSON avec la liste des sponsors ou une erreur
 */
export const getSponsorsC = async (req, res) => {
  try {
    const sponsors = await getSponsors();
    res.status(200).json(sponsors);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "Erreur lors de la récupération des commanditaires",
      });
  }
};

/**
 * Contrôleur pour récupérer un sponsor par son nom d'utilisateur
 *
 * @param {Object} req - Objet de requête Express (query: user_name)
 * @param {Object} res - Objet de réponse Express
 * @returns {Promise<void>} Réponse JSON avec le sponsor trouvé ou une erreur
 */
export const getSponsorByUserNameC = async (req, res) => {
  const { user_name } = req.query;
  try {
    const sponsor = await getSponsorByUserName(user_name);
    res.status(200).json(sponsor);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "Erreur lors de la récupération du commanditaire",
      });
  }
};

/**
 * Contrôleur pour ajouter un nouveau sponsor
 *
 * @param {Object} req - Objet de requête Express (body: données du sponsor)
 * @param {Object} res - Objet de réponse Express
 * @returns {Promise<void>} Réponse JSON avec le sponsor créé ou une erreur
 */
export const addSponsorC = async (req, res) => {
  const sponsorData = req.body;
  try {
    const sponsor = await addSponsor(sponsorData);
    res.status(201).json(sponsor);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "Erreur lors de l'ajout du commanditaire",
      });
  }
};

/**
 * Contrôleur pour supprimer un sponsor
 *
 * @param {Object} req - Objet de requête Express (query: user_name)
 * @param {Object} res - Objet de réponse Express
 * @returns {Promise<void>} Réponse JSON avec le sponsor supprimé ou une erreur
 */
export const deleteSponsorC = async (req, res) => {
  const { user_name } = req.query;
  try {
    const sponsor = await deleteSponsor(user_name);
    if (!sponsor) return res.status(404).json({ error: "Sponsor not found" });
    res.status(200).json(sponsor);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "Erreur lors de la suppression du commanditaire",
      });
  }
};
export const addPrizeSponsorC = async (req, res) => {
    const { id_prize, user_name } = req.body;
    if (!id_prize || !user_name) {
        return res.status(400).json({ error: "id_prize and user_name are required" });
    }
    try {
        const prizeSponsor = await addPrizeSponsor(Number.parseInt(id_prize), user_name);
        res.status(201).json(prizeSponsor);
    } catch (error) {
        res
            .status(500)
            .json({
                error: error.message,
                message: "Erreur lors de l'ajout du commanditaire au prix",
            });
    }
}

