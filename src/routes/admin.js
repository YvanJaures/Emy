import express from 'express'
import * as adminController from '../controllers/adminController.js'
import { verifyAdmin } from '../middlewares/adminAuth.js'
import {isAdminConnecterApi} from '../middlewares/auth.js'

const routerAdmin = express.Router()

//Routes
//Gestion des membres (équipes)
routerAdmin.post('/member', verifyAdmin,isAdminConnecterApi, adminController.addMemberToTeam)        //ok   
routerAdmin.delete('/member', verifyAdmin,isAdminConnecterApi, adminController.deleteMemberFromTeam) //ok

//Gestion des tournois
routerAdmin.get('/tour/teams', verifyAdmin,isAdminConnecterApi, adminController.getTourTeams) // afficher liste d equipe par tournoi
routerAdmin.get("/tour/:id_tour/teams", verifyAdmin, isAdminConnecterApi, adminController.getTeamsByTour);  // afficher le detail des equipes
routerAdmin.post('/tour', verifyAdmin,isAdminConnecterApi, adminController.createTour)               //ok
routerAdmin.post('/tour&prizes', verifyAdmin,isAdminConnecterApi, adminController.createTourWithPrizes)               //ok
routerAdmin.patch('/tour', verifyAdmin,isAdminConnecterApi, adminController.updateTourTeams)         //en attente de reconfiguration...
routerAdmin.patch('/tour/status', verifyAdmin,isAdminConnecterApi, adminController.updateTourStatus) //ok
//routerAdmin.patch("/team", verifyAdmin, isAdminConnecterApi, adminController.patchTeam);
routerAdmin.delete('/team', verifyAdmin,isAdminConnecterApi, adminController.deleteTeamFromTour)     //ok
routerAdmin.delete('/tour', verifyAdmin, adminController.deleteTour);  

//Gestion des prix
routerAdmin.post('/prize', verifyAdmin,isAdminConnecterApi, adminController.createPrize)      //ok       
routerAdmin.delete('/prize', verifyAdmin,isAdminConnecterApi, adminController.deletePrize)    //ok       
routerAdmin.patch('/prize', verifyAdmin,isAdminConnecterApi, adminController.updatePrize)     //ok       

//Gestion des administrateurs
routerAdmin.post('/admin', verifyAdmin, adminController.addAdmin)        //ok      
routerAdmin.delete('/admin', verifyAdmin,isAdminConnecterApi, adminController.deleteAdmin)   //ok        

//Journal des actions admin
routerAdmin.post('/action', verifyAdmin,isAdminConnecterApi, adminController.logAdminAction) //en attente de reconfiguration...

//Gestion membres tournoi
routerAdmin.delete('/member/tour', verifyAdmin,isAdminConnecterApi, adminController.deleteMemberFromTour); //ok

//Gestion membres communauté
routerAdmin.delete('/member/community', verifyAdmin,isAdminConnecterApi, adminController.deleteMemberFromCommunity); //ok

//Mise à jour communauté
routerAdmin.patch('/community/update', verifyAdmin,isAdminConnecterApi, adminController.updateCommunity); //ok

//Gestions admins
routerAdmin.get('/admins', verifyAdmin,isAdminConnecterApi, adminController.getAdmins);      //ok
routerAdmin.get('/admin/:id', verifyAdmin,isAdminConnecterApi, adminController.getAdmin);    //ok  si tu test avec thunder client ---> doit ajouter le id a la fin. 
                                                                    // Exemple : http://localhost:3000/api/admin/admin/1   ---> 1 ici est l'id du admin


export default routerAdmin;