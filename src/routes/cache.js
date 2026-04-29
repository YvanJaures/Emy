import express from 'express'
import { getLocationCache, setLocationCache } from '../controllers/cacheController.js'

const routerCache = express.Router()

// Route pour récupérer les données mises en cache
routerCache.get('/cache', getLocationCache);

// Route pour mettre à jour les données mises en cache
routerCache.post('/cache', setLocationCache);

export default routerCache;