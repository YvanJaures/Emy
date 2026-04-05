import { createClient } from "redis"

export let redis = null

try {
    redis = createClient({
        url: process.env.REDIS_URL
    })

    redis.on("error", (err) => console.error("Redis error:", err))

    await redis.connect()
} catch (err) {
    console.warn("Redis non disponible, cache désactivé.")
    redis = null
}

export async function GetRedisCache(recherche) {
    if (!redis) return null
    const cache = await redis.get(recherche)
    console.log('getting cache')
    if (cache) return JSON.parse(cache)
}

export async function SetRedisCache(recherche, data) {
    if (!redis) return
    console.log('setting cache')
    await redis.set(recherche, JSON.stringify(data), {
        EX: 60 // cache pour 1 minute
    })
}

export async function DelRedisCache(recherche) {
    if (!redis) return
    const keys = await redis.keys(recherche)
    if (keys.length > 0) {
        await redis.del(keys)
    }
}