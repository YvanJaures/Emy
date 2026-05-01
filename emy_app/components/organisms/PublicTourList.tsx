import { TournamentDTO } from "@/hooks/Type_DTO"
import { useEffect, useState } from "react"
import TourCard from "../molecules/TourCard"
import LoadTourCard from "@/Loading/LoadTourCard"
import Button from "../atoms/Button"

export default function PublicTourList(props:{tournaments:TournamentDTO[],className?:string,loading?:boolean,search?:string}){
    const [tournaments,setTournaments]=useState<TournamentDTO[]|[]>([])
    const [searched,setSearched]=useState<string>(props.search?? "")
    const [filter,setFilter]=useState<number>(-2)
    useEffect(()=>{
        setTournaments(props.tournaments)
    },[props.tournaments])
    return(
        <div>
            
            <div className="flex px-2 my-2 gap-2">
                {(['Tous','A venir','En cours','Terminé'] as string[]).map((f,i)=>(
                    <button 
                        key={i} 
                        onClick={()=>setFilter(i-2)}
                        className={`${filter===i-2? 'bg-gray-600 text-blue-200':'bg-black dark:bg-gray-800'} 
                        text-white px-3 py-1 rounded hover:bg-gray-600 
                        hover:cursor-pointer border dark:border-white/10
                        dark:hover:bg-gray-600 hover:bg-black/95 shadow-lg
                        `}
                    >
                    {f}
                    </button>
                ))}
            </div>
            <ul className="flex gap-3 flex-wrap justify-start max-sm:justify-evenly mb-5 px-2">
                {props.loading&& ([...Array(10)].map((_,index)=>(<LoadTourCard key={index}/>)))}
                {tournaments.map((tournament)=>(<TourCard key={tournament.id_tour} tournament={tournament} filter={filter} />))}
            </ul>
        </div>
    )
}