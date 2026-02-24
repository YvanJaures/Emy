import express from 'express'
import * as adminController from '../controllers/adminController.js'
import { verifyAdmin } from '../middlewares/adminAuth.js'

const router = express.Router()

//Routes
//Gestion des membres (équipes)
router.post('/member', verifyAdmin, adminController.addMemberToTeam)        
router.delete('/member', verifyAdmin, adminController.deleteMemberFromTeam) 

//Gestion des tournois
router.post('/tour', verifyAdmin, adminController.createTour)               
router.patch('/tour', verifyAdmin, adminController.updateTourTeams)         
router.patch('/tour/status', verifyAdmin, adminController.updateTourStatus) 
router.delete('/team', verifyAdmin, adminController.deleteTeamFromTour)     

//Gestion des prix
router.post('/prize', verifyAdmin, adminController.createPrize)             
router.delete('/prize', verifyAdmin, adminController.deletePrize)           
router.patch('/prize', verifyAdmin, adminController.updatePrize)            

//Gestion des administrateurs
router.post('/admin', verifyAdmin, adminController.addAdmin)              
router.delete('/admin', verifyAdmin, adminController.deleteAdmin)           

//Journal des actions admin
router.post('/action', verifyAdmin, adminController.logAdminAction)

export default router;