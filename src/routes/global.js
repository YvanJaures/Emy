import express from 'express'
import * as globalController from '../controllers/globalController.js'
import { sendMail } from '../controllers/sendMailController.js'
import {deConnecterApi,connecterApi} from '../middlewares/auth.js'
import tournamentRoutes from './tournaments.js'
import adminRoutes from './admin.js'

const router=express.Router()


// Routes GLOBAL
// connexion, deconnexion
router.post('/connexion',deConnecterApi,globalController.connexion)
router.post('/deconnexion',connecterApi,globalController.deconnexion)
//router.get('/',globalController)
router.get('/user',globalController.getUser)
router.get('/members',globalController.getMembersC)
router.get('/member/email',globalController.getMemberByEmailC)
router.get('/member/user_name',globalController.getMemberByNameC)
router.get('/members/names',globalController.getMembersUserNamesC)

//router.post('/',globalController)
router.post('/member/add',globalController.addMemberC)
router.post('/member/team',globalController.addTeamC)
router.post('/member/team/add',globalController.addTeamMemberWaitC)
router.post('/member/pay',globalController.payC)
router.post('/member/community/join',globalController.addCommunityMemberC)
router.post('/member/tour/join',globalController.addPlayerC)
router.post('/sendMail',sendMail)

//router.patch('/',globalController)
router.patch('/member/update',globalController.updateMemberC)
router.patch('/member/team/update',globalController.addTeamMemberC)
router.patch('/member/password',globalController.updatePasswordMemberC)

//Routes ADMIN ET TOURNAMENTS
router.use('/admin', adminRoutes)
router.use('/', tournamentRoutes)
// ne pas supprimer
export default router;