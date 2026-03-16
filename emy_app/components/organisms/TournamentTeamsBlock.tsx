"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import TeamCard from "../molecules/TeamCard";
import type { TournamentTeamsDTO } from "@/hooks/Type_Teams";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";

export default function TournamentTeamsBlock({ t }: { t: TournamentTeamsDTO }) {
  const title = t.location?.trim() ? t.location : `Tournoi ${t.id_tour}`;
    const router = useRouter();


  return (
    <section className="relative w-full rounded-2xl bg-white p-4 shadow">
      <p className="text-xs text-black/70">{title}</p>

      <div className="mt-3 flex gap-8 overflow-x-auto pb-2">
        {t.Team.map((team) => (
          <TeamCard key={team.id_team} team={team} />
        ))}
      </div>

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
    </section>
  );
}