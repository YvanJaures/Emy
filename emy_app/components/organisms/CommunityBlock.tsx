"use client"

import { CommunityDTO } from "@/hooks/Type_DTO"
import { RiArrowLeftSLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { TbTournament } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Title from "../atoms/Title"
import ImageDefault from "../atoms/ImageDefault";
import {useState,useEffect} from 'react'
import {getCommunityMembers,getCommunityTournaments} from '@/fetchs/global'
import {MemberDTO,TournamentDTO} from '@/hooks/Type_DTO'
import UserViewList from "../molecules/UserViewList"
import TourViewList from "../molecules/TourViewList"
import OnError from "./OnError";
import Constructing from "./Constructing";
import NavBarCommunity from "./NavBarCommunity";
import OnPrivate from "./OnPrivate";
import { useConnexion } from "@/hooks/useAuth";
type Props={
    community:CommunityDTO,
    _isMember:boolean,
    onShown:(shown:boolean)=>void
}
/**
 * Affiche les données sur la communauté
 * @param community 
 * @param OnShow 
 * @param isMember 
 * @returns la page de detail de communauté
 */
export default function CommunityBlock({community,_isMember,onShown}:Props){
    const [members,setMembers]=useState<MemberDTO[]>([])
    const [tournaments,setTournaments]=useState<TournamentDTO[]>([])
    const [onError,setOnError]=useState(false)
    const [loading,setLoading]=useState(false)
    const [isMember,SetIsMember]=useState(_isMember)
    const [view,setView]=useState(1)
    const {member}=useConnexion()
    const handleShow=()=>{
        onShown(false)
    }

    
    useEffect(()=>{
        const handleIsMember=()=>{
            community.Community_member?.forEach((memb)=>{
                if(memb.user_name===member?.user_name){
                    SetIsMember(true)
                    console.log('i'+memb.user_name===member?.user_name) 
                    }
                return 
            })
        }
        handleIsMember()
        const fetchMembers=async()=>{
            try{
                setLoading(true)
                const res=await getCommunityMembers(community.id_community)
                setOnError(false)
                if(res){
                    setMembers(res)
                    setLoading(false)
                    res.forEach((memb:MemberDTO)=>{
                        console.log('hryfge')
                    if(memb.user_name===member?.user_name){
                        SetIsMember(true)
                        console.log('i'+memb.user_name===member?.user_name)
                        console.log(member) 
                    }
            })
                }
            }catch(error){
                setOnError(true)
            }
        }
        fetchMembers()
        const fetchTournaments=async()=>{
            try{
                setLoading(true)
                const res=await getCommunityTournaments(community.id_community)
                setOnError(false)
                if(res){
                    setTournaments(res)
                    setLoading(false)
                }
            }catch(error){
                setOnError(true)
            }
        }
        fetchTournaments()
    },[])
    return(
        <div className="z-150 absolute fixed flex flex-col top-0 left-0 
            bg-white h-lvh w-full overflow-scroll max-sm:h-full">
            <header className="flex-5 absolute sticky top-0 left-0
                flex justify-between items-center w-full p-3 bg-white/70 z-99">
                <RiArrowLeftSLine 
                    onClick={()=>handleShow()}
                    className="hover:cursor-pointer hover:bg-gray-200 rounded-full stroke-2"/>
                <Title
                    children={community.name}
                    as='h2'
                    className="bold"/>
                <p>Identifiant : {community.id_community}</p>
                <SlMagnifier 
                    className="hover:cursor-pointer stroke-2"/>
            </header>
            <main className="flex-95 flex flex-col w-full justify-start items-center">
                <div className="flex-20 w-full">
                    <ImageDefault 
                        avatar={community.avatar ?? ''}
                        title="avatar de la communauté"
                        className="object-cover h-40 w-full flex justify-center items-center"
                    />
                    <span className="absolute -translate-y-5 p-2 gap-2 rounded-t-2xl bg-white w-full flex justify-between">
                        <span className="flex justify-center items-center gap-1">
                            <FaGlobeAmericas />{community.privacy ? 'Privée':'Publique'}
                        </span>
                        <span className="flex gap-1 justify-start items-center">
                            {community.Community_member?.length} 
                            <p className="max-sm:hidden">
                                membres
                            </p>
                            <LuUsers
                                className="hidden max-sm:block"/>
                        </span>
                        <span className="flex gap-1 justify-start items-center">
                            {community.Tournament?.length} 
                            <p className="max-sm:hidden">
                                Tournois
                            </p>
                            <TbTournament
                                className="hidden max-sm:block"/>
                        </span>
                        <a href={`https://www.google.com/maps/place/${community.location ?? '/'}`} target="_blank" rel="noopener noreferrer"
                            className="flex gap-1 justify-start items-center hover:underline">
                            <p className="max-sm:hidden">
                                {community.location}
                            </p>
                            <p className="max-sm:hidden hover:underine">
                                : Localisation
                            </p>
                            <GrMapLocation 
                                className="hover:cursor-pointer hover:text-[#0F70AC] hidden max-sm:block"/>
                        </a>
                    </span>
                    <NavBarCommunity
                        setView={(view)=>setView(view)}/>
                    {loading && (
                        <p className="italic text-sm">chargement...</p>
                    )}
                    {   community.privacy && !isMember ? (
                        <OnPrivate/>
                    ):(
                        <>
                        {   view===0  &&(
                            <Constructing/>
                        )
                        }
                        {   view===1 &&(
                            <TourViewList
                                tournaments={tournaments}/>
                                
                        )
                        }
                        {   view===2 &&(
                            <UserViewList
                                members={members}/>
                        )
                        }
                        {   view===3 &&(
                            <p className="absolute w-full mt-17 p-3 flex flex-col justify-start items-center">
                                {community.details}
                            </p>
                        )
                        }
                        {   view===4 &&(
                            <Constructing/>
                        )
                        }
                        </>
                    )

                    }
                </div>

            </main>
            {onError && (
                <OnError
                    title="Erreur"
                    message="Une erreur est survenue durant la récupération de données."
                    onConfirmed={(res)=>setOnError(res)}/>
            )

            }
        </div>
    )
}