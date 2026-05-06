import { Location, Position, geocodeReverse } from '@/hooks/Type_DTO'
import {CommunityDTO,MemberDTO, TournamentDTO} from '../hooks/Type_DTO'
export async function getUser(){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/user',{
            credentials:"include"
        })
        if(res.ok){
            const user= await res.json()
            return user
        }
        return null
    }catch(e){
        console.log(e)
    }

}
export async function fetchApi(payload:Object,route:string,method:string){
    try{
        const res=await fetch(route,{
            method:method,
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify(payload)
        })
        if(!res.ok){
            return false
        }
        return true
    }catch(error){
        console.error(error)
    }

}
export async function getMemberByName(user_name:string){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/user_name?user_name='+user_name,{
            credentials:"include"
        })
        if(res.ok){
            const member= await res.json()
            return member as MemberDTO
        }
        return null   
    }catch(e){
        console.log(e)
    }
}
export async function getMembers(){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/members',{
            credentials:"include"
        })
        if(res.ok){
            const members= await res.json()
            return members
        }
        return null
    }catch(e){
        console.log(e)
    }
}
export async function getCommunityMembers(id_community:number){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/members/community?id_community='+id_community,{
            credentials:"include"
        })
        if(res.ok){
            const members= await res.json()
            return members
        }   
        return []
    }catch(e){
        console.log(e)
    }
}
export async function getPublicTournaments(){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/tournaments',{
            credentials:"include"
        })
        if(!res.ok) return []
        const tours:TournamentDTO[]=(await res.json())
        return tours.filter((t)=>!t.Community.privacy)
    }catch(e){
        console.log(e)
    }
}
export async function getCommunityTournaments(id_tour:number){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/tournament?id_community='+id_tour,{
            credentials:"include"
        })
        if(res.ok){
            const tournaments= await res.json()
            return tournaments
        }   
        return []
    }catch(e){
        console.log(e)
    }
}
export async function getCommunities(){
    try{

        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/communities',{
            credentials:"include"
        })
        if(res.ok){
            const communities= await res.json()
            return communities
        }
        return null
    }catch(e){
        console.log(e)
    }
}
export async function getCommunityById(id_community:number){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/community'+id_community,{
            credentials:"include"
        })
        if(res.ok){
            const community= await res.json()
            return community as CommunityDTO
        }
        return null  
    }catch(e){
        console.log(e)
    }
}
/**
 * ajoute un membre à une communauté
 */
export async function addCommunityMember(payload:Object){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/community/join',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify(payload)
        })
        if(!res.ok){
            return false
        }
        return true
    }catch(error){
        return false
    }
}
export async function addTeamMemberWait(payload:Object){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/team/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify(payload)
        })
        if(!res.ok){
            return false
        }
        return true
    }catch(error){
        return false
    }
}
export async function deleteMemberCommunity(user_name:string,id_community:number){
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/community', {
            method: "DELETE",
            headers: { "Content-Type": "application/json","role":"admin"},
            credentials: "include",
            body: JSON.stringify({
                id_community: id_community,
                user_name: user_name
            })
        })
        if(res.ok){
            return true
        }
        return false
    }catch(error){
        //console.log(error)
        return false
    }
}
export async function deconnexion() {
    const response=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/deconnexion',{
        method:'POST',
        credentials:"include"
    })
    if(response.ok){
        location.replace('/')  
        return
    }
}
/**
 * Fonctione fetch qui permet d'aller chercher les membres d'un equipe
 * et de l'afficher.
 */
