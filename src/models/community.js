import { prisma } from '../prisma.js';
/**
 * retourne une communauté en fonction de son id
 * @param {*} id_community 
 * @returns community
 */
export async function getCommunityById(id_community){
    try{
        return await prisma.community.findUnique({
            where:{
                id_community:id_community
            },
            include:{
               Admin:true,
               Community_member:true,
               Tournament:true 
            }
        })
    }catch(e){
        console.error(e)
    }
}
/**
 * recupere toutes les communautés
 * @returns communities
 */
export async function getCommunities(){
    try{
        return await prisma.community.findMany({
            include:{
               Admin:true,
               Community_member:true,
               Tournament:true 
            }
        })
    }catch(e){
        console.error(e)
    }
}