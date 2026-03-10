"use client"

import { CommunityDTO,MemberDTO } from "@/hooks/Type_DTO"
import { CiFilter  } from "react-icons/ci";
import Title from "../atoms/Title"
import CommunityRow from "../molecules/CommunityRow";
import {useState,useEffect} from 'react'
type Props={
    communities:CommunityDTO[],
    member:MemberDTO|null
}
export default function CommunityList({communities,member}:Props){
    const [_communities,setCommunities]=useState(communities)
    const [isClicked,setIsClicked]=useState(false)
    // le membre est-il membre de cette communauté? pour le tri
    const [_isMine, setIsMine] = useState(false);
    return(
        <div className="w-full p-2">
            <span className="w-full flex justify-center items-center">
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
            </ul>
        </div>
    )
}