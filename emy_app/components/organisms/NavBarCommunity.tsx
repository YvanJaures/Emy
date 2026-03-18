"use client"
import {useState} from 'react'
import { TbFlagSearch } from 'react-icons/tb'
type Props={
    setView:(view:number)=>void
}
export default function NavBarCommunity({setView}:Props){
    const [option,setOption]=useState<React.MouseEvent<HTMLParagraphElement>|null>()
    const [isActive,setIsActive]=useState(1)
    const handleClick=(view:number)=>{
        setView(view)
        setIsActive(view)   
    }
    return(
        <>
            <nav className="absolute bg-white p-1 mt-6 shadow-sm rounded-xl w-full flex justify-between items-center">
                <p className={`${isActive===0 ? 'bg-gray-200':''} hover:underline hover:cursor-pointer hover:text-[#0F70AC] text-center max-sm:text-[15px] bold overflow-hidden hover:bg-gray-200 rounded-3xl p-2 flex-10`}
                    onClick={()=>handleClick(0)}>
                    Tous
                </p>
                <p className={`${isActive===1 ? 'bg-gray-200':''} hover:underline hover:cursor-pointer hover:text-[#0F70AC] text-center max-sm:text-[15px] bold overflow-hidden hover:bg-gray-200 rounded-3xl p-2 flex-25`}
                    onClick={()=>handleClick(1)}>
                    Tournois
                </p>
                <p className={`${isActive===2 ? 'bg-gray-200':''} hover:underline hover:cursor-pointer hover:text-[#0F70AC] text-center max-sm:text-[15px] bold overflow-hidden hover:bg-gray-200 rounded-3xl p-2 flex-25`}
                    onClick={()=>handleClick(2)}>
                    Membres
                </p>
                <p className={`${isActive===3 ? 'bg-gray-200':''} hover:underline hover:cursor-pointer hover:text-[#0F70AC] text-center max-sm:text-[15px] bold overflow-hidden hover:bg-gray-200 rounded-3xl p-2 flex-30`}
                    onClick={()=>handleClick(3)}>
                    A propos
                </p>
                <p className={`${isActive===4 ? 'bg-gray-200':''} hover:underline hover:cursor-pointer hover:text-[#0F70AC] text-center max-sm:text-[15px] bold overflow-hidden hover:bg-gray-200 rounded-3xl p-2 flex-10`}
                    onClick={()=>handleClick(4)}>
                    Infos
                </p>
            </nav>
        </>
    )
}