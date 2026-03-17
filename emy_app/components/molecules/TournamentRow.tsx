"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";

export default function TournamentRow({
  tournament,
  onDelete,
  onToggleStatus,
  isDeleting,
}: {
  tournament: TournamentDTO;
  onDelete: (id: number) => void;
  onToggleStatus: (
    id_tour: number,
    id_community: number,
    status: number
  ) => void;
  isDeleting?: boolean;
}) {
  const title = tournament.location?.trim()
    ? tournament.location
    : `Tournoi ${tournament.id_tour}`;

  const handleDeleteClick = () => {
    const ok = window.confirm(`Supprimer "${title}" ?`);
    if (!ok) return;
    onDelete(tournament.id_tour);
  };

  const handleInscription = () => {
    alert(`Inscription au tournoi ${tournament.id_tour}`);
  };

  return (
    <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-5 py-3 shadow sm:grid-cols-5 sm:items-center">
      <p className="text-xs text-black/80">{title}</p>

      <div className="flex justify-start sm:justify-center">
        <AppLink
          href={`/tournois/${tournament.id_tour}`}
          className="!text-black/70 text-xs hover:underline underline-offset-4"
        >
          Details
        </AppLink>
      </div>

       <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          disabled={tournament.status === 0}
          onClick={handleInscription}
          className={`text-xs underline-offset-4 ${
            tournament.status === 1
              ? "text-green-600 hover:underline"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          {tournament.status === 1
            ? "Inscription"
            : "Inscriptions fermées"}
        </button>
      </div>

      <div className="flex justify-start sm:justify-center">
        <button
        type="button"
        onClick={() =>
        onToggleStatus(
        tournament.id_tour,
        tournament.id_community!,
        tournament.status
      )
      }
        className="text-xs text-blue-500 hover:text-blue-800 hover:underline hover:cursor-pointer transition-colors duration-200"
        >
        {tournament.status === 1
          ? "Fermer inscriptions"
          : "Ouvrir inscriptions"}
        </button>
      </div>

      <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          onClick={handleDeleteClick}
          disabled={Boolean(isDeleting)}
          className="text-xs text-red-500 hover:underline underline-offset-4"
        >
          {isDeleting ? "Suppression..." : "Supprimer"}
        </button>
      </div>
    </div>
  );
}
