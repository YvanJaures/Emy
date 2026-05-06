"use client"

import { CommunityDTO,MemberDTO } from "@/hooks/Type_DTO"
import { CiFilter  } from "react-icons/ci";
import Title from "../atoms/Title"
import CommunityRow from "../molecules/CommunityRow";
import { IoAddCircleOutline } from "react-icons/io5";
import NoContent from "../molecules/NoContent";
import {useState,useEffect, useRef} from 'react'
import { usePathname } from "next/navigation";
import LoadCommunityRow from "@/Loading/LoadCommunityRow";
import LoadRoundButton from "@/Loading/LoadRoundButton";
import { NoResult } from "../molecules/NoResult";
type Props={
    communities:CommunityDTO[],
    member:MemberDTO|null,
    search?:string
    loading?:boolean
}
export default function CommunityList({communities,member,search,loading}:Props){
    const [_communities,setCommunities]=useState(communities)
    // le membre est-il membre de cette communauté? pour le tri
    const [isClicked,setIsClicked]=useState(false)
    const [filter,setFilter]=useState<string>("Tous")
    const pathname = usePathname();
    const [searched,setSearched]=useState<string>(search?? "")
    const ulRef=useRef<HTMLUListElement>(null)
    useEffect(()=>{
        if(!communities) return
        if(searched==="404") return setCommunities(communities)
        const coms=communities?.filter((com :CommunityDTO)=>com.name.toLowerCase().includes(searched.toLowerCase()))
        setCommunities(coms)
    },[searched])


    useEffect(()=>{
        if(!search) return
        if(search==="") return
        setSearched(search)
    },[search])


    useEffect(()=>{
        if(!communities) return
        setCommunities(communities)
    },[communities])


    useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  
    return(
        <div className="w-full p-2">
            <span className="w-full flex justify-center items-center p-2">
                <Title
                children={isClicked? 'MES COMMUNAUTES':'COMMUNAUTES'}
                as='h2'
                className="flex-90 text-start text-xl"/>
               {member && <CiFilter  
                className={`${isClicked? 'fill-[#0F70AC]':''} flex-10 text-end text-xl w-xl hover:cursor-pointer`}
                onClick={()=>{setIsClicked(!isClicked)}}/>}
                {!member && <LoadRoundButton/>}
            </span>
            <div className="flex px-2 my-2 gap-2">
                {(['Tous','Publique','Privée'] as string[]).map((f,i)=>(
                    <button 
                        key={i} 
                        onClick={()=>setFilter(f)}
                        className={`${filter===f? 'bg-gray-600 text-blue-200':'bg-black dark:bg-gray-800'} 
                        text-white px-3 py-1 rounded hover:bg-gray-600 
                        hover:cursor-pointer border dark:border-white/10
                        dark:hover:bg-gray-600 hover:bg-black/95 shadow-lg
                        `}
                    >
                    {f}
                    </button>
                ))}
            </div>
            <ul className="w-full flex justify-evenly flex-wrap gap-2 p-1" ref={ulRef}>
                { communities ?
                    (
                        _communities.map((community)=>(
                            <CommunityRow
                                member={member}
                                community={community}
                                key={community.id_community}
                                isMine={isClicked? true:false}
                                filter={filter}
                            />
                        ))
                    ):(
                        <NoContent/>
                    )
                }
                {
                    isClicked &&
                    (<li className="group hover:border-[#0F70AC] hover:cursor-pointer border border-dashed h-15 rounded-xl
                        flex justify-center items-center flex-col"
                        onClick={()=>setIsClicked(!isClicked)}>
                        <IoAddCircleOutline 
                        className="group-hover:text-[#0F70AC]"/>
                        <p className="group-hover:text-[#0F70AC]"> Rejoindre une communauté</p>
                    </li>)
                }
                {(loading && loading) && [...Array(15)].map((_,index)=>(
                    <LoadCommunityRow key={index}/>
                ))}
                { communities && !loading &&
                    (
                        communities.length===0  && searched===''  ?
                        (
                            <NoContent action={
                                <li className="group hover:border-[#0F70AC] hover:cursor-pointer border border-dashed h-12 w-60 rounded-xl
                                    flex justify-center items-center flex-col"
                                    onClick={()=>''}>
                                    <IoAddCircleOutline 
                                    className="group-hover:text-[#0F70AC]"/>
                                    <p className="group-hover:text-[#0F70AC] text-[13px]"> Créer une communauté</p>
                                </li>
                            }>
                            </NoContent>
                        ):(
                            (_communities.length===0  && (searched!=='404' && searched!=='') ) && (<NoResult/>)
                            
                        )
                    )
                }
            </ul>
            {(filter!=="Tous" && (ulRef.current?.children.length===Array.prototype.map.call(ulRef.current?.children,c=>c.classList.contains('hidden')).filter((e)=>e).length)) &&<NoContent/>}
        </div>
    )
}