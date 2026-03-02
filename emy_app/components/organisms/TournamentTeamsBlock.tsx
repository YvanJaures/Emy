"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import TeamCard from "../molecules/TeamCard";
import type { TournamentTeamsDTO } from "@/hooks/Type_Teams";

export default function TournamentTeamsBlock({ t }: { t: TournamentTeamsDTO }) {
  const title = t.location?.trim() ? t.location : `Tournoi ${t.id_tour}`;

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
          href={`/tournois/${t.id_tour}/equipes`}
          className="text-xs !text-black/70 hover:underline underline-offset-4"
        >
          Voir
        </AppLink>
      </div>
    </section>
  );
}