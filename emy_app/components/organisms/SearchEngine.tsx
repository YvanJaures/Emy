'use client'
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Search({search,close}:{search?:(value:string)=>void,close:()=>void}){
    const [_search,setSearch]=useState('')
    const handleSearch=()=>{
        if(search) search(_search)
    }
    const handleClose=()=>{
        if(search) search('404')
        close()
    }
    const handleCancel=()=>{
        if(search) search('404')
        setSearch('')
    }
    return(
        <div className="z-150 w-[95%] shadow-xs fixed absolute top-12 left-1/2 -translate-x-1/2 h-10 flex justify-between items-center bg-white dark:bg-gray-800 dark:shadow-white rounded-xl p-2">
            <input type="text" 
                placeholder="recherche..."
                value={_search}
                autoFocus
                onKeyDown={handleSearch}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value)}}
                className=" p-2 flex-80 rounded-xl h-7 max-sm:text-[13px] outline-[#0F70AC]" 
            />
            {_search!=="" && (<IoMdClose 
                title="effacer"
                className="hover:cursor-pointer hover:text-[#0F70AC] size-5 hover:border-white/30 border border-white/10 -translate-x-7 dark:bg-gray-800 shadow-sm rounded-full bg-white min-sm:-translate-x-25"
                onClick={handleCancel}
            />)}
            <IoMdClose 
                title="fermer"
                className="flex-10 hover:cursor-pointer hover:text-[#0F70AC] hover:border-white/30 border border-white/10 rounded-full size-5 p-1/2 mr-2"
                onClick={handleClose}
            />
            <FaMagnifyingGlass 
                title="rechercher"
                className="flex-10 hover:cursor-pointer hover:text-[#0F70AC] hover:border-white/30 border border-white/10 rounded-full size-5 p-1"
                onClick={handleSearch}
            />
        </div>
    )
}