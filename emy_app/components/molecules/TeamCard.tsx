"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TeamDTO } from "@/hooks/Type_DTO";
import { useConnexion } from "@/hooks/useAuth";
import { addTeamMemberWait } from "@/fetchs/global";
import Confirmation from "../organisms/Confirmation";

export default function TeamCard({ team,admin }: { team: TeamDTO,admin:boolean }) {
  const {member}=useConnexion()
  // confirmation pour la connexion
  const [onConfirmation,SetOnConfirmation]=useState(false)
  // l'utilisateur ne peut pas rejoindre l'équipe
  const [cantJoin,SetCantJoin]=useState(team.members===4)
  // la clé d'accès écrite par le user
  const [cle,setCle]=useState('')
  // message d'erreur
  const [error,setError]=useState('')
  // quand le user clique sur rejoindre
  const [onJoin,setOnJoin]=useState(false)
  // avatars des membres de l'équipe
  const [avatars,setAvatars]=useState(team.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean).slice(0, 4) ?? [])
  // le user est il déjà membre de l'équipe?
  const [isMember,setIsMember]=useState(true)
   
  // détermine si il est membre de l'équipe
  useEffect(()=>{
    let is= team.Team_member?.some(
      (tm) => tm.user_name === member?.user_name
    );
      setIsMember(is?? false)
  },[])

  /**
   * ajoute un membre à une équipe
   * @returns 
   */
  const handleJoin=async ()=>{
    SetOnConfirmation(false)
    if(!team.open){ if(!handleCle()) return}
    if(cantJoin) return
    if(isMember) return
    if(!member) return
    SetCantJoin(true)
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

  /**
   * Gére la saisie de la clé
   * @returns true si la clé est correcte
   */
  const handleCle=()=>{
    setError('')
    if(!cle.trim()) {setError('veuillez remplir le champs!');return false}
    if(cle!==team.key_team) {setError('Clé incorrecte! Réessayer');return false}
    setOnJoin(false)
    return true
  }

  /**
   * Vérifie si le membre existe et si la team est ouverte (pas besoin de clé pour rejoindre)
   * @returns rien si il n'y a pas de user ou que la team est ouverte
   */
  const handleJoinButton=()=>{
    if(!member){
      SetOnConfirmation(true)
      return
    }
    if(!team.open){ 
      setOnJoin(true)
      return
    }
    handleJoin()
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
    <div className="min-w-[160px] p-2 rounded-lg shadow-sm">
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
        {/** Affiche uniquement si l'utilisateur n'est pas administrateur */}
          { !admin &&
            (<button
            disabled={isMember||avatars.length>=4||cantJoin}
            onClick={handleJoinButton}
            className={` ${isMember||avatars.length>=4||cantJoin? 'text-gray-400 hover:cursor-not-allowed text-[10px]':'bg-none hover:cursor-pointer text-[10px] text-blue-400 hover:underline'}`}
          >
            {isMember?'MEMBRE':'REJOINDRE'}
          </button>)
          }
      </div >
      {/** Lorsqu'il clique sur rejoindre l'équipe */}
      {onJoin &&( <div className="mt-1 flex flex-col items-center justify-start gap-2">
              <input type="text" name="cle" id="cle" className="w-full h-5 rounded-sm p-2 text-[13px] outline-blue-500"
                placeholder="Entrer la clé d'accès..."
                value={cle}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCle(e.target.value);}}
                onFocus={(e)=>e.target.value=''}/>
              <p className="text-red-400 text-[11px] w-full">{error}</p>
              <span className="flex justify-evenly items-center w-full">
                <button className="bg-blue-500 text-white text-sm p-0.5 rounded-sm hover:bg-blue-600 hover:cursor-pointer"
                  onClick={handleJoin}>Valider</button>
                <button className="bg-red-500 text-white text-sm p-0.5 rounded-sm hover:bg-red-600 hover:cursor-pointer"
                  onClick={()=>{setOnJoin(false);setError('');setCle('')}}>Annuler</button>
              </span>
        </div>)}
        {/** Confirmation de redirection vers la page de connexion */}
        {onConfirmation &&(
          <Confirmation
            title="Redirection"
            message="Vous allez être rediriger vers la page de connexion. Continuer?"
            onConfirmed={(res)=>{SetOnConfirmation(false);if(res) location.href='/login'}}
            showConfirm={onConfirmation}/>
        )}
    </div>
  );
}
