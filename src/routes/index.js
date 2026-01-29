import express from 'express'
const router = express.Router();

// Importation des différentes routes
import testRoutes from './test.js'
// Définition des chemins
router.use('/test',testRoutes)

export default router;