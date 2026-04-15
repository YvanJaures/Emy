import { prisma } from "../prisma.js";
import {
  SetRedisCache,
  GetRedisCache,
  DelRedisCache,
} from "../services/redis.js";

/**
 * Récupère tous les sponsors de la base de données
 *
 * @returns {Promise<Array>} Liste de tous les sponsors avec leurs relations Member et prize_sponsor
 */
export async function getSponsors() {
  try {
    const res = await GetRedisCache("sponsors");
    if (res) return res;
    const sponsors = await prisma.sponsor.findMany({
      include: {
        Prize_sponsor: true,
        Member: {
          select: {
            user_name: true,
            name: true,
            surname: true,
            address: true,
            birth_date: true,
            country: true,
            email: true,
            phone: true,
            avatar: true,
          },
        },
      },
    });
    await SetRedisCache("sponsors",sponsors);
    return sponsors;
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}

/**
 * Récupère un sponsor par son nom d'utilisateur
 *
 * @param {string} user_name - Le nom d'utilisateur du sponsor
 * @returns {Promise<Object|null>} Le sponsor trouvé avec ses relations ou null si non trouvé
 */
export async function getSponsorByUserName(user_name) {
  try {
    const res = await GetRedisCache("sponsor-" + user_name);
    if (res) return res;
    const sponsor = await prisma.sponsor.findUnique({
      where: {
        user_name: user_name,
      },
      include: {
        Prize_sponsor: true,
        Member: {
          select: {
            user_name: true,
            name: true,
            surname: true,
            address: true,
            birth_date: true,
            country: true,
            email: true,
            phone: true,
            avatar: true,
          },
        },
      },
    });
    await SetRedisCache("sponsor-" + user_name,sponsor);
    return sponsor;
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}

/**
 * Ajoute un nouveau sponsor dans la base de données
 *
 * @param {Object} sponsorData - Les données du sponsor à créer
 * @returns {Promise<Object>} Le sponsor créé
 */
export async function addSponsor(sponsorData) {
  try {
    await DelRedisCache("sponsors");
    await DelRedisCache("member-email-"+sponsorData.email);
    await DelRedisCache("member-username-"+sponsorData.user_name);
    return await prisma.sponsor.create({
      data: {
        user_name: sponsorData.user_name,
        company_name: sponsorData.company_name,
        title: sponsorData.title,
      },
    });
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}

/**
 * Supprime un sponsor de la base de données
 *
 * @param {string} user_name - Le nom d'utilisateur du sponsor à supprimer
 * @returns {Promise<Object>} Le sponsor supprimé
 */
export async function deleteSponsor(user_name) {
  try {
    await DelRedisCache("sponsor-" + user_name);
    return await prisma.sponsor.delete({
      where: {
        user_name: user_name,
      },
    });
  } catch (error) {
    console.log("Erreur serveur: " + error);
  }
}
export async function addPrizeSponsor(id_prize, user_name) {
  try {
    await DelRedisCache("sponsor-" + user_name);
    await DelRedisCache("tournaments");
    return await prisma.prize_sponsor.create({
      data: {
        id_prize: id_prize,
        user_name: user_name,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout du sponsor au prix :", error);
  }
}
