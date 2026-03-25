"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { TeamMiniDTO } from "@/hooks/Type_Teams";

export default function TeamCardProfil({ team }: { team: TeamMiniDTO }) {
  const [showMembers, setShowMembers] = useState(false);
  const [localTeam, setLocalTeam] = useState(team);

const handleAdd = async (tm: any) => {
  try {
      const res = await fetch("/api/member/team/confirm", {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
      id_team: team.id_team,
      user_name: tm.Member?.user_name ?? "",
    }),
  });

    const data = await res.json();

    if (!res.ok) {
      console.error("404", data);
      throw new Error(data.message || "Erreur");
    }

    console.log("Ajout réussi", data);

    setLocalTeam(prev => ({
      ...prev,
      Team_member: prev.Team_member?.map(m =>
        m.Member?.user_name === tm.Member?.user_name
          ? { ...m, status: true }
          : m
      ) ?? []
    }));
  } catch (err) {
    console.error(err);
  }
};

  const avatars =
    localTeam.Team_member?.map((tm) => tm.Member?.avatar)
      .filter(Boolean)
      .slice(0, 4) ?? [];

  const currentMembers =
    localTeam.Team_member?.filter((tm) => tm.status === true) ?? [];

  const pendingMembers =
    localTeam.Team_member?.filter((tm) => tm.status === false) ?? [];

  return (
    <div className="w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">

      {!showMembers && (
        <div className="flex flex-col">

          <div className="h-[100px] w-[160px] overflow-hidden rounded-md bg-black/10">
            <Image
              src="/assets/arrieres_plan/CoastalCarolina.png"
              alt="team"
              className="h-full w-full object-cover"
              width={1200}
              height={400}
            />
          </div>

          <p className="text-sm font-medium mt-2">
            {team.name?.trim() ? team.name : `Équipe ${team.id_team}`}
          </p>

          <div className="flex items-center justify-between w-[180px] mt-2">

            <div className="flex -space-x-2">
              {avatars.map((a, idx) => (
                <img
                  key={`${a}-${idx}`}
                  src={a as string}
                  alt="player"
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <button
              onClick={() => setShowMembers(true)}
              className="text-blue-500 text-xs hover:underline whitespace-nowrap"
            >
              MEMBRES ▶
            </button>

          </div>

        </div>
      )}

      {showMembers && (
        <div className="flex gap-6">

          <div className="flex flex-col">

            <div className="h-[100px] w-[140px] overflow-hidden rounded-md bg-black/10">
              <Image
                src="/assets/arrieres_plan/CoastalCarolina.png"
                alt="team"
                className="h-full w-full object-cover"
                width={1200}
                height={400}
              />
            </div>

            <p className="text-sm font-medium mt-2">
              {team.name}
            </p>

            <div className="flex -space-x-2 mt-2">
              {avatars.map((a, idx) => (
                <img
                  key={idx}
                  src={a as string}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>

            <button
              onClick={() => setShowMembers(false)}
              className="text-blue-500 text-xs mt-2 hover:underline"
            >
              MEMBRES ◀
            </button>
          </div>

          <div className="flex-1 border-l border-gray-300 dark:border-gray-600 pl-6">

            <div className="grid grid-cols-2 gap-8">

              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Courant
                </p>

                {currentMembers.length === 0 && (
                  <p className="text-gray-400 text-xs">Aucun membre</p>
                )}

                {currentMembers.map((tm, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <img
                      src={tm.Member?.avatar || "/assets/avatars/avatar_prof_1.png"}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm max-w-[120px] truncate">
                      @{tm.Member?.user_name}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  En attente
                </p>

                {pendingMembers.length === 0 && (
                  <p className="text-gray-400 text-xs">Aucun membre</p>
                )}

                {pendingMembers.map((tm, i) => (
                  <div
                  key={i}
                  className="flex items-center justify-between gap-4 mb-2 max-w-[220px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={tm.Member?.avatar || "/assets/avatars/avatar_prof_2.png"}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm max-w-[120px] truncate">
                      @{tm.Member?.user_name}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(tm)}
                    className="text-blue-500 text-xs whitespace-nowrap hover:underline"
                  >
                    AJOUTER
                  </button>
                </div>
                ))}
              </div>

            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>Clé de groupe: {team.key_team ?? "-"}</p>
              <p>Nom du tournoi: {team.Tournament?.name ?? "-"}</p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}