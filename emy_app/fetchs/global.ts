import {CommunityDTO,MemberDTO, TournamentDTO} from '../hooks/Type_DTO'
export async function getUser(){
    const res=await fetch('/api/user',{
        credentials:"include"
    })
    if(res.ok){
        const user= await res.json()
        return user
    }
    return null

}
export async function fetchApi(payload:Object,route:string,method:string){
    try{
        const res=await fetch(route,{
            method:method,
            headers:{'Content-Type':'application/json'},
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
    const res=await fetch('/api/member/user_name?user_name='+user_name,{
        credentials:"include"
    })
    if(res.ok){
        const member= await res.json()
        return member as MemberDTO
    }
    return null   
}
export async function getMembers(){
    const res=await fetch('/api/members',{
        credentials:"include"
    })
    if(res.ok){
        const members= await res.json()
        return members
    }
    return null
}
export async function getCommunityMembers(id_community:number){
    const res=await fetch('/api/members/community?id_community='+id_community,{
        credentials:"include"
    })
    if(res.ok){
        const members= await res.json()
        return members
    }   
    return []
}
export async function getPublicTournaments(){
    const res=await fetch('/api/tournaments',{
        credentials:"include"
    })
    if(!res.ok) return []
    const tours:TournamentDTO[]=(await res.json())
    return tours.filter((t)=>!t.Community.privacy)
}
export async function getCommunityTournaments(id_tour:number){
    const res=await fetch('/api/tournament?id_community='+id_tour,{
        credentials:"include"
    })
    if(res.ok){
        const tournaments= await res.json()
        return tournaments
    }   
    return []
}
export async function getCommunities(){
    const res=await fetch('/api/communities',{
        credentials:"include"
    })
    if(res.ok){
        const communities= await res.json()
        return communities
    }
    return null
}
export async function getCommunityById(id_community:number){
    const res=await fetch('/api/community'+id_community,{
        credentials:"include"
    })
    if(res.ok){
        const community= await res.json()
        return community as CommunityDTO
    }
    return null  
}
/**
 * ajoute un membre à une communauté
 */
export async function addCommunityMember(payload:Object){
    try{
        const res=await fetch('/api/member/community/join',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
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
        const res=await fetch('/api/member/team/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
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
        const res = await fetch('/api/member/community', {
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
    const response=await fetch('/api/deconnexion',{
        method:'POST'
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
    const res = await fetch('/api/member/team/details', {
        credentials: "include"
    });
    if (res.ok) {
        return await res.json();
    }

    return [];
}
export async function getSponsors(){
    try{
        const res=await fetch('/api/sponsors/all')
        if (res.ok) {
            return await res.json();
        }
        return [];
    }catch(error){

    }
}
export async function getSponsorByUserName(user_name:string){
    try{
        const res=await fetch('/api/sponsor?user_name='+user_name)
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
        const res=await fetch('/api/sponsor/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
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
        const res=await fetch('/api/sponsor/delete?user_name='+user_name,{  
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
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
            const response = await fetch(`/api/member/team`, {
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
/**
 * à copier et modifier en fonction du besoir
 */
export async function base(payload:Object){
    try{
        const res=await fetch('/api/member/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        })
        if(!res.ok){
            throw new Error('impossible de rejoindre cette communaute')
        }
    }catch(error){

    }
}
