import { prisma } from '../prisma.js';
/**
 * Récupère tous les sponsors de la base de données
 *
 * @returns {Promise<Array>} Liste de tous les sponsors avec leurs relations Member et prize_sponsor
 */
export async function getSponsors(){
    return await prisma.sponsor.findMany({
        include:{
            Prize_sponsor:true,
            Member:{
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
                    }
            }
        }
    })
}

/**
 * Récupère un sponsor par son nom d'utilisateur
 *
 * @param {string} user_name - Le nom d'utilisateur du sponsor
 * @returns {Promise<Object|null>} Le sponsor trouvé avec ses relations ou null si non trouvé
 */
export async function getSponsorByUserName(user_name){
    return await prisma.sponsor.findUnique({
        where:{
            user_name:user_name
        },
        include:{
            Prize_sponsor:true,
            Member:{
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
                    }
            }
        }
    })
}

/**
 * Ajoute un nouveau sponsor dans la base de données
 *
 * @param {Object} sponsorData - Les données du sponsor à créer
 * @returns {Promise<Object>} Le sponsor créé
 */
export async function addSponsor(sponsorData){
    return await prisma.sponsor.create({
        data:{
            user_name:sponsorData.user_name,
            company_name:sponsorData.company_name,
            title:sponsorData.title
        }
    })
}

/**
 * Supprime un sponsor de la base de données
 *
 * @param {string} user_name - Le nom d'utilisateur du sponsor à supprimer
 * @returns {Promise<Object>} Le sponsor supprimé
 */
export async function deleteSponsor(user_name){
    return await prisma.sponsor.delete({
        where:{
            user_name:user_name
        }
    })
}
export async function addPrizeSponsor(id_prize, user_name){
    try{
        return await prisma.prize_sponsor.create({
        data:{
            id_prize:id_prize,
            user_name:user_name
        }
    });
    }catch(error){
        console.error("Erreur lors de l'ajout du sponsor au prix :", error);
    }
}