import {getCommunityById,getCommunities} from '../models/community.js'
export const getCommunityByIdC=async(req,res)=>{
    try{
        const {id_community}=req.body
        const community=await getCommunityById(id_community)
        res.status(200).json(community)
    }catch(e){
        console.error(e)
    }
}
export const getCommunitiesC=async(req,res)=>{
    try{
        const communities=await getCommunities()
        if(communities) res.status(200).json(communities)
        else throw new Error ({message:'une erreur s est produite'})
    }catch(e){
        res.status(500).json({msg:"une erreur est survenu"})
        console.error(e)
    }
}