"use client";

import React, { useState } from "react";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";

/**
 * Ligne qui permet d'afficher un tournoi dans la liste de tournoi
 */
type TournamentRowProps = {
  tournament: TournamentDTO;
  onDelete: (id: number) => void;
  onToggleStatus: (
    id_tour: number,
    id_community: number,
    status: number
  ) => void;
  onDetails: (id_tour: number, id_community: number) => void;
  isDeleting?: boolean;
};

export default function TournamentRow({
  tournament,
  onDelete,
  onToggleStatus,
  onDetails,
  isDeleting,
}: TournamentRowProps) {
  const title = tournament.name?.trim()
    ? tournament.name
    : `Tournoi ${tournament.id_tour}`;

  const [status, setStatus] = useState(tournament.status);

  const handleDeleteClick = () => {
    const ok = window.confirm(`Supprimer "${title}" ?`);
    if (!ok) return;
    onDelete(tournament.id_tour);
  };

  const handleInscription = () => {
    alert(`Inscriptions au tournoi ${tournament.id_tour}`);
  };

  return (
    <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-5 py-3 shadow sm:grid-cols-5 sm:items-center">
      <p className="text-xs text-black/80">{title}</p>

      <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          onClick={() =>
            onDetails(tournament.id_tour, tournament.id_community!)
          }
          className="text-xs text-black/70 hover:underline underline-offset-4"
        >
          Details
        </button>
      </div>

      <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          disabled={tournament.status === 0}
          onClick={handleInscription}
          className={`text-xs underline-offset-4 hover:cursor-pointer ${
            status === 1
              ? "text-green-600 hover:underline"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          {status === 1 ? "Inscription" : "Inscriptions fermées"}
        </button>
      </div>

      <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          onClick={() => {
            onToggleStatus(
              tournament.id_tour,
              tournament.id_community!,
              status
            );
            setStatus(status === 1 ? 0 : 1);
          }}
          className="text-xs text-blue-500 hover:text-blue-800 hover:underline hover:cursor-pointer transition-colors duration-200"
        >
          {status === 1 ? "Fermer inscriptions" : "Ouvrir inscriptions"}
        </button>
      </div>

      <div className="flex justify-start sm:justify-center">
        <button
          type="button"
          onClick={handleDeleteClick}
          disabled={Boolean(isDeleting)}
          className="text-xs text-red-500 hover:underline underline-offset-4 hover:cursor-pointer"
        >
          {isDeleting ? "Suppression..." : "Supprimer"}
        </button>
      </div>
    </div>
  );
}