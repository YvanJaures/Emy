import express from 'express'
import * as globalController from '../controllers/globalController.js'
import { sendMail } from '../controllers/sendMailController.js'
import {deConnecterApi,connecterApi} from '../middlewares/auth.js'
import tournamentRoutes from './tournaments.js'
import adminRoutes from './admin.js'
import {motDePasseValide,courrielValide} from '../middlewares/validation.js'

const router=express.Router()


// Routes GLOBAL
// connexion, deconnexion
router.get('/stream',globalController.stream)
router.post('/connexion',deConnecterApi,globalController.connexion)
router.post('/deconnexion',connecterApi,globalController.deconnexion)
//router.get('/',globalController)
router.get('/user',globalController.getUser)
router.get('/members',globalController.getMembersC)
router.get('/member/email',globalController.getMemberByEmailC)
router.get('/members/community',globalController.getMembersByCommunityC)
router.get('/member/user_name',globalController.getMemberByNameC)
router.get("/member/my-teams", globalController.getMyTeamsC);
router.get('/members/names',globalController.getMembersUserNamesC)
router.get("/member/team/details", connecterApi, globalController.getTeamDetailsC);  // Afficher les details d une equipe
router.get("/member/team/last", globalController.getLastTeamC);  // Afficher la dernière équipe
router.get("/tour&prizes/details", globalController.getTourAndPrizesC);
router.get("/member/registration/fees", connecterApi, globalController.getRegistrationFeesC); // Recuperer le prix d inscription d un tournoi
router.get("/member/my-tournaments", connecterApi, globalController.getMyTournamentsC);




//router.post('/',globalController)
router.post('/member/add',motDePasseValide,courrielValide,globalController.addMemberC)
router.post('/member/team',connecterApi,globalController.addTeamC)   // Pour creer l'equipe sans recuperer l'id
router.post('/member/teams',connecterApi,globalController.addTeamsC)  // Pour creer une equipe et recuperer so id
router.post('/member/team/add',connecterApi,globalController.addTeamMemberWaitC)
router.post('/member/pay',connecterApi,globalController.payC)
router.post('/member/community/join',connecterApi,globalController.addCommunityMemberC)
router.post('/member/tour/join',connecterApi,globalController.addPlayerC)
router.post('/member/tournament/registration',connecterApi,globalController.registrationPlayerC)
router.post('/sendMail',sendMail)

//router.patch('/',globalController)
router.patch('/member/update',connecterApi,globalController.updateMemberC)
//router.patch('/member/team/update',connecterApi,globalController.addTeamMemberC) // Cette route ajoute plutot un membre
router.patch("/member/team/update", connecterApi, globalController.updateTeamC);
router.patch('/member/password',connecterApi,motDePasseValide,globalController.updatePasswordMemberC)
router.patch("/member/team/confirm", connecterApi, globalController.addTeamMemberC);

//Routes ADMIN ET TOURNAMENTS
router.use('/admin',connecterApi,adminRoutes)

// ne pas supprimer
export default router;