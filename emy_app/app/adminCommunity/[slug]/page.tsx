"use client"
import type { Metadata } from "next";
import React, { useState, useEffect } from "react";

import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import Footer from "@/components/organisms/Footer";
import MetaData from "@/components/organisms/MetaData";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import UserSelectRow from "@/components/molecules/UserSelectRow";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import AdminList from "@/components/organisms/AdminList";
import type { AdminDTO } from "@/hooks/Type_AdminDTO";
import { MemberDTO } from "@/hooks/Tpe_MemberDTO";
import { Community_memberDTO, CommunityDTO } from "@/hooks/Type_DTO";
import { useAuth } from "@/hooks/useAuth";
import notFound from "@/app/not-found";

type Props={
    params:Promise<{slug:string}>
}
export async function getCommunities(){
    const res=await fetch('/api/communities',{
        credentials:"include"
    })
    if(res.ok){
        const communities= await res.json()
        return communities
    }
    return null
}
const communautes=await getCommunities()
const communities = communautes?.reduce((acc:CommunityDTO[],communaute:CommunityDTO) => {
  acc[communaute.id_community] = communaute
  return acc;
}, {});
async function generateMetadata(
    {params}:Props
): Promise<Metadata>{
    const {slug}=await params
    const community=communities[slug as keyof typeof communities]

    if(!community){
        return{
            title:"Communauté non trouvé",
            description:"Cett communauté n'existe pas."
        }
    }

    return{
        title:community.name,
        description:community.details,
        openGraph:{
            title:community.name,
            description:community.details,
            images:[
                {
                    url:community.avatar,
                    width:1200,
                    height:630,
                },
            ],
            type:"article"
        },
    }
}

export default function AdminCommunity({params}:Props) {
  const [admins, setAdmins] = useState<AdminDTO[]>([]);
  const [members,setMembers] = useState<Community_memberDTO[]>([]);
  const [community,setCommunity]=useState<CommunityDTO|null>(null)
  const [display,setDisplay]=useState("hidden")
  const [slug,setSlug]=useState("")
  const [_loading, setLoading] = useState(true);
  const {member,loading}=useAuth();
  //const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";
  //const ADMINS_URL = `${API_BASE}/api/admins`; //  adapte selon ton backend
  const ADMINS_URL = `/api/admins`; //  adapte selon ton backend
 /* 
  useEffect(() => {
  (async () => {
      try {
        const res = await fetch(ADMINS_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Erreur chargement admins");
        const data = (await res.json()) as AdminDTO[];
        setAdmins(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [ADMINS_URL]);*/
    useEffect(()=>{
        (async ()=>{
        try{
          const  {slug}=await params
          console.log("SLUG: ",slug)
          const selectedCommunity =
          communities[slug as keyof typeof communities]
          setSlug(slug)
          setCommunity(selectedCommunity)
          setMembers(selectedCommunity?.Community_member ?? [])
          setAdmins(selectedCommunity?.Admin ?? [])
          console.log(selectedCommunity?.Admin)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      })()
    },[params,communities]);
  const handleDelete = async (id_admin: number) => {
    const admin = admins.find((a) => a.id_admin === id_admin);
    if (!admin) return;

    try {
      const res = await fetch('/api/admin', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id_admin: admin.id_admin,
          user_name: admin.user_name,
          id_community: admin.id_community,
        }),
      });

      if (!res.ok) throw new Error("Suppression échouée");
      setAdmins((prev) => prev.filter((a) => a.id_admin !== id_admin));
    } catch (e) {
      console.error(e);
      alert("Impossible de supprimer cet administrateur.");
    }
  };

    if(!community) return notFound()
      if(loading) return <LoadingAnimation/>
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}
      <main className="mx-auto w-full max-w-6xl px-6 py-8 mb-15">
        {/* Bandeau haut pâle + bouton vert */}
        <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
          <div className="flex justify-center">
            <Button
              icon={<span className="text-base">+</span>}
              title="Ajouter un administrateur"
              color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
              className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
              onClick={()=>(setDisplay('flex'))}
            />
          </div>
        </section>

        {/* Grand bloc image + titre pill + liste */}
        <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
          <div className="flex justify-center pt-2">
            <SectionPillTitle text="Liste des administrateurs" />
          </div>
          <AdminList admins={admins} onDelete={handleDelete} />
        </ImageBackground>
      </main>

      <Footer />
      <div className={`flex-col justify-center items-center shadow-xl absolute 
          bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] 
          p-2 rounded-xl z-50 overflow-visible  `+display} >
          <Title as="h2" className="p-1 flex-5">Selectionner un nouvel admin</Title>
          <span className="flex justify-center items-center p-2 gap-5">
            <Button title="Ajouter" className="w-[100%] h-5 border-none bg-green-400" type="submit"/>
            <Button title="Annuler" className="w-[100%] h-5 border-none bg-red-500"
              onClick={()=>(setDisplay('hidden'))}/>
          </span>
          <UserSelectRow users={members} className="flex-90"/>
      </div>
    </div>
  );
}