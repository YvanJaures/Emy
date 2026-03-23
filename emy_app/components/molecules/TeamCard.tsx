"use client";

import React, { useEffect, useState } from "react";
import AppLink from "../atoms/AppLink";
import type { TeamMiniDTO } from "@/hooks/Type_Teams";
import Image from "next/image";
import { MemberDTO, Team_memberDTO, TeamDTO } from "@/hooks/Type_DTO";
import { useConnexion } from "@/hooks/useAuth";
import { addTeamMemberWait } from "@/fetchs/global";
import Confirmation from "../organisms/Confirmation";
import Button from "../atoms/Button";

export default function TeamCard({ team,admin }: { team: TeamDTO,admin:boolean }) {
  const {member}=useConnexion()
  const [onConfirmation,SetOnConfirmation]=useState(false)
  const [avatars,setAvatars]=useState(team.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean)
      .slice(0, 4) ?? [])
  console.log(avatars)
  const [isMember,setIsMember]=useState(true)
  useEffect(()=>{
    let is= team.Team_member?.some(
      (tm) => tm.user_name === member?.user_name
    );
      console.log(is)
      console.log(isMember)
      console.log(avatars.length)
      console.log(team)
      setIsMember(is?? false)
  },[])
  const handleJoin=async ()=>{
    if(!team.open) return
    if(isMember) return
    if(!member){
      SetOnConfirmation(true)
      return
    }
    SetOnConfirmation(false)
    const payload={
      id_team:team.id_team,
      user_name:member?.user_name
    }
    await addTeamMemberWait(payload)
    let avatars2=avatars
    avatars2.push(member.avatar)
    setAvatars(avatars2)
    setIsMember(true)
  }
  // Avatars des membres (max 4)
  /*const avatars =
    team.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean)
      .slice(0, 4) ?? [];
*/
  // Slots vides pour compléter à 4 (équipe = 4 joueurs) :contentReference[oaicite:3]{index=3}
  const emptySlots = Math.max(0, 4 - avatars.length);

  return (
    <div className="w-[160px] p-2 rounded-lg shadow-sm">
      {/* Image thumbnail (placeholder) */}
      <div className="h-[90px] w-full overflow-hidden rounded-md bg-black/10">
        {/* Si tu veux une vraie image d’équipe, remplace par <Image /> */}
        <Image
          src="/assets/arrieres_plan/CoastalCarolina.png"
          alt="team"
          className="h-full w-full object-cover"
          width={1200}
          height={400}
        />
      </div>

      <p className="mt-2 text-[11px] text-black/80">
        {team.name?.trim() ? team.name : `Équipe ${team.id_team}`}
      </p>

      {/* Avatars / slots */}
      <div className="mt-1 flex items-center justify-start gap-1">
        {avatars.map((a, idx) => (
          <img
            key={`${a}-${idx}`}
            src={a as string}
            alt="player"
            className="h-4 w-4 rounded-full object-cover drop-shadow-md"
          />
        ))}

        {Array.from({ length: emptySlots }).map((_, i) => (
          <span
            key={`empty-${i}`}
            className="inline-block h-4 w-4 rounded-full border border-dashed border-black/30"
          />
        ))}
          { !admin &&
            (<button
            disabled={isMember||avatars.length>=4}
            onClick={()=>handleJoin()}
            className={` ${isMember||avatars.length>=4? 'text-gray-400 hover:cursor-not-allowed text-[10px]':'bg-none hover:cursor-pointer text-[10px] text-blue-400 hover:underline'}`}
          >
            {isMember?'MEMBRE':'REJOINDRE'}
          </button>)
          }
      </div>
          {onConfirmation &&(
            <Confirmation
              title="Redirection"
              message="Vous allez être rediriger vers la page de connexion. Continuer?"
              onConfirmed={(res)=>{SetOnConfirmation(!res);location.href='/login'}}
              showConfirm={onConfirmation}/>
          )}
    </div>
  );
}
