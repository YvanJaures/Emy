'use client'
import TourViewList from "@/components/molecules/TourViewList";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/NavBar";
import { getPublicTournaments } from "@/fetchs/global";
import { TournamentDTO } from "@/hooks/Type_DTO";
import { useEffect, useState } from "react";

export default function Page(){
    const [tournois,setTournois]=useState<TournamentDTO[]|[]>([])
    useEffect(()=>{
        (async()=>{setTournois(await getPublicTournaments())})()
    },[])
    return(
        <>
            <Navbar/>
                <h2 className="text-2xl p-2 w-full ">Tournois publique</h2>
                <TourViewList
                    tournaments={tournois}
                    className='block mb-15 top-0'/>
            <Footer/>
        </>
    )
}