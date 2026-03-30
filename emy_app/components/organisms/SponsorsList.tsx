"use client"
import NavBar from "@/components/organisms/NavBar"
import Footer from "@/components/organisms/Footer"
import SponsorCard from "@/components/molecules/SponsorCard";
import { CiFilter } from "react-icons/ci";
import { SponsorDTO } from "@/hooks/Type_DTO";
import { useState } from "react";
import { useConnexion } from "@/hooks/useAuth";
import Confirmation from "./Confirmation";
import PopUp from "../atoms/PopUp";
import SponsorForm, { FormClose } from "./SponsorForm";

/**
 * Interface des propriétés du composant SponsorsList
 */
type Props={
    /** Liste des sponsors à afficher */
    sponsors:SponsorDTO[];
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
export default function Page({sponsors}:Props){
    const [onFilter,setOnFilter]=useState(false);
    const [sponsorsList,setSponsorsList]=useState<SponsorDTO[]>(sponsors);
    const [sponsorsListV2,setSponsorsListV2]=useState<SponsorDTO[]>(sponsorsList);
      // Affichage ou non de la redirection vers la page de connxion
    const [onConfirmation, SetOnConfirmation] = useState(false);
    const [onPopUp, SetOnPopUp] = useState(false);
    const {member}=useConnexion()
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
        return sponsorsList.some(sponsor=>sponsor.user_name===member?.user_name)
    }
    return(
        <>
            <div className="flex items-center justify-between items-center gap-5 p-2">
                <p className="text-lg">{onFilter ? "MON COMPTE" : "LISTE DE COMMANDITAIRES"}</p>
                <CiFilter
                    className={`${onFilter && "text-[#0b78b9]"} hover:cursor-pointer hover:text-[#0b78b9]`}
                    onClick={handleFilter}
                    />
            </div>
            {sponsorsList.map((sponsor,i)=>(<SponsorCard key={sponsor.user_name+i} sponsor={sponsor}></SponsorCard>))}
            {!has() &&(<span className="flex border border-dashed rounded-md h-[6rem] items-center justify-center gap-2 text-sm text-[#0b78b9] opacity-80 hover:opacity-100 hover:cursor-pointer"
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
                  if (res) location.href = "/login";
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