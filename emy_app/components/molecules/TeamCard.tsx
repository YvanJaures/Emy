"use client";

import React from "react";
import AppLink from "../atoms/AppLink";
import type { TeamMiniDTO } from "@/hooks/Type_Teams";
import Image from "next/image";
import { MemberDTO } from "@/hooks/Type_DTO";

export default function TeamCard({ team,member }: { team: TeamMiniDTO,member:MemberDTO|null }) {
  // Avatars des membres (max 4)
  const avatars =
    team.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean)
      .slice(0, 4) ?? [];

  // Slots vides pour compléter à 4 (équipe = 4 joueurs) :contentReference[oaicite:3]{index=3}
  const emptySlots = Math.max(0, 4 - avatars.length);

  return (
    <div className="w-[160px] p-2 rounded-lg shadow-sm">
      {/* Image thumbnail (placeholder) */}
      <div className="h-[90px] w-full overflow-hidden rounded-md bg-black/10">
        {/* Si tu veux une vraie image d’équipe, remplace par <Image /> */}
        <Image
          src="/assets/arrieres_plan/CoastalCarolina.png"
          alt="team"
          className="h-full w-full object-cover"
          width={1200}
          height={400}
        />
      </div>

      <p className="mt-2 text-[11px] text-black/80">
        {team.name?.trim() ? team.name : `Équipe ${team.id_team}`}
      </p>

      {/* Avatars / slots */}
      <div className="mt-1 flex items-center justify-start gap-1">
        {avatars.map((a, idx) => (
          <img
            key={`${a}-${idx}`}
            src={a as string}
            alt="player"
            className="h-4 w-4 rounded-full object-cover drop-shadow-md"
          />
        ))}

        {Array.from({ length: emptySlots }).map((_, i) => (
          <span
            key={`empty-${i}`}
            className="inline-block h-4 w-4 rounded-full border border-dashed border-black/30"
          />
        ))}
          { !member?.Admin &&
            (<AppLink
            href={`/equipes/${team.id_team}`}
            className="text-[10px] !text-blue-600 hover:underline text-center underline-offset-4"
          >
            REJOINDRE
          </AppLink>)
          }
      </div>

    </div>
  );
}
