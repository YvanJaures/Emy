// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Button from "@/components/atoms/Button";
// import LoadingAnimation from "@/components/organisms/LoadingAnimation";
// import { useAuth } from "@/hooks/useAuth";
// import type { TournamentTeamsDTO, TeamMiniDTO } from "@/hooks/Type_Teams";
// import { useRouter } from "next/navigation";

// type ApiMessage = { message?: string };

// export default function TeamsDetailsPage() {
//   // ✅ Query: /TeamsDetailsPage?id_tour=123
//   const searchParams = useSearchParams();
//   const id_tour = useMemo(
//     () => Number(searchParams.get("id_tour")),
//     [searchParams],
//   );

//   const { member } = useAuth();
//   const router = useRouter();
//   const [data, setData] = useState<TournamentTeamsDTO | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // edit modal
//   const [editing, setEditing] = useState<TeamMiniDTO | null>(null);
//   const [editName, setEditName] = useState("");
//   const [saving, setSaving] = useState(false);

//   const load = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch(`/api/admin/tour/${id_tour}/teams`, {
//         cache: "no-store",
//         headers: { role: "admin" },
//       });

//       if (!res.ok) {
//         const msg = (await res.json().catch(() => null)) as ApiMessage | null;
//         throw new Error(msg?.message ?? "Erreur chargement équipes");
//       }

//       const json = (await res.json()) as TournamentTeamsDTO;
//       setData(json);
//     } catch (e: unknown) {
//       setError(e instanceof Error ? e.message : "Erreur");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!id_tour || Number.isNaN(id_tour)) {
//       setError("id_tour invalide (query ?id_tour=...)");
//       setLoading(false);
//       return;
//     }
//     void load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id_tour]);

//   const startEdit = (team: TeamMiniDTO) => {
//     setEditing(team);
//     setEditName(team.name ?? "");
//   };

//   const cancelEdit = () => {
//     setEditing(null);
//     setEditName("");
//   };

//   const saveEdit = async () => {
//     if (!editing) return;
//     if (!editName.trim()) {
//       setError("Le nom de l'équipe est obligatoire.");
//       return;
//     }

//     try {
//       setSaving(true);
//       setError(null);

//       const res = await fetch(`/api/member/team/update`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json", role: "admin" },
//         body: JSON.stringify({
//           id_team: editing.id_team,
//           id_tour, // ✅ sécurise côté backend
//           name: editName.trim(),
//         }),
//       });

//       if (!res.ok) {
//         const msg = (await res.json().catch(() => null)) as ApiMessage | null;
//         throw new Error(msg?.message ?? "Erreur modification");
//       }

//       await load();
//       cancelEdit();
//     } catch (e: unknown) {
//       setError(e instanceof Error ? e.message : "Erreur");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ✅ utilise ta route DELETE /team (body: {id_team, id_tour})
//   const deleteTeamFromTour = async (team: TeamMiniDTO) => {
//     const ok = window.confirm(
//       `Retirer l'équipe "${team.name ?? "Sans nom"}" du tournoi ?`,
//     );
//     if (!ok) return;

//     try {
//       setError(null);

//       const res = await fetch(`/api/admin/team`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json", role: "admin" },
//         body: JSON.stringify({ id_team: team.id_team, id_tour }),
//       });

//       if (!res.ok) {
//         const msg = (await res.json().catch(() => null)) as ApiMessage | null;
//         throw new Error(msg?.message ?? "Erreur suppression");
//       }

//       await load();
//     } catch (e: unknown) {
//       setError(e instanceof Error ? e.message : "Erreur");
//     }
//   };

//   if (loading) return <LoadingAnimation />;

//   return (
//     <div className="min-h-screen bg-white">
//       {member?.Admin?.id_community && (
//         <div className="px-6 py-4 text-sm text-black/70">
//           Communauté: {member.Admin.id_community}
//         </div>
//       )}

//       <main className="mx-auto w-full max-w-6xl px-6 py-6">
//         <h1 className="text-lg font-semibold">
//           Équipes du tournoi {data?.location ?? `#${id_tour}`}
//         </h1>

//         {error && (
//           <p className="mt-3 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700">
//             {error}
//           </p>
//         )}

//         <div className="mt-4 space-y-4">
//           {data?.Team?.length ? (
//             data.Team.map((team) => (
//               <div
//                 key={team.id_team}
//                 className="rounded-2xl bg-white p-4 shadow"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-semibold">
//                       {team.name ?? "Sans nom"}
//                     </p>
//                     <p className="text-xs text-black/60">
//                       Membres: {team.members ?? team.Team_member?.length ?? 0}
//                     </p>
//                   </div>

//                   <div className="flex gap-2">
//                     <Button
//                       title="Modifier"
//                       type="button"
//                       className="h-9 border-none bg-yellow-300"
//                       onClick={() => startEdit(team)}
//                       //onClick={() => router.push (`/createTeam?edit=1&id_team=${team.id_team}`)}
//                     />
//                     <Button
//                       title="Supprimer"
//                       type="button"
//                       className="h-9 border-none bg-red-500"
//                       onClick={() => void deleteTeamFromTour(team)}
//                     />
//                   </div>
//                 </div>

//                 {/* Avatars */}
//                 <div className="mt-3 flex gap-2">
//                   {team.Team_member?.slice(0, 8).map((tm, idx) => (
//                     <div
//                       key={idx}
//                       className="h-8 w-8 rounded-full bg-black/10 overflow-hidden"
//                       title={tm.Member?.user_name ?? ""}
//                     >
//                       {/* Si tu affiches avatar en Image, adapte ici */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-black/70">
//               Aucune équipe dans ce tournoi.
//             </p>
//           )}
//         </div>

