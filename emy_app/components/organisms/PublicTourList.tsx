import { TournamentDTO } from "@/hooks/Type_DTO"
import { useEffect, useRef, useState } from "react"
import TourCard from "../molecules/TourCard"
import LoadTourCard from "@/Loading/LoadTourCard"
import Button from "../atoms/Button"
import NoContent from "../molecules/NoContent"
import { NoResult } from "../molecules/NoResult"

export default function PublicTourList(props:{tournaments:TournamentDTO[],className?:string,loading?:boolean,search?:string}){
    const [tournaments,setTournaments]=useState<TournamentDTO[]|[]>([])
    const [searched,setSearched]=useState<string>(props.search?? "")
    const [filter,setFilter]=useState<number>(-2)
    const ulRef=useRef<HTMLUListElement>(null)
    useEffect(()=>{
        if(!props.search) return
        setSearched(props.search)
    },[props.search])

    useEffect(()=>{
        if(!props.tournaments) return
        if(searched==="404") return setTournaments(props.tournaments)
        const ts=props.tournaments.filter((t)=>t.name.toLowerCase().includes(searched.toLowerCase()))
        setTournaments(ts)
    },[searched])

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
            <ul ref={ulRef} className="flex gap-3 flex-wrap justify-evenly max-sm:justify-evenly mb-5 px-2">
                {props.loading&& ([...Array(10)].map((_,index)=>(<LoadTourCard key={index}/>)))}
                {tournaments.map((tournament)=>(<TourCard key={tournament.id_tour} tournament={tournament} filter={filter} />))}
                {(!props.loading && (searched==='' || searched==='404' )&& tournaments.length===0) && (<NoContent/>)}
                {(searched!==''&& searched!=='404' &&tournaments.length===0 ) && (<NoResult/>)}
            </ul>
            {(filter!==-2 && (ulRef.current?.children.length===Array.prototype.map.call(ulRef.current?.children,c=>c.classList.contains('hidden')).filter((e)=>e).length)) &&<NoContent/>}
        </div>
    )
}