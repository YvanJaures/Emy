"use client"
import { MemberDTO } from "@/hooks/Type_DTO";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import {useEffect, useState} from 'react'
import { SlMagnifier } from "react-icons/sl";
import { deleteMemberCommunity } from "@/fetchs/global";
import Confirmation from "@/components/organisms/Confirmation";
import OnError from "../organisms/OnError";
import InputText from "../atoms/InputText";
import LoadText from "@/Loading/LoadText";
import LoadRoundButton from "@/Loading/LoadRoundButton";
import Alert from "./Alert";
type Props={
    title:string,
    headers:Array<string>,
    datas:Array<MemberDTO>|null,
    id_community:number,
    loading?:boolean
}
export default function TableUser({title,headers,datas,id_community,loading}:Props){
  const [checked,setChecked]=useState(false)
  const [search,setSearch]=useState("")
  const [members,setMembers]=useState<MemberDTO[]|null>(datas)
  const [showConfirm,setShowConfirm]=useState(false)
  const [confirm,setConfirm]=useState(false)
  const [toDelete,setToDelete]=useState("")
  const [validationMessage,setValidationMessage]=useState('')
  const [onError, setOnError] = useState(false);
  const [onPopUp,setOnPopUp]=useState(false)

  const handleDelete=(data:MemberDTO)=>{
    setShowConfirm(!showConfirm);
    setToDelete(data?.user_name ? data?.user_name:"")
  }

  const deleteMember=async(user_name:string,confirm:boolean)=>{
    try{
        if(!members) return
        console.log(confirm)
        if(!user_name) return
        if(!confirm) return
        if(!await deleteMemberCommunity(user_name,id_community)){
          alert('suppression impossible')
          return
        }
        setConfirm(!confirm)
        const members2=members.filter(member => member.user_name !==user_name)
        setMembers(members2)
        setValidationMessage(toDelete+' a été retiré avec succés') 
        setToDelete('')
      }catch(error){
        console.log(error)
        setOnError(true)
        setOnPopUp(true)
      }
  } 

  useEffect(()=>{
    if(loading) return
    if(!datas) return
    const members1 = datas?.sort((a, b) =>
      a.user_name.toLowerCase().localeCompare(b.user_name.toLowerCase())
    );
    const members = members1?.filter(member =>
      member.user_name.toLowerCase().includes(search.trim().toLowerCase())
    );
    setMembers(members) 
    datas=members
  },[search])

  useEffect(()=>{
    setMembers(datas)
    console.log("setted users")
  },[datas])

  useEffect(()=>{
    (async()=>deleteMember(toDelete,confirm))()
  },[toDelete,confirm])

    return(
      <>
        <table className={`w-full ${onError ? "pointer-events-none blur-md" : ""} ${onPopUp ? "pointer-events-none blur-md" : ""} max-sm:text-[11px]`}>
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
            <thead className="bg-gray-200 p-1 flex gap-5 justify-center items-center w-full dark:bg-gray-800">
              <tr className="w-full flex justify-center items-center">
                <th className="flex-5">
                  <label>Tous</label>
                  <input type="checkbox"
                  onChange={()=>(setChecked(!checked))}
                  />
                </th>
                {/*headers?.map((header,i)=>(
                  <th className={"flex-"+flex[i]+" justify-start items-center "} key={i}
                  onClick={()=>('e')}
                  >
                    <CiFilter/>{header} 
                  </th>
                ))*/}
                <th className={"flex-10 flex justify-start items-center "}
                  onClick={()=>('e')}
                  >
                    Identifiant<CiFilter/> 
                </th>
                <th className={"flex-25 flex  justify-start items-center "}
                  onClick={()=>('e')}
                  >
                    Email<CiFilter/> 
                </th>
                <th className={"flex-10 flex justify-start items-center max-sm:hidden"}
                  onClick={()=>('e')}
                  >
                    Naissance<CiFilter/> 
                </th>
                <th className={"flex-20 flex justify-start items-center max-sm:hidden"}
                  onClick={()=>('e')}
                  >
                    Telephone<CiFilter/> 
                </th>
                <th className={"flex-5 flex justify-start items-center "}
                  onClick={()=>('e')}
                  >
                    Employe?<CiFilter/> 
                </th>
                <th className={"flex-20 flex justify-start items-center "}
                  onClick={()=>('e')}
                  >
                    Adresse<CiFilter/> 
                </th>
                </tr>
            </thead>
            <tbody id="tableBody">
              {(members && members.length===0 && !loading) && (
                <tr className="w-full flex text-xl bold italic p-3 justify-center items-center">
                  <td>Aucun membre</td>
                </tr>
              )
              }
              {members?.map((data) => (
                <tr key={data?.user_name} className="m-0 flex w-full has:input['checked']:bg-black-200 mb-2 hover:bg-black/10 hover:cursor-pointer"
                  onClick={()=>handleDelete(data)}>
                  <td className="p-1 flex-5 flex text-center justify-start items-center">
                    <input type="checkbox"/>
                  </td>
                  <td className="p-1 flex-10 flex text-center justify-start items-center overflow-hidden">
                    {data?.user_name}
                  </td>
                  <td className="p-1 flex-25 flex text-center justify-start items-center overflow-hidden">
                    {data?.email}
                  </td>
                  <td className="p-1 flex-10 flex text-center justify-start items-center overflow-hidden max-sm:hidden">
                    {data?.birth_date ? (new Date(data?.birth_date)).toLocaleDateString(): 'aucun'}
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden max-sm:hidden">
                    {data?.phone ? data.phone: 'aucun.'}
                  </td>
                  <td className="p-1 flex-5 flex text-center justify-start items-center overflow-hidden">
                    {data?.Employee ? "oui": 'non'}
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden">
                    {data?.address ? data.address: 'aucun.'}
                  </td>
                  <td className="p-1 flex-5 p-1 text-center flex justify-start items-center">
                    <RiDeleteBin2Line
                      className="text-red-500 hover:cursor-pointer"
                      onClick={()=>{handleDelete(data)
                      }}
                    />
                  </td>
                </tr>
              ))}
              {(loading) && ([...Array(10)].map((_,index) => (
                <tr key={index} className="m-0 flex w-full has:input['checked']:bg-black-200 mb-2 hover:bg-black/10 hover:cursor-pointer"
                 >
                  <td className="p-1 flex-5 flex text-center justify-start items-center">
                     <LoadRoundButton/>
                  </td>
                  <td className="p-1 flex-10 flex text-center justify-start items-center overflow-hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-25 flex text-center justify-start items-center overflow-hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-10 flex text-center justify-start items-center overflow-hidden max-sm:hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden max-sm:hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-5 flex text-center justify-start items-center overflow-hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden">
                    <LoadText cn='w-full'/>
                  </td>
                  <td className="p-1 flex-5 p-1 text-center flex justify-start items-center">
                    <LoadRoundButton/>
                  </td>
                </tr>
              )))}
            </tbody>
            <tfoot className="bg-gray-200 p-1 flex gap-5 justify-center items-center w-full dark:bg-gray-800">
              <tr>
                <td>
                  <label htmlFor="input">Lignes</label>
                  <input type="text" name="lgnes" id="lignes"
                   className="bg-white rounded-xl p-1 text-center dark:bg-gray-700" />
                </td>
              </tr>
            </tfoot>
        </table>
        <Confirmation
        title="Suppression"
        message={`Voulez vous vraiment supprimé ${toDelete} de la communauté?`}
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
        {validationMessage!=="" &&<Alert message={validationMessage} onMes={()=> setValidationMessage('')} error={false}/>}
      </>
    )
}