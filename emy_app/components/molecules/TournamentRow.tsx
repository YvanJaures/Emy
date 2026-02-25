"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";

export default function TournamentRow({
  tournament,
  onDelete,
}: {
  tournament: TournamentDTO;
  onDelete: (id: number) => void;
}) {
  const title = tournament.location?.trim()
    ? tournament.location
    : `Tournoi ${tournament.id_tour}`;

  return (
    <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-5 py-3 shadow sm:grid-cols-3 sm:items-center">
      <p className="text-xs text-black/80">{title}</p>

      <div className="flex justify-start sm:justify-center">
        <AppLink
          href={`/tournois/${tournament.id_tour}`}
          className="!text-black/70 text-xs hover:underline underline-offset-4"
        >
          Details
        </AppLink>
      </div>

      <div className="flex justify-start sm:justify-end">
        <button
          type="button"
          onClick={() => onDelete(tournament.id_tour)}
          className="text-xs text-red-500 hover:underline underline-offset-4"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
