import express from 'express'
import * as adminController from '../controllers/adminController.js'
import { verifyAdmin } from '../middlewares/adminAuth.js'

const routerAdmin = express.Router()

//Routes
//Gestion des membres (équipes)
routerAdmin.post('/member', verifyAdmin, adminController.addMemberToTeam)        //ok   
routerAdmin.delete('/member', verifyAdmin, adminController.deleteMemberFromTeam) //ok

//Gestion des tournois
routerAdmin.post('/tour', verifyAdmin, adminController.createTour)               //ok
routerAdmin.patch('/tour', verifyAdmin, adminController.updateTourTeams)         //en attente de reconfiguration...
routerAdmin.patch('/tour/status', verifyAdmin, adminController.updateTourStatus) //ok
routerAdmin.delete('/team', verifyAdmin, adminController.deleteTeamFromTour)     //ok
routerAdmin.delete('/tour', verifyAdmin, adminController.deleteTour);  

//Gestion des prix
routerAdmin.post('/prize', verifyAdmin, adminController.createPrize)      //ok       
routerAdmin.delete('/prize', verifyAdmin, adminController.deletePrize)    //ok       
routerAdmin.patch('/prize', verifyAdmin, adminController.updatePrize)     //ok       

//Gestion des administrateurs
routerAdmin.post('/admin', verifyAdmin, adminController.addAdmin)        //ok      
routerAdmin.delete('/admin', verifyAdmin, adminController.deleteAdmin)   //ok        

//Journal des actions admin
routerAdmin.post('/action', verifyAdmin, adminController.logAdminAction) //en attente de reconfiguration...

//Gestion membres tournoi
routerAdmin.delete('/member/tour', verifyAdmin, adminController.deleteMemberFromTour); //ok

//Gestion membres communauté
routerAdmin.delete('/member/community', verifyAdmin, adminController.deleteMemberFromCommunity); //ok

//Mise à jour communauté
routerAdmin.patch('/community/update', verifyAdmin, adminController.updateCommunity); //ok

//Gestions admins
routerAdmin.get('/admins', verifyAdmin, adminController.getAdmins);      //ok
routerAdmin.get('/admin/:id', verifyAdmin, adminController.getAdmin);    //ok  si tu test avec thunder client ---> doit ajouter le id a la fin. 
                                                                    // Exemple : http://localhost:3000/api/admin/admin/1   ---> 1 ici est l'id du admin


export default routerAdmin;