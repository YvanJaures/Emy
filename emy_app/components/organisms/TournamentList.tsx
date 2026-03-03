"use client";

import React from "react";
import TournamentRow from "../molecules/TournamentRow";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";

export default function TournamentList({
  tournaments,
  onDelete,
}: {
  tournaments: TournamentDTO[];
  onDelete: (id: number) => void;
}) {
  return (
    <div className="mt-6 space-y-3">
      {tournaments.map((t) => (
        <TournamentRow key={t.id_tour} tournament={t} onDelete={onDelete} />
      ))}
    </div>
  );
}

