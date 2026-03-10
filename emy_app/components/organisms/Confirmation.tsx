"use client"
import { useState,useEffect } from "react";
import Button from "../atoms/Button";

type Props={
    title:string,
    message:string,
    onConfirmed:(conf:boolean)=>void,
    showConfirm:boolean
}
export default function Confirmation({ title, message,onConfirmed,showConfirm}: Props){
    const [isVisible,setIsVisible]=useState(false)
    useEffect(()=>{
        setIsVisible(showConfirm)
        console.log(showConfirm) 
    },[showConfirm])

    const handleCancel=()=>{
        setIsVisible(false)
        showConfirm=false
        console.log(showConfirm)
        onConfirmed(false)
    }
    
    const handleConfirm=()=>{
        setIsVisible(false)
        showConfirm=false
        console.log(showConfirm)
        onConfirmed(true)
    }
       
    if(!isVisible) return
    return(
      <div className={"bg-white flex absolute flex-col justify-center"+
            "items-center gap-5 top-1/2 left-1/2 "+
            "-translate-x-1/2 -translate-y-1/2 p-2 rounded-sm"}>
        <h2 className="bold text-[30px] text-center bg-gray-200 w-full">
            {title}
        </h2>
        <span className="text-xl p-2 text-center text-wrap">
            {message}
        </span>
        <span className="flex gap-10 bg-gray-200 w-full p-3
                justify-center items-center">
            <Button
            title="Confirmer"
            className="bg-green-700 border-none"
            onClick={()=>handleConfirm()}/>
            <Button
            title="Annuler"
            className="bg-red-700 border-none"
            onClick={()=>handleCancel()}/>
        </span>
      </div>

    )
}