"use client"
import NavBar from "@/components/organisms/NavBar"
import Footer from "@/components/organisms/Footer"
import SponsorCard from "@/components/molecules/SponsorCard";
import { CiFilter } from "react-icons/ci";
import { SponsorDTO } from "@/hooks/Type_DTO";
import { useEffect, useState } from "react";
import { useConnexion } from "@/hooks/useAuth";
import Confirmation from "./Confirmation";
import PopUp from "../atoms/PopUp";
import SponsorForm, { FormClose } from "./SponsorForm";
import LoadSponsorCard from "@/Loading/LoadSponsorCard";
import LoadRoundButton from "@/Loading/LoadRoundButton";

/**
 * Interface des propriétés du composant SponsorsList
 */
type Props={
    /** Liste des sponsors à afficher */
    sponsors:SponsorDTO[];
    _loading?:boolean;
    search?:string
}

/**
 * Composant SponsorsList - Affiche la liste des commanditaires
 *
 * Ce composant affiche une liste de sponsors avec des fonctionnalités de filtrage
 * permettant de voir tous les sponsors ou seulement ceux de l'utilisateur connecté.
 * Il permet également de devenir commanditaire via un formulaire.
 *
 * @param props - Les propriétés du composant
 * @param props.sponsors - Liste des sponsors à afficher
 * @returns Le composant SponsorsList rendu
 */
export default function Page({sponsors,_loading,search}:Props){
    const [onFilter,setOnFilter]=useState(false);
    const [sponsorsList,setSponsorsList]=useState<SponsorDTO[]>(sponsors);
    const [sponsorsListV2,setSponsorsListV2]=useState<SponsorDTO[]>(sponsorsList);
      // Affichage ou non de la redirection vers la page de connxion
    const [onConfirmation, SetOnConfirmation] = useState(false);
    const [onPopUp, SetOnPopUp] = useState(false);
    const {member,loading}=useConnexion()
    const [searched,setSearched]=useState<string>(search?? "")

    useEffect(()=>{
        console.log('searching:'+searched)
        if(searched==="404") {
            if(onFilter) return setSponsorsList(sponsorsListV2.filter(sponsor=>sponsor.user_name===member?.user_name));
            return setSponsorsList(sponsors)
        }
        console.log('search valide')
        console.log(sponsors)
        const sps=sponsorsList.filter((s)=>s.company_name.toLowerCase().includes(searched.toLowerCase()))
        console.log(sps)
        setSponsorsList(sps)
    },[searched])


    useEffect(()=>{
        if(!search) return
        if(search==="") return
        setSearched(search)
    },[search])
    const handleFilter=()=>{
        setSponsorsListV2(sponsorsList);
        setOnFilter(!onFilter);
        if(!onFilter) setSponsorsList(sponsorsList.filter(sponsor=>sponsor.user_name===member?.user_name));
        else setSponsorsList(sponsorsListV2);
    }
    const handleDevenirCommanditaire=()=>{
        if(!member) return SetOnConfirmation(!onConfirmation) ;
        SetOnPopUp(!onPopUp);
    }
    const handleAdded=(res:FormClose)=>{
        SetOnPopUp(!res.close)
        if(res.sponsor) setSponsorsList([...sponsorsList,res.sponsor])
    }
    const has=()=>{
        return sponsors.some(sponsor=>sponsor.user_name===member?.user_name)
    }
    
    useEffect(()=>{
        setSponsorsList(sponsors)
    },[sponsors])
    return(
        <>
            <div className="flex items-center justify-between items-center gap-5 p-2">
                <p className="text-lg">{onFilter ? "MON COMPTE" : "LISTE DE COMMANDITAIRES"}</p>
                {!loading && <CiFilter
                    className={`${onFilter && "text-[#0b78b9]"} hover:cursor-pointer hover:text-[#0b78b9]`}
                    onClick={handleFilter}
                    />
                }
                {loading &&<LoadRoundButton/>}
            </div>
            
            {_loading && [...Array(10)].map((_,index)=>(<LoadSponsorCard key={index}/>))}
            
            {!_loading &&sponsorsList.length>0?(sponsorsList.map((sponsor,i)=>(<SponsorCard key={sponsor.user_name} sponsor={sponsor}></SponsorCard>))):(
                <li>
                    <p className="text-center text-gray-500 drak:text-gray-200">
                        Aucun commanditaire pour l'instant.
                    </p>
                </li>
                )}

            {!has() &&(<span id="devenir-commanditaire" className="flex border border-dashed rounded-md h-[6rem] items-center justify-center gap-2 text-sm text-[#0b78b9] opacity-80 hover:opacity-100 hover:cursor-pointer"
                onClick={handleDevenirCommanditaire}>
                DEVENIR COMMANDITAIRE
            </span>)}
            {/** Confirmation de redirection vers la page de connexion */}
            {onConfirmation && (
              <Confirmation
                title="Redirection"
                message="Vous allez être rediriger vers la page de connexion. Continuer?"
                onConfirmed={(res) => {
                  SetOnConfirmation(false);
                  if (res) location.href = "/login?redirect=/commanditaires#devenir-commanditaire";
                }}
                showConfirm={onConfirmation}
              />
            )}
            {onPopUp && (
              <PopUp onClose={() => SetOnPopUp(false)}> 
                
                {member &&(<SponsorForm 
                    member={member}
                    onClose={(res)=>handleAdded(res)}/>)}

            </PopUp>)}
        </>
    )
}