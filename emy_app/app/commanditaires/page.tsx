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
    useEffect(()=>{
        (async ()=>{
            try{
                setLoading(true);
                console.log("calcul")
                const sponsors=await getSponsors();
                setSponsorsList(sponsors);
                console.log(sponsors)
                setLoading(false);
            }catch(error){
                console.log(error)
                setLoading(false)
            }
        })();
        
    },[])
    const sponsors=[{
    user_name:"sponsor1",
    company_name:"Company1",
    title:"CEO",
        Member:{
            avatar:"/assets/avatars/avatar1.png",
            user_name:"sponsor1",
            name:"John",
            surname:"Doe",
            address:"123 Main St",
            birth_date:new Date("1990-01-01"),
            email:"john.doe@example.com",
            country:"Canada",
            phone:"123-456-7890",
            Admin:null,
        }
    },{
    user_name:"sponsor1",
    company_name:"Company1",
    title:"CEO",
        Member:{
            avatar:"/assets/avatars/avatar1.png",
            user_name:"sponsor1",
            name:"John",
            surname:"Doe",
            address:"123 Main St",
            birth_date:new Date("1990-01-01"),
            email:"john.doe@example.com",
            country:"Canada",
            phone:"123-456-7890",
            Admin:null,
        }
    },{
    user_name:"sponsor1",
    company_name:"Company1",
    title:"CEO",
        Member:{
            avatar:"/assets/avatars/avatar1.png",
            user_name:"sponsor1",
            name:"John",
            surname:"Doe",
            address:"123 Main St",
            birth_date:new Date("1990-01-01"),
            email:"john.doe@example.com",
            country:"Canada",
            phone:"123-456-7890",
            Admin:null,
        }
    }]
    if(loading) return <LoadingAnimation/>
    return(
        <>
            <NavBar/>
            <div className="p-2">
                {sponsorsList &&(<SponsorsList sponsors={sponsorsList}></SponsorsList>)}
            </div>
            <Footer/>
        </>
    )
}