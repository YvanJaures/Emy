"use client"
import { MdLogout } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";
export default function ProfileCard(props:{imgUrl:string,name:string,email:string,edit:string}){
    return(
        <div className="flex flex-row flex-wrap w-full h-fit jutsify-center items-center gap-5 rounded-xl p-5 min-w-20 shadow-xl">
            <span className="flex justify-center items-center rounded-full flex-30">
                <img src={props.imgUrl} alt="image de profil" className="w-[150px] object-contain"/>
            </span>
            <span className="flex flex-col flex-50 justify-evenly items-start h-full">
                <h2 className="text-[24px] bold">
                    {props.name}
                </h2>
                <p className="flex-wrap">
                    {props.email}
                </p>
                <p className="text-green-500">
                    en ligne
                </p>
            </span>
            <div className="flex flex-20 justify-between items-center">
                <span className="border border-black-800 rounded-xl p-1">
                    <TbUserEdit className={props.edit+" hover:cursor-pointer"} onClick={()=>(alert('edit'))}/>
                </span>
                <span className="border border-black-800 rounded-xl p-1">
                    <MdLogout className="hover:cursor-pointer" onClick={()=>(alert('logout'))}/>
                </span>
                <span className="border border-black-800 rounded-xl p-1">
                    <AiOutlineUserDelete className="hover:cursor-pointer" onClick={()=>(alert('delete'))}/>
                </span>
            </div>
        </div>
    )
}