import { addCommunityMember, addMember, addPlayer, addTeam, addTeamMember, addTeamMemberWait, getMemberByEmail, getMemberByName, getMembers, getMembersUserNames, updateMember, updatePasswordMember } from '../models/global.js';
import '../services/auth.js'
import passport from 'passport';
import 'dotenv/config'
// copier et adapter
/*
export const basefunction=async(request,response)=>{
    try{

    }catch(error){
        response.status(404).end()
    }
}*/
export const getUser=async(request,response)=>{
    const user=request.user
    if(!user){
        response.status(404).json({info:"no_user"})
        return
    }
    response.status(200).json(user)
}
export const getMemberByEmailC=async(request,response)=>{
    try{

        const member= await getMemberByEmail(request.query.email)
        response.status(200).json(member)
    }catch(error){
        response.status(404).end()
    }
}
export const getMemberByNameC=async(request,response)=>{
    try{

        const member= await getMemberByName(request.query.user_name)
        response.status(200).json(member)
    }catch(error){
        response.status(404).end()
    }
}
export const getMembersC=async(request,response)=>{
    try{
        const members=await getMembers()
        response.status(200).json(members)
    }catch(error){
        console.log(error)
        response.status(404).end()
    }
}
export const getMembersUserNamesC=async(request,response)=>{
    try{
        const userNames=await getMembersUserNames()
        response.status(200).json(userNames)
    }catch(error){
        response.status(404).end()
    }
}
export const addMemberC=async(request,response)=>{
    try{
        await addMember(request.body.user_name,
            request.body.name,
            request.body.surname,
            request.body.address,
            request.body.birth_date,
            request.body.country,
            request.body.email,
            request.body.avatar,
            request.body.password
        )
        response.status(201).end()
    }catch(error){
        console.log(error)
        response.status(404).end()
    }
}
export const updateMemberC=async(request,response)=>{
    try{
        await updateMember(request.body.user_name,
            request.body.alias,
            request.body.new_info)
        response.status(200).end()
    }catch(error){
        response.status(404).end()
    }
}
export const addTeamC=async(request,response)=>{
    try{
        await addTeam(request.body.name,
            request.body.id_tour,
            request.body.key_team
        )
        response.status(201).end()
    }catch(error){
        response.status(404).end()
    }
}
export const addTeamMemberWaitC=async(request,response)=>{
    try{
        await addTeamMemberWait(request.body.id_team,
            request.body.user_name
        )
        response.status(201).end()
    }catch(error){
        response.status(404).end()
    }
}
export const addTeamMemberC=async(request,response)=>{
    try{
        await addTeamMember(request.body.user_name)
        response.status(200).end()
    }catch(error){
        response.status(404).end()
    }
}
export const payC=async(request,response)=>{
    try{

    }catch(error){
        response.status(404).end()
    }
}
export const updatePasswordMemberC=async(request,response)=>{
    try{
        await updatePasswordMember(request.body.user_name,
            request.body.new_password
        )
        response.status(200).end()
    }catch(error){
        response.status(404).end()
    }
}
export const addCommunityMemberC=async(request,response)=>{
    try{
        await addCommunityMember(request.body.id_community,
            request.body.user_name,
            request.body.join_date)
        response.status(201).end()
    }catch(error){
        response.status(404).end()
    }
}
export const addPlayerC=async(request,response)=>{
    try{
        await addPlayer(request.body.id_tour,
            request.body.user_name
        )
    }catch(error){
        response.status(404).end()
    }
}


export const connexion=async(request, response, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) return next(error);
        if (!user) return response.status(401).json(info);
        request.logIn(user, (error) => {
            if (error) return next(error);
            response.sendStatus(200);
        });
    })(request, response, next);
};

export const deconnexion=async (request, response, next) => {
    request.logout((error) => {
        if (error) return next(error);
        response.status(200).end();
    });
};