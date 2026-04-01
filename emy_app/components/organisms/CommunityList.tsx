"use client"

import { CommunityDTO,MemberDTO } from "@/hooks/Type_DTO"
import { CiFilter  } from "react-icons/ci";
import Title from "../atoms/Title"
import CommunityRow from "../molecules/CommunityRow";
import { IoAddCircleOutline } from "react-icons/io5";

import {useState,useEffect} from 'react'
import { usePathname } from "next/navigation";
type Props={
    communities:CommunityDTO[],
    member:MemberDTO|null
}
export default function CommunityList({communities,member}:Props){
    const [_communities,setCommunities]=useState(communities)
    // le membre est-il membre de cette communauté? pour le tri
    const [isClicked,setIsClicked]=useState(false)
    const pathname = usePathname();
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
                <CiFilter  
                className={`${isClicked? 'fill-[#0F70AC]':''} flex-10 text-end text-xl w-xl hover:cursor-pointer`}
                onClick={()=>{setIsClicked(!isClicked)}}/>
            </span>
            <ul className="w-full flex flex-col gap-5 p-2">
                {
                    communities.map((community)=>(
                        <CommunityRow
                        member={member}
                        community={community}
                        key={community.id_community}
                        isMine={isClicked? true:false}/>
                    ))
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
                {
                    communities.length===0 &&
                    (<li className="group hover:border-[#0F70AC] hover:cursor-pointer border border-dashed h-15 rounded-xl
                        flex justify-center items-center flex-col"
                        onClick={()=>''}>
                        <IoAddCircleOutline 
                        className="group-hover:text-[#0F70AC]"/>
                        <p className="group-hover:text-[#0F70AC]"> Créer une communauté</p>
                    </li>)
                }
            </ul>
        </div>
    )
}