"use client"
import { MemberDTO } from "@/hooks/Type_DTO";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import {use, useEffect, useState} from 'react'
import { SlMagnifier } from "react-icons/sl";
import { deleteMemberCommunity } from "@/fetchs/global";
import Confirmation from "@/components/organisms/Confirmation";
import OnError from "../organisms/OnError";
import InputText from "../atoms/InputText";
import LoadText from "@/Loading/LoadText";
import LoadRoundButton from "@/Loading/LoadRoundButton";
import Alert from "./Alert";
import { NoResult } from "./NoResult";
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
  const [sorting,setSorting]=useState(-1)
  const [onError, setOnError] = useState(false);
  const [onPopUp,setOnPopUp]=useState(false)

  const handleDelete=(data:MemberDTO)=>{
    setShowConfirm(!showConfirm);
    setToDelete(data?.user_name ? data?.user_name:"")
  }

  const deleteMember=async(user_name:string,confirm:boolean)=>{
    try{
        if(!members) return
        if(!user_name) return
        if(!confirm) return
        if(!await deleteMemberCommunity(user_name,id_community)){
          setOnError(true)
          return
        }
        setConfirm(!confirm)
        const members2=members.filter(member => member.user_name !==user_name)
        setMembers(members2)
        setValidationMessage(toDelete+' a été retiré avec succés') 
        setToDelete('')
      }catch(error){
        //console.log(error)
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
  },[datas])

  useEffect(()=>{
    (async()=>deleteMember(toDelete,confirm))()
  },[toDelete,confirm])

  const handleSort=(index:number)=>{
    if(!datas) return
    console.log('sorted by '+sorting)
    if(sorting===index) {
      setSorting(-1)
      setMembers(datas)
      return
    }
   
    const sortedMembers = [...datas].sort((a, b) => {
      if(index===0) return a.user_name.toLowerCase().localeCompare(b.user_name.toLowerCase())
      if(index===1) return a.email.toLowerCase().localeCompare(b.email.toLowerCase())
      if(index===2) return new Date(a.birth_date || '').getTime() - new Date(b.birth_date || '').getTime()
      if(index===3) return a.phone?.localeCompare(b.phone?.toString() || '') || 0
      if(index===4) return (a.Employee === b.Employee) ? 0 : a.Employee ? -1 : 1
      if(index===5) return a.address?.localeCompare(b.address?.toString() || '') || 0
      return 0
    })
    setSorting(index)
    setMembers(sortedMembers)
  }
    return(
      <>
        <table className={`w-full ${onError ? "pointer-events-none blur-md" : ""} ${onPopUp ? "pointer-events-none blur-md" : ""} max-sm:text-[12px] `}>
            <caption className="bold gap-5 flex flex-col">
              <div className="flex gap-3 justify-center items-center w-full">
                <label htmlFor="input">Rechercher</label>
                <input type="search" 
                  placeholder="Entrer l'identifiant du membre"
                  onChange={(e)=>(setSearch(e.target.value ? e.target.value:''))}
                  className="outline-red-200 border rounded-xl flex-70 p-2 h-7"/>
                <SlMagnifier />
              </div>
              {title.toUpperCase()}
            </caption>
            <thead className="bg-gray-200 p-1 flex gap-5 justify-center items-center w-full h-10 dark:bg-gray-800">
              <tr className="w-full flex justify-center items-center">
                <th className="flex-5 hover:cursor-pointer hidden">
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
                <th className={`${sorting===0 ? "text-[#0F70AC] ":''}`+"flex-10 flex items-center justify-center hover:cursor-pointer "}
                  onClick={()=>(handleSort(0))}
                  >
                    Identifiant<CiFilter/> 
                </th>
                <th className={`${sorting===1 ? "text-[#0F70AC] ":''}`+"flex-25 flex items-center justify-center hover:cursor-pointer "}
                  onClick={()=>(handleSort(1))}
                  >
                    Email<CiFilter/> 
                </th>
                <th className={`${sorting===2 ? "text-[#0F70AC] ":''}`+"flex-10 flex items-center justify-center max-sm:hidden hover:cursor-pointer "}
                  onClick={()=>(handleSort(2))}
                  >
                    Naissance<CiFilter/> 
                </th>
                <th className={`${sorting===3 ? "text-[#0F70AC] ":''}`+"flex-20 flex justify-center items-center max-sm:hidden hover:cursor-pointer "}
                  onClick={()=>(handleSort(3))}
                  >
                    Telephone<CiFilter/> 
                </th>
                <th className={`${sorting===4 ? "text-[#0F70AC] ":''}`+"flex-5 flex justify-center items-center hover:cursor-pointer "}
                  onClick={()=>(handleSort(4))}
                  >
                    Employe?<CiFilter/> 
                </th>
                <th className={`${sorting===5 ? "text-[#0F70AC] ":''}`+"flex-20 flex justify-center items-center hover:cursor-pointer "}
                  onClick={()=>(handleSort(5))}
                  >
                    Adresse<CiFilter/> 
                </th>
                </tr>
            </thead>
            <tbody id="tableBody" className="">
              {(members && members.length===0 && !loading) && (
                <tr className="w-full flex text-xl bold italic justify-center items-center">
                  <td>
                    <NoResult/>
                  </td>
                </tr>
              )
              }
              {members?.map((data) => (
                <tr key={data?.user_name} className="m-0 flex w-full has:input['checked']:bg-black-200 mb-2 hover:bg-black/10 hover:cursor-pointer pl-2"
                  >
                  <td className="p-1 flex-5 flex text-center justify-start items-center hidden">
                    <input type="checkbox"/>
                  </td>
                  <td className="p-1 flex-10 flex text-start justify-start items-center overflow-hidden max-sm:text-[10px]">
                    <p className="text-ellipsis overflow-hidden line-clamp-1">{data?.user_name}</p>
                  </td>
                  <td className="p-1 flex-25 flex text-start justify-start items-center overflow-hidden max-sm:text-[10px]">
                    <p className="text-ellipsis overflow-hidden line-clamp-1">{data?.email}</p>
                  </td>
                  <td className="p-1 flex-10 flex text-center justify-start items-center overflow-hidden text-nowrap max-sm:text-[10px] max-sm:hidden">
                    <p className="text-ellipsis overflow-hidden line-clamp-1 ">
                      {data?.birth_date ? (new Date(data?.birth_date)).toLocaleDateString(): 'aucun'}
                    </p>
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden max-sm:text-[10px] max-sm:hidden">
                    <p className="text-ellipsis overflow-hidden line-clamp-1 ">
                      {data?.phone ? data.phone: 'aucun.'}
                    </p>
                  </td>
                  <td className="p-1 flex-5 flex text-center justify-start items-center overflow-hidden max-sm:text-[10px]">
                    <p className="text-ellipsis overflow-hidden line-clamp-1">
                      {data?.Employee ? "oui": 'non'}
                    </p>
                  </td>
                  <td className="p-1 flex-20 flex text-center justify-start items-center overflow-hidden max-sm:text-[10px]">
                    <p className="text-ellipsis overflow-hidden line-clamp-1">
                      {data?.address ? data.address: 'aucun.'}
                    </p>
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