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
  return (
    <div className="mt-6 space-y-3">
      {tournaments.map((t) => (
        <TournamentRow
          key={t.id_tour}
          tournament={t}
          onDelete={onDelete}
          isDeleting={deletingId === t.id_tour}
        />
      ))}
    </div>
  );
}
