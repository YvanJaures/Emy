import express from 'express'
import * as communityController from '../controllers/communityController.js'

const routerCommunity = express.Router()

// Gets
routerCommunity.get('/communities',communityController.getCommunitiesC)
routerCommunity.get('/community/:id',communityController.getCommunityByIdC)

export default routerCommunity