"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import TeamCard from "../molecules/TeamCard";
import type { TournamentDTO } from "@/hooks/Type_DTO";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";
import { useConnexion } from "@/hooks/useAuth";

export default function TournamentTeamsBlock({ t,admin,onCreate }: { t: TournamentDTO,admin:boolean,onCreate:(create:boolean)=>void }) {
  const title = t?.name?.trim() ? t.name : `Tournoi ${t?.id_tour}`;
    const router = useRouter();
  const handleCreate=()=>{
    onCreate(true)
  }

  return (
    <section className="relative w-full rounded-2xl bg-white p-4 shadow">
      <p className="text-xs text-black/70">{title}</p>

      <div className="mt-3 flex gap-5 overflow-x-auto pb-2">
        {t?.Team?.map((team) => (
          <TeamCard key={team.id_team} team={team} admin={admin} />
        ))}
        { !admin &&(<span className="w-20 min-h-45 rounded-lg border flex justify-center items-center border-dotted text-center hover:cursor-pointer "
          onClick={()=>{handleCreate()}}>
            +
        </span>)}
      </div>
      { admin && (
        <div className="absolute bottom-3 right-4">
          <AppLink
            //href={`/tournois/${t.id_tour}/equipes`}
            href={`/TeamsDetailsPage?id_tour=${t.id_tour}`}
            className="text-xs !text-black/70 hover:underline underline-offset-4"
          >
            Voir
          </AppLink>
          {/* <Button
            title="Voir"
            type="button"
            className="text-xs !text-black/70 hover:underline underline-offset-4 border-none bg-transparent"
            onClick={() => {
              // on redirige vers la page TeamsDetailsPage
              // en passant l'id du tournoi dans la query
              router.push(`/TeamsDetailsPage?id_tour=${t.id_tour}`);
            }}
          /> */}

        </div>
      )}
    </section>
  );
}