"use client"
import { MdLogout } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";
import { useState } from "react";
import { deconnexion } from "@/fetchs/global";
export default function ProfileCard(props:{imgUrl:string,name:string,user_name:string,email:string,edit:string}){
const [avatar,setAvatar]=useState(props.imgUrl)
    return(
        <div className="flex flex-row flex-wrap w-full h-fit
            jutsify-center items-center gap-5 rounded-xl p-5 min-w-20 shadow-xl">
            <span className="flex justify-center items-center rounded-full flex-30">
                <img src={avatar} alt="image de profil" 
                    className="w-[150px] object-contain"
                    onError={(e) => {setAvatar("/assets/avatars/avatar_prof_2.png")}}/>
            </span>
            <span className="flex flex-col flex-50 justify-evenly items-start h-full gap-3">
                <h2 className="text-[35px] bold">
                    {props.name}
                </h2>
                <p className="flex-wrap">
                    {props.email}
                </p>
                <p className="flex-wrap italic">
                    @{props.user_name}
                </p>
                <p className="text-green-500">
                    en ligne
                </p>
            </span>
            <div className="flex flex-col flex-20 justify-evenly items-center gap-5">
                <span className="border border-black-800 rounded-xl p-1 w-50 gap-2 flex justify-center 
                    items-center hover:cursor-pointer"  onClick={()=>(alert('edit'))}>
                    <TbUserEdit className={props.edit+" hover:cursor-pointer"}/>
                    MODIFIER
                </span>
                <span className="border border-black-800 rounded-xl p-1  w-50 gap-2 flex justify-center 
                    items-center hover:cursor-pointer"  onClick={async ()=>await deconnexion()}>
                    <MdLogout className="hover:cursor-pointer"/>
                    DECONNEXION
                </span>
                <span className="border border-black-800 rounded-xl p-1  w-50 gap-2 flex justify-center 
                    items-center hover:cursor-pointer" onClick={()=>(alert('delete'))}>
                    <AiOutlineUserDelete className="hover:cursor-pointer"/>
                    SUPPRIMER
                </span>
            </div>
        </div>
    )
}