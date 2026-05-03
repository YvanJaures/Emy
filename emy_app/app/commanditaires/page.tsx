"use client"
import NavBar from "@/components/organisms/NavBar"
import Footer from "@/components/organisms/Footer"
import SponsorCard from "@/components/molecules/SponsorCard";
import { CiFilter } from "react-icons/ci";
import SponsorsList from "@/components/organisms/SponsorsList";
import { useEffect, useState } from "react";
import { getSponsors } from "@/fetchs/global";
import { SponsorDTO } from "@/hooks/Type_DTO";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import ScrollToHash from "@/components/molecules/ScrollToHash";
import LoadSponsorCard from "@/Loading/LoadSponsorCard";

/**
 * Page Commanditaires - Affiche la liste des sponsors/commanditaires
 *
 * Cette page affiche la liste complète des commanditaires de l'application
 * avec leurs informations. Elle utilise des données mockées pour la démonstration.
 * La page inclut la navigation, le pied de page et le composant SponsorsList.
 *
 * @returns Le composant de page rendu
 */
export default function Page(){
    const [sponsorsList,setSponsorsList]=useState<SponsorDTO[]>([]);
    const [loading,setLoading]=useState<boolean>(true)
    const [searched,setSearched]=useState('')
    useEffect(()=>{
        (async ()=>{
            try{
                const sponsors=await getSponsors();
                setSponsorsList(sponsors);
                setLoading(false);
            }catch(error){
                setLoading(false)
            }
        })();
        
    },[])
    return(
        <>
            <NavBar _searched={(res)=>setSearched(res)}/>
            <ScrollToHash/>
            <div className="p-2">
                <SponsorsList sponsors={sponsorsList} _loading={loading} search={searched}></SponsorsList>
            </div>
            <Footer/>
        </>
    )
}