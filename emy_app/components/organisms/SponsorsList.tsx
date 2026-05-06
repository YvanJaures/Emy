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
import Alert from "../molecules/Alert";
import NoContent from "../molecules/NoContent";
import { NoResult } from "../molecules/NoResult";

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
    const [sponsorsListV2,setSponsorsListV2]=useState<SponsorDTO[]|[]>([]);
      // Affichage ou non de la redirection vers la page de connxion
    const [onConfirmation, SetOnConfirmation] = useState(false);
    const [onPopUp, SetOnPopUp] = useState(false);
    const {member,loading}=useConnexion()
    const [validationMessage,setValidationMessage]=useState('')
    const [onError,setOnError]=useState(false)
    const [searched,setSearched]=useState<string>(search?? "")
    const [_has,setHas]=useState(true)

    const handleAlert=()=>{
        setValidationMessage('')
        setOnError(false)
    }
    useEffect(()=>{
        if(!sponsorsList || !sponsors) return
        if(searched==="404") {
            if(onFilter) return setSponsorsList(sponsorsListV2.filter(sponsor=>sponsor.user_name===member?.user_name));
            return setSponsorsList(sponsors)
        }
        if(searched===''){
            return setSponsorsList(sponsors)
        }
        const sps=sponsors.filter((s)=>s.company_name.toLowerCase().includes(searched.toLowerCase()))
        setSponsorsList(sps)
    },[searched])


    useEffect(()=>{
        if(!search) return
        if(search==="") return
        setSearched(search)
    },[search])
    const handleFilter=()=>{
        setSponsorsListV2(sponsors);
        setOnFilter(!onFilter);
        if(!onFilter) setSponsorsList(sponsorsList?.filter(sponsor=>sponsor.user_name===member?.user_name));
        else setSponsorsList(sponsorsListV2);
    }
    const handleDevenirCommanditaire=()=>{
        if(!member) return SetOnConfirmation(!onConfirmation) ;
        SetOnPopUp(!onPopUp);
    }
    const handleAdded=(res:FormClose)=>{
        SetOnPopUp(!res.close)
        if(res.sponsor) {
            setOnError(false)
            setValidationMessage('vous avez été ajouté en tant que commanditaire!')
            setSponsorsList([...sponsorsList,res.sponsor])
            setHas(true)
            return
        }
        setOnError(true)
        setValidationMessage('impossible de devenir commanditaire pour l\'instant')
    }
    const has=()=>{
        if(!member || !sponsors) return false
        const has= sponsorsList.some((sponsor)=>sponsor.user_name===member?.user_name)
        return has
    }
    useEffect(()=>{

        setSponsorsList(sponsors)

    },[sponsors])

    useEffect(()=>{
        setHas(has())
    },[member,sponsorsList])

    return(
        <>
            <div className="text-2xl font-bold text-start p-2 flex items-center justify-between items-center gap-5 p-2">
                <p className="text-lg">{onFilter ? "MON COMPTE" : "LISTE DE COMMANDITAIRES"}</p>
                {!loading && <CiFilter
                    className={`${onFilter && "text-[#0b78b9]"} hover:cursor-pointer hover:text-[#0b78b9]`}
                    onClick={handleFilter}
                    />
                }
                {loading &&<LoadRoundButton/>}
            </div>
            
            {_loading && [...Array(10)].map((_,index)=>(<LoadSponsorCard key={index}/>))}
            <ul className="flex flex-wrap justify-evenly w-full"> 
                {sponsorsList? 
                (  sponsorsList.length>0 && !_loading  ?
                    (sponsorsList.map((sponsor,i)=>(
                     <SponsorCard key={sponsor.user_name} sponsor={sponsor}></SponsorCard>))
                    ):(
                    <li>
                        {
                             sponsorsList.length>0 && (searched==="404" ||searched==="" )&& !_loading && <NoContent/>
                        }
                    </li>
                )):(
                    <NoContent/>
                )
                }
                {(sponsorsList && !_loading && searched!=="" && searched!=="404" && sponsorsList.length===0 )?(
                    <NoResult/>
                ):(
                       sponsorsList && sponsorsList.length===0 && !_loading && <NoContent/>
                )}
                {!_has &&sponsorsList &&(
                    <li id="devenir-commanditaire" className="flex w-full border border-dashed rounded-md h-[3rem] items-center justify-center gap-2 text-[12px] text-[#0b78b9] opacity-80 hover:opacity-100 hover:cursor-pointer"
                    onClick={handleDevenirCommanditaire}>
                    DEVENIR COMMANDITAIRE
                    </li>
                )}
            </ul>

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
            {validationMessage!=="" &&<Alert message={validationMessage} onMes={handleAlert} error={onError}/>}
            
        </>
    )
}