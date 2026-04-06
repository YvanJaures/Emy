import  {redis} from "../services/redis.js"
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
export function connecterPage(request,response,next){
    if(request.user){
        return next()
    }
    response.redirect('/')
}
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
export function deConnecterPage(request,response,next){
    if(!request.user){
        return next()
    }
    response.redirect('/')
}
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
export function connecterApi(request,response,next){
    if(request.user){
        return next()
    }
    response.status(401).json({message:"pas encore connecté"})
}
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
export function isAdminConnecterApi(request,response,next){
    if(request.user?.Admin?.id_admin){
        return next()
    }
    response.status(401).end()
}
/**
 * 
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
export function deConnecterApi(request,response,next){
    if(!request.user){
        return next()
    }
    response.status(401).json({message:"déjà connecté"})
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 * @param {Object} options 
 */
export function RateLimiting(options) {
  return async (req, res, next) => {
    const userId = req.user?.id || "invité";
    const ip = req.ip;
    const route = req.originalUrl;

    const key = `rate:${userId}:${ip}:${route}`;

   try {
    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, options.window);
    }

    if (count > options.max) {
      return res.status(429).json({
        message: "Limite de requêtes dépassée!",
      });
    }
    } catch (err) {
    console.warn("Redis down, skipping rate limit");
    return next(); 
    }

    next();
  };
}