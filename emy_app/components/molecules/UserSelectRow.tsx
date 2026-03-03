"use client"
import { MemberDTO } from "@/hooks/Tpe_MemberDTO"
import { Community_memberDTO } from "@/hooks/Type_DTO"
import { useState } from "react"
export default function UserSelectRow(props: {users:Array<Community_memberDTO>,className:string}){
const [user_name,setUser_name]=useState("")
const [avatar,setAvatar]=useState<string[]>([])
console.log(props.users)
function getUser_name(i:Number){
    const pUser=document.getElementById(`user_name${i}`)
    return pUser?.textContent.slice(1,pUser?.textContent.length-1)
}
    return(
        <ul className={`w-full overflow-y-scroll flex flex-col justify-start items-center p-2 `+props.className} >
            {props.users.map((user,i)=>(
                <li key={i} className="flex list-none flex-row w-full 
                    justify-center items-center peer-has-checked:bg-gray-500">
                    <span className="flex-10 peer">
                        <input type="radio" name="selected" onChange={()=>(setUser_name(""+getUser_name(i)))} required/>
                    </span>
                    <span className="flex-20">
                        <img src={user?.avatar ?? "/assets/avatars/avatar_prof_2.png"}
                         alt="image de profil" className="flex-20 w-[35px]"
                         onError={(e) => { setAvatar(props.users.map(()=>(props.users[i].avatar="/assets/avatars/avatar_prof_2.png")
                        ))}} />
                    </span>
                    <p className="flex-70" id={`user_name`+{i}}>@{user?.user_name}</p>
                </li>
            ))}
        </ul>
    )
}