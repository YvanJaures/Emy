import { createClient } from "redis"

export let redis = null

export async function getRedis(){
    try {
        redis = createClient({
            url: process.env.REDIS_URL
        })

        redis.on("error", (err) => {
            console.warn("Redis non disponible, cache désactivé.")
        })

        await redis.connect()
        console.log("Redis connecté")
        return redis
    } catch (err) {
        console.warn("Redis non disponible, cache désactivé.")
        redis = null
        return null
    }
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
