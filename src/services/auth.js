import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy } from 'passport-local'
import {getMemberByEmail, getMemberByName, getMemberPassword } from '../models/global.js'

const config={
    usernameField:'email',
    passwordField:'password'
}

passport.use(new Strategy(config,async(email,password,done)=>{
    try{
        let client=await getMemberByEmail(email)
        if(!client){
            client= await getMemberByName(email)
            if(!client){
                return done(null,false,{erreur:'mauvais_email'})
            }
        }
        const passwordM=await getMemberPassword(client.user_name)
        const valid=await bcrypt.compare(password,passwordM.password)
        if(!valid){
            return done(null,false,{erreur:'mauvais_mot_passe'})
        }
       /* client={
             id_member        :client.id_member,
             user_name        :client.user_name,
             name             :client.name,
             surname          :client.surname,
             address          :client.address,
             birth_date       :client.birth_date,
             country          :client.country,
             email            :client.email,
             phone            :client.phone,
             avatar           :client.avatar,
             Admin            :client.Admin,
            Community_member  :client.Community_member,
            Employee         :client.Employee,
            Player           :client.Player,
            Sponsor          :client.Sponsor,
            Team             :client.Team,
            Team_member      :client.Team_member
        }*/
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