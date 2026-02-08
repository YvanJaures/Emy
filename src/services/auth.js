import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy } from 'passport-local'
import {getMemberByEmail, getMemberByName } from '../models/global.js'

const config={
    usernameField:'email',
    passwordField:'password'
}

passport.use(new Strategy(config,async(email,password,done)=>{
    try{
        const client=await getMemberByEmail(email)
        if(!client){
            client= await getMemberByName(email)
            if(!client){
                return done(null,false,{erreur:'mauvais_email'})
            }
        }
        const valid=await bcrypt.compare(password,client.password)
        if(!valid){
            return done(null,false,{erreur:'mauvais_mot_passe'})
        }
        done(null,client)
    }catch(erreur){
        done(erreur)
    }

}))
passport.serializeUser((client,done)=>{
    done(null,client.user_name)
})
passport.deserializeUser(async(user_name,done)=>{
    try{
        const client =await getMemberByName(user_name)
        done(null,client)
    }catch(erreur){
        done(erreur)
    }
})