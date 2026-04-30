'use client'
import TourViewList from "@/components/molecules/TourViewList";
import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import PublicTourList from "@/components/organisms/PublicTourList";
import { getPublicTournaments } from "@/fetchs/global";
import { TournamentDTO } from "@/hooks/Type_DTO";
import LoadTourRow from "@/Loading/LoadTourRow";
import { useEffect, useState } from "react";

export default function Page(){
    const [tournois,setTournois]=useState<TournamentDTO[]|[]>([])
    const [loading,setLoading]=useState(true)
    const [searched,setSearched]=useState('')
    useEffect(()=>{
        (async()=>{setTournois(await getPublicTournaments()?? []);setLoading(false)})()
    },[])
    return(
        <>
            <NavBar _searched={(res)=>setSearched(res)}/>
                <h2 className="text-2xl font-bold text-start p-2">Tournois de golf publique</h2>
                <PublicTourList 
                    tournaments={tournois} 
                    search={searched} 
                    loading={loading}
                />
            <Footer/>
        </>
    )
}