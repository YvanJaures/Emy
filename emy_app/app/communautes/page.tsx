"use client"
import CommunityList from "@/components/organisms/CommunityList";
import LoadingAnimation from '@/components/organisms/LoadingAnimation'
import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import { getCommunities } from "@/fetchs/global";
import { CommunityDTO } from "@/hooks/Type_DTO";
import { useState,useEffect } from "react";
import {useConnexion} from '@/hooks/useAuth'
import ScrollToHash from "@/components/molecules/ScrollToHash";

export default function Communautes(){
    const [communities,setCommunities]=useState<CommunityDTO[]>([])
    const [isMember,setIsMember]=useState(true)
    const [_loading,setLoading]=useState(true)
    const [onError,setOnError]=useState(false)
    const {member,loading}=useConnexion()
    const [mounted,setMounted]=useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    useEffect(()=>{
        (async()=>{
            const livre=[]
            try{
                const communities=await getCommunities()
                setCommunities(communities)
                setLoading(false)
            }catch(error){
                alert(error)
                console.error(error)
                setOnError(true)
            }

        })()
    },[member])
    if(_loading && loading && mounted) return <LoadingAnimation/>
    return(
        <>
        <NavBar/>
            <ScrollToHash/>
            <CommunityList 
                communities={communities} 
                member={member}
            />
        <Footer/>
        </>
    )
}