export async function getUserTeamsDetails() {
    try{

        const res = await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/team/details', {
            credentials: "include"
        });
        if (res.ok) {
            return await res.json();
        }
    
        return [];
    }catch(e){
        console.log(e)
    }
}
export async function getSponsors(){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/sponsors/all',{
            credentials: "include"
        })
        if (res.ok) {
            return await res.json();
        }
        return [];
    }catch(error){

    }
}
export async function getSponsorByUserName(user_name:string){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/sponsor?user_name='+user_name,{
            credentials: "include"
        })
        if (res.ok) {
            return await res.json();
        }
        return null;
    }catch(error){
        //console.log(error)
        return null
    }
}
export async function addSponsor(sponsorData:Object){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/sponsor/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify(sponsorData)
        })
        if(!res.ok){
            return false
        }
        return true
    }catch(error){
        //console.log(error)
        return false
    }
}
export async function deleteSponsor(user_name:string){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/sponsor/delete?user_name='+user_name,{  
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            credentials:"include"
        })
        if(!res.ok){
            return false
        }   
        return true
    }catch(error){
        //console.log(error)
        return false
    }   
}
export async function addTeamMany(payload:{name:string, id_tour:number, key_team:string, user_name:string, open:boolean}[]){
    let res:{index:number,status:boolean}[] =[]
    try{
        for(let i=0; i<payload.length; i++){
            const p = payload[i];
            const response = await fetch(process.env.NEXT_PUBLIC_API_BASE+`/api/member/team`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    name:p.name,
                    id_tour:p.id_tour,
                    key_team:p.key_team,
                    user_name: p.user_name,
                    open:p.open
                }),
            });
            if(!response.ok){
                res.push({index:i,status:false})
                throw new Error('impossible d\'ajouter l\'équipe')
            }
            res.push({index:i,status:true})

        }
        return res;
    }catch(error){
        for(let i=res.length; i<payload.length; i++){
            res.push({index:i,status:false})
        }
        return res;
    }
}
export async function geoCode(address:string){
    try{
        const params = new URLSearchParams({ address });
        const res=await fetch(process.env.NEXT_PUBLIC_API_GEO+'/api/geocode?'+params,{
            headers:{'access_key':`${process.env.NEXT_PUBLIC_ACCESS_KEY}`}
        })
        if(!res.ok){
            console.log('ERREUR lors de la récupération des coordonées :status: '+res.status)
            return
        }
        return await res.json()
    }catch(error){
        console.log("Une erreur s'est produite ici"+error)
    }
}
export async function autoComplete(q:string){
    try{
        const params = new URLSearchParams({ q });
        const res=await fetch(process.env.NEXT_PUBLIC_API_GEO+'/api/autocomplete?'+params,{
            headers:{'access_key':`${process.env.NEXT_PUBLIC_ACCESS_KEY}`}
        })
        if(!res.ok){
            console.log('ERREUR lors de la récupération des coordonées :status: '+ (await res.json()).error)
            return null
        }
        return await res.json()
    }catch(error){
        console.log("Une erreur s'est produite ici"+error)
        return null
    }
}
export async function geoCodeReverse(lat:number,lon:number){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_GEO+'/api/reverse?lat='+lat+'&lon='+lon,{
            headers:{'access_key':`${process.env.NEXT_PUBLIC_ACCESS_KEY}`}
        })
        if(!res.ok){
            console.log('ERREUR lors de la récupération des coordonées :status: '+res.status)
            return 
        }
        return await res.json()
    }catch(error){
        console.log("Une erreur s'est produite ici"+error)
    }
}
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }) as Promise<Position>;
    };
export const getMemberLocation = async () => {
    try {
    const position:Position = await getLocation();
    const position2:geocodeReverse=await geoCodeReverse(position.coords.latitude,position.coords.longitude)
    if(!position2) return null
    const myLoc:Location = {
        name: "Ma position",
        displayName:position2.displayName,
        address: position2.address,
        lat: position2.lat,
        lon: position2.lon,
        link: "",
        type: "myLocation"
    };
    return myLoc
    } catch (err) {
        console.log(err);
        return null
    }
}
/**
 * à copier et modifier en fonction du besoir
 */
export async function base(payload:Object){
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify(payload)
        })
        if(!res.ok){
            throw new Error('impossible de rejoindre cette communaute')
        }
    }catch(error){

    }
}
