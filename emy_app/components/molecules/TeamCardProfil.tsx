"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { TeamMiniDTO } from "@/hooks/Type_Teams";

export default function TeamCardProfil({ team }: { team: TeamMiniDTO }) {
  const [showMembers, setShowMembers] = useState(false);

  const avatars =
    team.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean)
      .slice(0, 4) ?? [];

  const emptySlots = Math.max(0, 4 - avatars.length);

  const currentMembers =
    team.Team_member?.filter((tm) => tm.status === true) ?? [];

  const pendingMembers =
    team.Team_member?.filter((tm) => tm.status === false) ?? [];

  return (
    <div className="w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">

      <div className="flex gap-4">

        <div className="h-[100px] w-[160px] overflow-hidden rounded-md bg-black/10">
          <Image
            src="/assets/arrieres_plan/CoastalCarolina.png"
            alt="team"
            className="h-full w-full object-cover"
            width={1200}
            height={400}
          />
        </div>

        <div className="flex flex-col justify-between w-full">

          <p className="text-sm font-medium text-black/80 dark:text-gray-200">
            {team.name?.trim() ? team.name : `Équipe ${team.id_team}`}
          </p>

          <div className="flex items-center gap-1 mt-1">
            {avatars.map((a, idx) => (
              <img
                key={`${a}-${idx}`}
                src={a as string}
                alt="player"
                className="h-5 w-5 rounded-full object-cover"
              />
            ))}

            {Array.from({ length: emptySlots }).map((_, i) => (
              <span
                key={`empty-${i}`}
                className="inline-block h-5 w-5 rounded-full border border-dashed border-black/30"
              />
            ))}
          </div>

          <button
            onClick={() => setShowMembers(!showMembers)}
            className="text-blue-500 text-xs mt-2 flex items-center gap-1 hover:underline"
          >
            MEMBRES {showMembers ? "◀" : "▶"}
          </button>

        </div>
      </div>

      {showMembers && (
        <div className="mt-4 border-t pt-4 text-sm">

          <div className="flex justify-between">

            <div>
              <p className="font-medium mb-2">Courant</p>
              {currentMembers.map((tm, i) => (
                <p key={i}>@{tm.Member?.user_name}</p>
              ))}
            </div>

            <div>
              <p className="font-medium mb-2">En attente</p>
              {pendingMembers.map((tm, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>@{tm.Member?.user_name}</span>
                  <button className="text-blue-500 text-xs">
                    AJOUTER
                  </button>
                </div>
              ))}
            </div>

          </div>

          <div className="mt-4 text-gray-500 text-xs">
            <p>Clé de groupe: {team.key_team ?? "-"}</p>
            <p>Nom du tournoi: {team.Tournament?.name ?? "-"}</p>
          </div>

        </div>
      )}
    </div>
  );
}