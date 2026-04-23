"use client";

import React from "react";
import TournamentRow from "../molecules/TournamentRow";
import type { TournamentDTO } from "@/hooks/Type_DTO";

type TournamentListProps = {
  tournaments: TournamentDTO[];
  onDelete: (id: number) => void;
  onDetails: (id_tour: number, id_community: number) => void;
  deletingId: number | null;
};
/**
 * Affiche la liste des tournois
 */
export default function TournamentList({
  tournaments,
  onDelete,
  onDetails,
  deletingId,
}: TournamentListProps) {
  async function toggleTourStatus(
    id_tour: number,
    id_community: number,
    currentStatus: number
  ) {
    const newStatus = currentStatus === 1 ? 0 : 1;

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_BASE+"/api/admin/tour/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          role: "admin",
        },
        body: JSON.stringify({
          id_tour,
          id_community,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error(response.status + " " + (await response.json()));
      }
    } catch (error) {
      console.error("Status update failed:", error);
    }
  }

  return (
    <div className="mt-6 space-y-3">
      {tournaments.map((t) => (
        <TournamentRow
          key={t.id_tour}
          tournament={t}
          onDelete={onDelete}
          onDetails={onDetails}
          onToggleStatus={toggleTourStatus}
          isDeleting={deletingId === t.id_tour}
        />
      ))}
    </div>
  );
}