//         {/* Modal édition */}
//         {editing && (
//           <div
//             className="fixed inset-0 z-[9998] bg-black/30 flex items-center justify-center"
//             onClick={cancelEdit}
//           >
//             <div
//               className="z-[9999] w-[90%] max-w-lg rounded-xl bg-white p-4 shadow"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <p className="text-sm font-semibold">Modifier l’équipe</p>

//               <input
//                 className="mt-3 w-full rounded-xl border px-3 py-2 text-sm"
//                 value={editName}
//                 onChange={(e) => setEditName(e.target.value)}
//                 placeholder="Nom de l'équipe"
//               />

//               <div className="mt-4 flex gap-3">
//                 <Button
//                   title={saving ? "Enregistrement..." : "Enregistrer"}
//                   type="button"
//                   className="w-full h-10 border-none bg-green-400"
//                   disabled={saving}
//                   onClick={() => void saveEdit()}
//                 />
//                 <Button
//                   title="Annuler"
//                   type="button"
//                   className="w-full h-10 border-none bg-gray-300"
//                   disabled={saving}
//                   onClick={cancelEdit}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <div className="mt-8 flex justify-center">
//         <Button
//           title="Annuler"
//           type="button"
//           className="w-full max-w-sm h-10 border-none bg-gray-300"
//           onClick={() => router.push("/equipesPage")}
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";
import type { TournamentTeamsDTO, TeamMiniDTO } from "@/hooks/Type_Teams";

type ApiMessage = { message?: string };

export default function TeamsDetailsPage() {
  // Query: /TeamsDetailsPage?id_tour=123
  const searchParams = useSearchParams();
  const router = useRouter();

  const id_tour = useMemo(
    () => Number(searchParams.get("id_tour")),
    [searchParams],
  );

  const { member } = useAuth();
  const [data, setData] = useState<TournamentTeamsDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/admin/tour/${id_tour}/teams`, {
        cache: "no-store",
        headers: { role: "admin" },
      });

      if (!res.ok) {
        const msg = (await res.json().catch(() => null)) as ApiMessage | null;
        throw new Error(msg?.message ?? "Erreur chargement équipes");
      }

      const json = (await res.json()) as TournamentTeamsDTO;
      setData(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id_tour || Number.isNaN(id_tour)) {
      setError("id_tour invalide (query ?id_tour=...)");
      setLoading(false);
      return;
    }

    void load();
  }, [id_tour]);

  const startEdit = (team: TeamMiniDTO) => {
    const teamId = Number(team?.id_team);

    if (!teamId || Number.isNaN(teamId)) {
      setError("Impossible de modifier cette équipe : id_team introuvable.");
      return;
    }

    router.push(`/createTeam?edit=1&id_team=${teamId}&id_tour=${id_tour}`);
  };

  const deleteTeamFromTour = async (team: TeamMiniDTO) => {
    const ok = window.confirm(
      `Retirer l'équipe "${team.name ?? "Sans nom"}" du tournoi ?`,
    );
    if (!ok) return;

    try {
      setError(null);

      const res = await fetch(`/api/admin/team`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", role: "admin" },
        body: JSON.stringify({ id_team: team.id_team, id_tour }),
      });

      if (!res.ok) {
        const msg = (await res.json().catch(() => null)) as ApiMessage | null;
        throw new Error(msg?.message ?? "Erreur suppression");
      }

      await load();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur");
    }
  };

  if (loading) return <LoadingAnimation />;

  return (
    <div className="min-h-screen bg-white">
      {member?.Admin?.id_community && (
        <div className="px-6 py-4 text-sm text-black/70">
          Communauté: {member.Admin.id_community}
        </div>
      )}

      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <h1 className="text-lg font-semibold">
          Équipes du tournoi {data?.location ?? `#${id_tour}`}
        </h1>

        {error && (
          <p className="mt-3 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mt-4 space-y-4">
          {data?.Team?.length ? (
            data.Team.map((team) => (
              <div
                key={team.id_team}
                className="rounded-2xl bg-white p-4 shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      {team.name ?? "Sans nom"}
                    </p>
                    <p className="text-xs text-black/60">
                      Membres: {team.members ?? team.Team_member?.length ?? 0}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      title="Modifier"
                      type="button"
                      className="h-9 border-none bg-yellow-300"
                      onClick={() => startEdit(team)}
                    />
                    <Button
                      title="Supprimer"
                      type="button"
                      className="h-9 border-none bg-red-500"
                      onClick={() => void deleteTeamFromTour(team)}
                    />
                  </div>
                </div>

                <div className="mt-3 flex gap-2">
                  {team.Team_member?.slice(0, 8).map((tm, idx) => (
                    <div
                      key={idx}
                      className="h-8 w-8 overflow-hidden rounded-full bg-black/10"
                      title={tm.Member?.user_name ?? ""}
                    >
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-black/70">
              Aucune équipe dans ce tournoi.
            </p>
          )}
        </div>
      </main>

      <div className="mt-8 flex justify-center">
        <Button
          title="Annuler"
          type="button"
          className="h-10 w-full max-w-sm border-none bg-gray-300"
          onClick={() => router.push("/equipesPage")}
        />
      </div>
    </div>
  );
}