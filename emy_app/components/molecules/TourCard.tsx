"use client"
import {TournamentDTO} from "@/hooks/Type_DTO";
import Button from "../atoms/Button";
import { useMemo } from "react";
import { GrMapLocation } from "react-icons/gr";
import ImageDefault from "../atoms/ImageDefault";
import {useRouter} from "next/navigation"
export default function Card({tournament,filter}:{tournament:TournamentDTO,filter:number}){
    const router=useRouter()
    const etat=useMemo(()=>{
        let etat:number=-2
            const start=new Date(tournament.start_date)
            const end=new Date(tournament.end_date)
            // si il y'a une erreur de date
            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            console.warn("Date invalide pour le tournoi :", tournament);
            etat=-2; // code spécial pour erreur
            return etat;
            }
            // note date actuelle
            const date=(new Date)
            // si actuel est avant la date de debut du tournoi
            if(start.getTime()>date.getTime()){
                etat=-1
                return etat;
            }
            // si actuel est après la date de debut et avant la fin du tournoi
            else if(start.getTime()<date.getTime()
                    && date.getTime()<end.getTime()){
                etat=0
                return etat;
            }
            // si actuel est après la date de fin du tournoi
            else if(date.getTime()>end.getTime()){
                etat=1
                return etat;
            }

        return etat
    },[tournament])
    const date=useMemo(()=>{
        let date:{start:string,end:string}={start:'',end:''}
            const start=(new Date(tournament.start_date)).toLocaleDateString()
            const end=(new Date(tournament.end_date)).toLocaleDateString()
            const dts={start,end}
            date=dts
        return date
    },[tournament])
    return(
        <div className={` ${(etat!==filter && filter!==-2)? 'hidden':''} w-40 h-60 shadow-lg border border-black/10 p-1 dark:bg-gray-800 rounded-lg overflow-hidden`}>
            <div className="overflow-hidden h-full flex flex-col justify-center items-center gap-2">
                <ImageDefault
                    avatar={tournament.avatar ?? ''}
                    title='image de profil du membre'
                    onClick={()=> router.push('/communautes/tournois/'+tournament.id_tour)}
                    className="w-40 h-30 object-cover hover:cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-700"
                />
                <section
                    className="w-full flex-30 flex flex-col justify-between items-center gap-2"
                >
                    <h2
                        className="w-full text-center text-sm font-semibold text-nowrap overflow-hidden text-ellipsis"
                    >{tournament.name}</h2>
                    <span className="flex flex-col text-[10px] justify-center items-center w-full">
                        <p className="flex-35 text-center">@{tournament.id_tour}</p>
                        <p className="flex flex-65 justify-center items-center gap-1 text-gray-500 italic">
                            {
                                etat===-2 &&
                                (<sub className="w-2  h-2 rounded-full bg-green-600"></sub>)
                            }
                            {
                                etat===-2 &&
                                ('erreur')
                            }
                            {
                                etat===-1 &&
                                (<sub className="w-2  h-2 rounded-full bg-green-600"></sub>)
                            }
                            {
                                etat===-1 &&
                                ('Commence le: '+date.start)
                            }
                            {
                                etat===0 &&
                                (<sub className="w-2  h-2 rounded-full bg-orange-300"></sub>)
                            }
                            {
                                etat===0 &&
                                ('En cours depuis le: '+date.start)
                            }
                            {
                                etat===1 &&
                                (<sub className="w-2  h-2 rounded-full bg-red-600"></sub>)
                            }
                            {
                                etat===1 &&
                                ('Terminé le: '+date.end)
                            }
                        </p>
                    </span>
                    <Button 
                        title="voir"
                        className="border-none h-5 w-25"
                        onClick={()=> router.push('/communautes/tournois/'+tournament.id_tour)}
                    />
                    <a href={`https://www.google.com/maps/place/${tournament.location ?? '/'}`} target="_blank" rel="noopener noreferrer"
                        className="flex flex-col text-[10px] gap-1 justify-center items-center text-nowrap overflow-hidden text-ellipsis hover:underline dark:text-gray-200">
                        <p className="max-sm:hidden hover:underine dark:text-gray-200">
                            Localisation :
                            {tournament.location}
                        </p>
                        <GrMapLocation 
                            className="hover:cursor-pointer hover:text-[#0F70AC] hidden max-sm:block"/>
                    </a>
                </section>
            </div>
        </div>
    )
}