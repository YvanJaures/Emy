import { TournamentDTO } from "@/hooks/Type_DTO"
import { useEffect, useState } from "react"
import TourCard from "../molecules/TourCard"
import LoadTourCard from "@/Loading/LoadTourCard"

export default function PublicTourList(props:{tournaments:TournamentDTO[],className?:string,loading?:boolean,search?:string}){
    const [tournaments,setTournaments]=useState<TournamentDTO[]|[]>([])
    const [searched,setSearched]=useState<string>(props.search?? "")
    const [filter,setFilter]=useState<string>("")
    useEffect(()=>{
        setTournaments(props.tournaments)
    },[props.tournaments])
    return(
        <div>
            <ul className="flex gap-3 flex-wrap justify-center mb-5">
                {props.loading&& ([...Array(10)].map((_,index)=>(<LoadTourCard key={index}/>)))}
                {tournaments.map((tournament)=>(<TourCard key={tournament.id_tour} tournament={tournament} />))}
            </ul>
        </div>
    )
}