"use client"
import { MemberDTO } from "@/hooks/Type_DTO";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import {useEffect, useState} from 'react'
import { SlMagnifier } from "react-icons/sl";
import { deleteMemberCommunity } from "@/fetchs/global";
import Confirmation from "@/components/organisms/Confirmation";
import OnError from "../organisms/OnError";
type Props={
    title:string,
    headers:Array<string>,
    datas:Array<MemberDTO>,
    id_community:number
}
export default function TableUser({title,headers,datas,id_community}:Props){
  const [checked,setChecked]=useState(false)
  const [search,setSearch]=useState("")
  const [members,setMembers]=useState<MemberDTO[]>(datas)
  const [showConfirm,setShowConfirm]=useState(false)
  const [confirm,setConfirm]=useState(false)
  const [toDelete,setToDelete]=useState("")
  const [onError, setOnError] = useState(false);
  const [onPopUp,setOnPopUp]=useState(false)
  const deleteMember=async(user_name:string,confirm:boolean)=>{
    try{
        console.log(confirm)
        if(!confirm) return
        if(!await deleteMemberCommunity(user_name,id_community)){
          alert('suppression impossible')
          return
        }
        setConfirm(!confirm)
        const members2=members.filter(member => member.user_name !==user_name)
        setMembers(members2) 
      }catch(error){
        console.log(error)
        setOnError(true)
        setOnPopUp(true)
      }
  } 
  useEffect(()=>{
    setMembers(datas)
    const members1 = datas?.sort((a, b) =>
      a.user_name.toLowerCase().localeCompare(b.user_name.toLowerCase())
    );
    const members = members1?.filter(member =>
      member.user_name.toLowerCase().includes(search.trim().toLowerCase())
    );
    setMembers(members) 
    datas=members
  },[datas,search])
  useEffect(()=>{
    (async()=>deleteMember(toDelete,confirm))()
  },[toDelete,confirm])
  const flex=['10','25','10','20','5','20']
  console.log(showConfirm)
    return(
      <>
        <table className={`w-full ${onError ? "pointer-events-none blur-md" : ""} ${onPopUp ? "pointer-events-none blur-md" : ""} `}>
            <caption className="bold gap-5 flex flex-col">
              <div className="flex gap-3 justify-center items-center w-full">
                <label htmlFor="input">Rechercher</label>
                <input type="search" 
                  placeholder="Entrer l'identifiant du membre"
                  onChange={(e)=>(setSearch(e.target.value ? e.target.value:''))}
                  className="outline-red-200 border rounded-xl flex-70 p-2"/>
                <SlMagnifier />
              </div>
              {title.toUpperCase()}
            </caption>
            <thead className="bg-gray-200 p-2 flex gap-5 justify-center items-center w-full">
              <tr className="w-full flex justify-start items-center">
                <th className="flex-5">
                  <label>Tous</label>
                  <input type="checkbox"
                  onChange={()=>(setChecked(!checked))}
                  />
                </th>
                {headers?.map((header,i)=>(
                  <th className={"flex-"+flex[i]+" justify-start items-center "} key={i}
                  onClick={()=>('e')}
                  >
                    <CiFilter/>{header} 
                  </th>
                ))}
              </tr>
            </thead>
            <tbody id="tableBody">
              {(!members || members.length===0) && (
                <tr className="w-full flex text-xl bold italic p-3 justify-center items-center">
                  <td>Aucun membre</td>
                </tr>
              )
              }
              {members?.map((data) => (
                <tr key={data?.user_name} className="m-0 flex w-full has:input['checked']:bg-black-200">
                  <td className="p-2 flex-5 flex text-center justify-start items-center">
                    <input type="checkbox"/>
                  </td>
                  <td className="p-2 flex-10 flex text-center justify-start items-center overflow-hidden">
                    {data?.user_name}
                  </td>
                  <td className="p-2 flex-25 flex text-center justify-start items-center overflow-hidden">
                    {data?.email}
                  </td>
                  <td className="p-2 flex-10 flex text-center justify-start items-center overflow-hidden">
                    {data?.birth_date ? data?.birth_date?.toString(): 'aucun'}
                  </td>
                  <td className="p-2 flex-20 flex text-center justify-start items-center overflow-hidden">
                    {data?.phone ? data.phone: 'aucun.'}
                  </td>
                  <td className="p-2 flex-5 flex text-center justify-start items-center overflow-hidden">
                    {data?.Employee ? "oui": 'non'}
                  </td>
                  <td className="p-2 flex-20 flex text-center justify-start items-center overflow-hidden">
                    {data?.address ? data.address: 'aucun.'}
                  </td>
                  <td className="p-2 flex-5 p-2 text-center flex justify-start items-center">
                    <RiDeleteBin2Line
                      className="text-red-500 hover:cursor-pointer"
                      onClick={()=>{setShowConfirm(!showConfirm);
                          setToDelete(data?.user_name ? data?.user_name:"")
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        <Confirmation
        title="Suppression"
        message="Voulez vous vraiment supprimé ce membre de 
          la communauté?"
          onConfirmed={(res)=>{
            setConfirm(res);
            setShowConfirm(res)}}
          showConfirm={showConfirm}/>
        {onError && (
          <OnError
            title="Suppression"
            message="Une erreur est survenue! Impossible de supprimer cet utilisateur. Veuillez réessayer plus tard."
            onConfirmed={(res) =>{ setOnError(res);setOnPopUp(res)}}
          />
        )}
      </>
    )
}