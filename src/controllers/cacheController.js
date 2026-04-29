import { GetRedisCache,SetRedisLocationCache } from "../services/redis.js";

export const getLocationCache=async (req,res)=>{
    try{
        const cache=await GetRedisCache(req.query.key)
        res.status(200).json(cache)
    }catch(err){
        res.status(500).json({ error: "Erreur lors de la récupération du cache" });
    }
}
export const setLocationCache=async (req,res)=>{
    try{
        await SetRedisLocationCache(req.body.key,req.body.value)
        res.status(200).json({ message: "Cache local mis à jour" });
    }catch(err){
        res.status(500).json({ error: "Erreur lors de la mise à jour du cache" });
    }
}