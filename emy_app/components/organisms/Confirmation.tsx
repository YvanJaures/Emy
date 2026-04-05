"use client"
import { useState,useEffect } from "react";
import Button from "../atoms/Button";
import { ImWarning } from "react-icons/im";

type Props={
    title:string,
    message:string,
    onConfirmed:(conf:boolean)=>void,
    showConfirm:boolean
}
/**
 *  Valide le choix de l'utilisateur
 * @param title titre du pop up 
 * @param message message à afficher
 * @param showConfirm boolean de visibilité du pop up 
 * @param onConfirmed Si le message est confirmé 
 * @returns true si confirmation
 */
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
    <>
    <div className="absolute fixed top-0 left-0 w-dvw h-lvh backdrop-blur-md bg-black/5 z-20">
    </div>
    <div className={"z-99 border border-orange-400 dark:bg-gray-800 bg-white flex absolute fixed flex-col justify-center"+
            "items-center top-1/2 left-1/2 "+
            "-translate-x-1/2 -translate-y-1/2 p-2 rounded-sm"}>
        <h2 className="bold text-center w-full bg-orange-400/20 flex justify-start p-1 items-center gap-1 text-md">
            <ImWarning className="text-orange-400 w-3 h-3"/>

            {title}
        </h2>
        <span className="text-xl p-2 text-center text-wrap bg-orange-400/20">
            {message}
        </span>
        <span className="flex gap-10  w-full p-3
                justify-center items-center bg-orange-400/20">
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
    </>
    )
}