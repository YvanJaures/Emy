import {CommunityDTO,MemberDTO} from '../hooks/Type_DTO'
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
            throw new Error('impossible de rejoindre cette communaute')
        }
    }catch(error){

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
            throw new Error('ajout impossible')
        }
    }catch(error){

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
            console.log('suppression éffectué')
            return true
        }
        return false
    }catch(error){
        console.log(error)
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