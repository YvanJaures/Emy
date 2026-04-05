import { prisma } from "../prisma.js";
import { GetRedisCache, SetRedisCache } from "../services/redis.js";
/**
 * retourne une communauté en fonction de son id
 * @param {*} id_community
 * @returns community
 */
export async function getCommunityById(id_community) {
  try {
    const res = await GetRedisCache("community");
    if (res) return res;
    const community = await prisma.community.findUnique({
      where: {
        id_community: id_community,
      },
      include: {
        Admin: true,
        Community_member: {
          include: {
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
                Admin: true,
              },
            },
          },
        },
        Tournament: true,
      },
    });
    await SetRedisCache("community", community);
    return community;
  } catch (e) {
    console.error(e);
  }
}
/**
 * recupere toutes les communautés
 * @returns communities
 */
export async function getCommunities() {
  try {
    const res = await GetRedisCache("communities");
    if (res) return res;
    console.log("je récupére les communautés");
    const communities = await prisma.community.findMany({
      include: {
        Admin: true,
        Community_member: {
          include: {
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
                Admin: true,
              },
            },
          },
        },
        Tournament: true,
      },
    });
    await SetRedisCache("communities", communities);
    return communities;
  } catch (e) {
    console.error(e);
  }
}
