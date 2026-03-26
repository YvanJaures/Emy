"use client"
import { TournamentDTO } from "@/hooks/Type_DTO";
import ImageDefault from "../atoms/ImageDefault";
import { FaRegEye } from "react-icons/fa";
import { useMemo } from "react";
import { GrMapLocation } from "react-icons/gr";

export default function ProfileTourViewList(props:{tournaments:TournamentDTO[]}){

    const etats = useMemo(()=>{
        const etats:number[]=[]
        for (const tournament of props.tournaments){
            const start=new Date(tournament.start_date)
            const end=new Date(tournament.end_date)

            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                etats.push(-2)
                continue;
            }

            const date=(new Date)

            if(start.getTime()>date.getTime()){
                etats.push(-1)
            }
            else if(start.getTime()<date.getTime() && date.getTime()<end.getTime()){
                etats.push(0)
            }
            else{
                etats.push(1)
            }
        }
        return etats
    },[props.tournaments])

    const dates = useMemo(()=>{
        const dates:{start:string,end:string}[]=[]
        for(const tournament of props.tournaments){
            dates.push({
                start:(new Date(tournament.start_date)).toLocaleDateString(),
                end:(new Date(tournament.end_date)).toLocaleDateString()
            })
        }
        return dates
    },[props.tournaments])

    return(
        <ul className="w-full max-w-5xl mx-auto p-4 flex flex-col gap-3">

            { props.tournaments.length>0 ?
                props.tournaments.map((tournament,i)=>(

                    <li 
                        key={tournament.id_tour}
                        className="group flex items-center w-full gap-3 p-3 rounded-lg 
                                border border-gray-200 dark:border-gray-700 
                                bg-white/50 dark:bg-gray-800/50 
                                hover:bg-black/5 transition cursor-pointer"
                        onClick={()=> location.href='/communautes/tournois/'+tournament.id_tour}
                    >

                        <ImageDefault
                            avatar={tournament.avatar ?? ''}
                            title='image de profil du tournoi'
                            className='w-10 h-10 rounded-full'
                        />

                        <p className="w-[180px] text-gray-500 italic truncate">
                            <sub>@</sub>{tournament.name ?? 'name'}
                        </p>

                        <p className="w-[80px] text-gray-500 italic">
                            <sub>@</sub>{tournament.id_tour ?? 'id'}
                        </p>

                        <p className="flex-1 flex items-center gap-2 text-gray-500 italic">

                            {etats[i]===-2 && <> erreur</>}
                            {etats[i]===-1 && <> Commence le: {dates[i].start}</>}
                            {etats[i]===0 && <> En cours depuis: {dates[i].start}</>}
                            {etats[i]===1 && <> Terminé le: {dates[i].end}</>}

                        </p>

                        <div className="hidden md:flex flex-col items-center text-gray-500 text-sm w-[180px]">
                            <p>Localisation :</p>
                            <p className="truncate">{tournament.location}</p>
                        </div>

                        <GrMapLocation className="md:hidden text-gray-500"/>

                        <FaRegEye className="text-gray-400 group-hover:text-[#0F70AC]"/>

                    </li>

                ))
            :
                <li className="text-center text-gray-500">
                    Aucun tournoi pour l'instant.
                </li>
            }

        </ul>
    )
}