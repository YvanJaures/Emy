import express from 'express'
// changer pour la bonne importation
import * as testController from '../controllers/testController.js'

const router=express.Router()

// routes
router.get('/',testController.getAll)

// ne pas supprimer
export default router;
