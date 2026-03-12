"use client";

import React from "react";
import TournamentRow from "../molecules/TournamentRow";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";

export default function TournamentList({
  tournaments,
  onDelete,
  deletingId,
}: {
  tournaments: TournamentDTO[];
  onDelete: (id: number) => void;
  deletingId: number | null;
}) {

  async function toggleTourStatus(
    id_tour: number,
    id_community: number,
    currentStatus: number
  ) {
    const newStatus = currentStatus === 1 ? 0 : 1;

    try {
      const response = await fetch("/api/admin/tour/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_tour,
          id_community,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update tournament status");
      }

      window.location.reload();

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
          onToggleStatus={toggleTourStatus}
          isDeleting={deletingId === t.id_tour}
        />
      ))}
    </div>
  );
}
