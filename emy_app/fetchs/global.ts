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
export async function deconnexion() {
    const response=await fetch('/api/deconnexion',{
        method:'POST'
    })
    if(response.ok){
        alert('deconnecte')
        location.replace('/')  
        return
    }
    alert('pas deconnecte')
}