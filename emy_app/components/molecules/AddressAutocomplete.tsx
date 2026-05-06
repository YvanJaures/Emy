"use client"

import { useEffect, useRef, useState } from "react";
import InputText from "../atoms/InputText";
import { IoMdClose } from "react-icons/io";
import { autoComplete, getMemberLocation } from "@/fetchs/global";
import {Location} from '@/hooks/Type_DTO'
import { BiTargetLock } from "react-icons/bi";

type Props = {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  onNew?:(location:string)=>void
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function AddressAutocomplete({
  label,
  containerClassName,
  inputClassName,
  onNew,
  ...props
}: Props){
     
    const [value,setValue]=useState<string>('')
    const [myLoc,setMyLoc]=useState<string|null>(null)
    const [loading,setLoading]=useState(false)
    const [load,setLoad]=useState(false)
    const [suggestions,setSuggestions]=useState<string[]|null>(null)
    const [show,setShow]=useState(false)
    const ulRef=useRef(null)

    const handleMemberLocation=async ()=>{
        setLoading(true)
        if(myLoc){
            setValue(myLoc)
            setLoading(false)
            setSuggestions([myLoc])
            if(onNew) onNew(myLoc)
            return 
        }
        const myLocation: Location|null=await getMemberLocation()
        if(myLocation && myLocation?.displayName){
            setMyLoc(myLocation.displayName)
            setLoading(false)
            if(onNew) onNew(myLocation.displayName)
            return setValue(myLocation.displayName)
        }
        setLoading(false)

    }
    const handleChange=async (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setLoad(true)
        const entry=e.target.value
        setValue(entry)
        if(!entry) return 
        setTimeout(async ()=>{
            const suggestions=await autoComplete(entry)
            if(suggestions){
                setLoad(false)
                return setSuggestions(suggestions)
            }
            setLoad(false)
        },300)
    }
    const handleCancel=()=>{
        setValue("")
        if(onNew) onNew('')
        setSuggestions(null)
    }
    const handleBlur=()=>{
        const res=suggestions?.some((s)=>s===value)
        if(!myLoc && (!suggestions || suggestions?.length===0) || !res){
            setTimeout(()=>setShow(false), 150)
            setValue('')
            if(onNew) onNew('')
        }
        
        setTimeout(()=>setShow(false), 150)
    }
    useEffect(()=>{
        if(onNew && value!=='') onNew(value)
    },[value])

    return(
        <div className="flex flex-col h-fit relative">
            <InputText
                value={value}
                onFocus={()=>setShow(true)}
                onBlur={handleBlur}
                onChange={handleChange}
                label={label}
                containerClassName={containerClassName}
                inputClassName={inputClassName}
                list='addresses'
                {...props}
            />
            {value!=="" &&
            (<IoMdClose 
                title="effacer tout"
                className="dark:text-white hover:cursor-pointer hover:text-[#0F70AC] 
                size-5 hover:border-white/30 border border-white/10  
                dark:bg-gray-800 shadow-sm rounded-full bg-white z-99
                absolute  right-1 top-4"
                onClick={handleCancel}
            />)}
            <BiTargetLock  
                title="Ma localisation actuelle"
                className={`${loading? 'animate-spin':''} dark:text-white hover:cursor-pointer hover:text-[#0F70AC] 
                size-5 hover:border-white/30 border border-white/10  
                dark:bg-gray-800 shadow-sm rounded-full bg-white
                absolute right-1 top-4`}
                onClick={handleMemberLocation}
            />
            {value!==""&& show &&(
                <ul
                    ref={ulRef}
                    className="hover:cursor-pointer dark:text-white
                    size-5 hover:border-white/30 border border-white/10  
                    dark:bg-gray-800 shadow-sm bg-white z-99 animate-fade-in transition-all duration-200 ease-in-out
                    absolute top-full left-0 w-full flex flex-col gap-2 h-fit justity-start items-start p-2"
                >
                    {suggestions ? (
                        suggestions.map((sug,i)=>(
                            <li 
                                key={i}
                                onMouseDown={e => e.preventDefault()} 
                                className="hover:bg-black/10 dark:hover:bg-white/10 w-full text-sm p-1"
                                onClick={()=>{setValue(sug);setShow(false)}}>

                                {sug}

                            </li>
                        ))
                        ):(
                            <li 
                                className=" w-full text-center text-sm"
                                onClick={()=>setShow(false)}
                            >
                                {load?(
                                    <div className="bg-gray-200 dark:bg-white/20 animate-pulse w-full h-6">

                                    </div>
                                ):(
                                    'Aucun résultat'    

                                )}

                            </li>

                        )
                    }
                </ul>
            )}
        </div>
    )
}