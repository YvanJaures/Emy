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
        <div className="z-150 shadow-xs fixed absolute top-12 left-0 translate-x-1/2 flex justify-between items-center w-1/2 bg-white dark:bg-gray-800 dark:shadow-white rounded-xl p-2 max-sm:w-3/4 max-sm:translate-x-12">
            <input type="text" 
                placeholder="recherche..."
                value={_search}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
                className="border border-white p-2 flex-80 outline-[#0F70AC] rounded-xl"
            />
            {_search!=="" && (<IoMdClose 
                className="flex-10 hover:cursor-pointer hover:text-[#0F70AC] -translate-x-10 dark:bg-gray-800 shadow-sm rounded-full bg-white min-sm:-translate-x-15"
                onClick={handleCancel}
            />)}
            <IoMdClose 
                className="flex-10 hover:cursor-pointer hover:text-[#0F70AC]"
                onClick={handleClose}
            />
            <FaMagnifyingGlass 
                className="flex-10 hover:cursor-pointer hover:text-[#0F70AC]"
                onClick={handleSearch}
            />
        </div>
    )
}