import express from 'express'
import * as adminController from '../controllers/adminController.js'
import { verifyAdmin } from '../middlewares/adminAuth.js'


const router = express.Router()

//Routes
//Gestion des membres (équipes)
router.post('/member', verifyAdmin, adminController.addMemberToTeam)        //ok   
router.delete('/member', verifyAdmin, adminController.deleteMemberFromTeam) //ok

//Gestion des tournois
router.post('/tour', verifyAdmin, adminController.createTour)               //ok
router.patch('/tour', verifyAdmin, adminController.updateTourTeams)         //en attente de reconfiguration...
router.patch('/tour/status', verifyAdmin, adminController.updateTourStatus) //ok
router.delete('/team', verifyAdmin, adminController.deleteTeamFromTour)     //ok

//Gestion des prix
router.post('/prize', verifyAdmin, adminController.createPrize)      //ok       
router.delete('/prize', verifyAdmin, adminController.deletePrize)    //ok       
router.patch('/prize', verifyAdmin, adminController.updatePrize)     //ok       

//Gestion des administrateurs
router.post('/admin', verifyAdmin, adminController.addAdmin)        //ok      
router.delete('/admin', verifyAdmin, adminController.deleteAdmin)   //ok        

//Journal des actions admin
router.post('/action', verifyAdmin, adminController.logAdminAction) //en attente de reconfiguration...

//Gestion membres tournoi
router.delete('/member/tour', verifyAdmin, adminController.deleteMemberFromTour); //ok

//Gestion membres communauté
router.delete('/member/community', verifyAdmin, adminController.deleteMemberFromCommunity); //ok

//Mise à jour communauté
router.patch('/community/update', verifyAdmin, adminController.updateCommunity); //ok

//Gestions admins
router.get('/admins', verifyAdmin, adminController.getAdmins);      //ok
router.get('/admin/:id', verifyAdmin, adminController.getAdmin);    //ok  si tu test avec thunder client ---> doit ajouter le id a la fin. 
                                                                    // Exemple : http://localhost:3000/api/admin/admin/1   ---> 1 ici est l'id du admin
// GET tournois par admin
router.get("/tournaments/community/:id", verifyAdmin, adminController.getTournamentsByCommunity);


export default router;