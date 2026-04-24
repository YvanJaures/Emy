import { createClient } from "redis"

export const redis = getRedis()

async function getRedis(){
    try {
        const redis = createClient({
            url: process.env.REDIS_URL
        })

        redis.on("error", (err) => {//console.error("Redis error:", err)

            console.warn("Redis non disponible, cache désactivé.")
            return null 
        })

        return redis
    } catch (err) {
        console.warn("Redis non disponible, cache désactivé. Error")
        return null
    }
}
if(redis){
    await redis.connect()
}

export async function GetRedisCache(recherche) {
    if (!redis) return null
    console.log('getting cache')
    const cache = await redis.get(recherche)
    if (cache) return JSON.parse(cache)
}

export async function SetRedisCache(recherche, data) {
    if (!redis) return
    console.log('setting cache')
    await redis.set(recherche, JSON.stringify(data), {
        EX: 600 // cache pour 10 minutes
    })
}

export async function DelRedisCache(recherche) {
    if (!redis) return
    const keys = await redis.keys(recherche)
    if (keys.length > 0) {
        await redis.del(keys)
    }
}
