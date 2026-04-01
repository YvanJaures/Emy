"use client"
import { TournamentDTO } from "@/hooks/Type_DTO";
import ImageDefault from "../atoms/ImageDefault";
import { FaRegEye } from "react-icons/fa";
import { useState,useMemo } from "react";
import { GrMapLocation } from "react-icons/gr";
/**
 * liste des tournois de la communautés
 * @param props : { TournamentDTO[] }
 * @returns la liste de tournois et quelques details
 */
export default function TourViewList(props:{tournaments:TournamentDTO[]}){
    /**
     * compare les date du tournois à la date actuelle pour determiner si
     * elle auras, a ou a eu lieu
     */
    const etats=useMemo(()=>{
        const etats:number[]=[]
        for (const tournament of props.tournaments){
            console.log('debut')
            const start=new Date(tournament.start_date)
            const end=new Date(tournament.end_date)
            // si il y'a une erreur de date
            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            console.warn("Date invalide pour le tournoi :", tournament);
            etats.push(-2); // code spécial pour erreur
            continue;
            }
            // note date actuelle
            const date=(new Date)
            // si actuel est avant la date de debut du tournoi
            if(start.getTime()>date.getTime()){
                etats.push(-1)
            }
            // si actuel est après la date de debut et avant la fin du tournoi
            else if(start.getTime()<date.getTime()
                    && date.getTime()<end.getTime()){
                etats.push(0)
            }
            // si actuel est après la date de fin du tournoi
            else if(date.getTime()>end.getTime()){
                etats.push(1)
            }

        }
        console.log(etats)
        return etats
    },[props.tournaments])
    /**
     * Récupère les dates et les convertits en chaîne de caractères
     */
    const dates=useMemo(()=>{
        const dates:{start:string,end:string}[]=[]
        for(const tournament of props.tournaments){
            const start=(new Date(tournament.start_date)).toLocaleDateString()
            const end=(new Date(tournament.end_date)).toLocaleDateString()
            const dts={start,end}
            dates.push(dts)
        }
        return dates
    },[props.tournaments])
    return(
        <ul className="absolute w-full mt-17 p-3 flex flex-col justify-start items-center gap-2">
            { props.tournaments.length>0 ?
                (props.tournaments.map((tournament,i)=>(
                    <li key={tournament.id_tour} className="group hover:cursor-pointer hover:bg-black/10 p-1 flex justify-start items-center w-full gap-1"
                        onClick={()=> location.href='/communautes/tournois/'+tournament.id_tour}>
                        <ImageDefault
                        avatar={tournament.avatar ?? ''}
                        title='image de profil du membre'
                        onClick={()=> location.href='/communautes/tournois/'+tournament.id_tour}
                        className='w-10 h-10 rounded-full p-1'/>
                        <p className=" flex-25 max-sm:text-[13px] text-gray-500 italic"><sub>@</sub>{tournament.name ?? 'name'}</p>
                        <p className=" flex-25 max-sm:text-[13px] text-gray-500 italic"><sub>@</sub>{tournament.id_tour ?? 'id'}</p>
                        <p className="flex flex-45 justify-start items-center gap-1 flex-10 max-sm:text-[13px] text-gray-500 italic">
                            {
                                etats[i]===-2 &&
                                (<sub className="w-2  h-2 rounded-full bg-green-600"></sub>)
                            }
                            {
                                etats[i]===-2 &&
                                ('erreur')
                            }
                            {
                                etats[i]===-1 &&
                                (<sub className="w-2  h-2 rounded-full bg-green-600"></sub>)
                            }
                            {
                                etats[i]===-1 &&
                                ('Commence le: '+dates[i].start)
                            }
                            {
                                etats[i]===0 &&
                                (<sub className="w-2  h-2 rounded-full bg-orange-300"></sub>)
                            }
                            {
                                etats[i]===0 &&
                                ('En cours depuis le: '+dates[i].start)
                            }
                            {
                                etats[i]===1 &&
                                (<sub className="w-2  h-2 rounded-full bg-red-600"></sub>)
                            }
                            {
                                etats[i]===1 &&
                                ('Terminé le: '+dates[i].end)
                            }
                        </p>
                        <a href={`https://www.google.com/maps/place/${tournament.location ?? '/'}`} target="_blank" rel="noopener noreferrer"
                            className="flex flex-col flex-25 gap-1 justify-center items-center hover:underline">
                            <p className="max-sm:hidden hover:underine">
                                Localisation :
                            </p>
                            <p className="max-sm:hidden">
                                {tournament.location}
                            </p>
                            <GrMapLocation 
                                className="hover:cursor-pointer hover:text-[#0F70AC] hidden max-sm:block"/>
                        </a>
                        <FaRegEye 
                        className="flex flex-5 text-end justify-end group-hover:text-[#0F70AC]"/>
                    </li>
                )) 
                ):(
                <li>
                    <p className="text-center text-gray-500">
                        Aucun tournoi pour l'instant.
                    </p>
                </li>
                )
            }
        </ul>
    )
}