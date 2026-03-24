"use client";

import React, { useMemo, useState } from "react";
import AppLink from "../atoms/AppLink";
import TeamCard from "../molecules/TeamCard";
import type { TournamentDTO } from "@/hooks/Type_DTO";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";
import { useConnexion } from "@/hooks/useAuth";

export default function TournamentTeamsBlock({ t,admin,onCreate }: { t: TournamentDTO,admin:boolean,onCreate:(create:boolean)=>void }) {
  const title = t?.name?.trim() ? t.name : `Tournoi ${t?.id_tour}`;
  const [cant,setCant]=useState(true)
    const etat: number = useMemo(() => {
      let etat: number = -2;
      {
        console.log("debut");
        const start = new Date(
          t?.start_date ? t?.start_date : "00/00/0000",
        );
        const end = new Date(
          t?.end_date ? t?.end_date : "00/00/0000",
        );
        // si il y'a une erreur de date
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
          console.warn("Date invalide pour le tournoi :", t);
          etat = -2; // code spécial pour erreur
        }
        // note date actuelle
        const date = new Date();
        // si actuel est avant la date de debut du tournoi
        if (start.getTime() > date.getTime()) {
          etat = -1;
        }
        // si actuel est après la date de debut et avant la fin du tournoi
        else if (
          start.getTime() < date.getTime() &&
          date.getTime() < end.getTime()
        ) {
          etat = 0;
          setCant(true)
        }
        // si actuel est après la date de fin du tournoi
        else if (date.getTime() > end.getTime()) {
          etat = 1;
          setCant(true)
        }
      }
      console.log(cant);
      return etat;
    }, [t]);
  const router = useRouter();
  const handleCreate=()=>{
    onCreate(true)
  }

  return (
    <section className="relative w-full rounded-2xl bg-white p-4 shadow">
      <p className="text-xs text-black/70">{title}</p>

      <div className="mt-3 flex gap-5 overflow-x-auto pb-2">
        {t?.Team?.map((team) => (
          <TeamCard key={team.id_team} team={team} admin={admin} cant={cant} onIsMember={(res)=>{setCant(res);console.log(cant)}} />
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