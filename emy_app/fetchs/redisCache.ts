export async function GetRedisCache(key: string) {
    // Implementation for getting cache from Redis
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/cache?key='+key,{
            credentials:"include"
        })
        if(res.ok){
            const data= await res.json()
            return data.value
        }
        return null
    }catch(error){
        console.log(error)
    }
}

export async function SetRedisCache(key: string, value: any) {
    // Implementation for setting cache in Redis
    try{
        const res=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/cache',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({key:key,value:value})
        })
        if(!res.ok){
            console.log("Failed to set cache")
        }
    }catch(error){
        console.log(error)
    }
}