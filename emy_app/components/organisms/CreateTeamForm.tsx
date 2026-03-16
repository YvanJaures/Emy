// "use client";

// import React, { useEffect, useState } from "react";
// import InputText from "@/components/atoms/InputText";
// import Button from "@/components/atoms/Button";

// type TournamentMini = { id_tour: number; location?: string | null };

// function generateSecretCode(len = 8) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//   let out = "";
//   for (let i = 0; i < len; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// type Props = {
//   teamUrl?: string; // endpoint POST create team
//   tournamentsUrl?: string; // endpoint GET tournaments
//   onCancel?: () => void;
//   onSuccessRedirectTo?: string; // ex: "/equipes"
// };

// export default function CreateTeamForm({
//   teamUrl = "/api/member/team",
//   tournamentsUrl = "/api/tournaments",
//   onCancel,
//   onSuccessRedirectTo,
// }: Props) {
//   const [teamName, setTeamName] = useState("Equipe 4");
//   const [idTour, setIdTour] = useState<number | "">("");
//   const [reserveOnly, setReserveOnly] = useState(false);

//   const [player1, setPlayer1] = useState("");
//   const [player2, setPlayer2] = useState("");
//   const [player3, setPlayer3] = useState("");
//   const [player4, setPlayer4] = useState("");

//   const [tournaments, setTournaments] = useState<TournamentMini[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(tournamentsUrl, { headers: { role: "admin" } });
//         if (!res.ok) return;
//         const data = (await res.json()) as TournamentMini[];
//         setTournaments(data);
//       } catch {
//         // silencieux: page fonctionne même sans liste
//       }
//     })();
//   }, [tournamentsUrl]);

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!teamName.trim()) {
//       setError("Le nom de l'équipe est requis.");
//       return;
//     }
//     if (idTour === "") {
//       setError("Veuillez sélectionner un tournoi.");
//       return;
//     }

//     const players = [player1, player2, player3, player4].map((p) => p.trim());
//     if (!reserveOnly && players.some((p) => !p)) {
//       setError(
//         "Veuillez saisir les 4 joueurs (user_name) ou cocher 'Équipe vide'.",
//       );
//       return;
//     }

//     const secretCode = generateSecretCode(8);

//     setLoading(true);
//     try {
//       const payload = {
//         name: teamName.trim(),
//         id_tour: Number(idTour),
//         key_team: secretCode,
//         open: true,
//         players: reserveOnly ? [] : players,
//       };

//       const res = await fetch(teamUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           role: "admin",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         let msg = "Erreur lors de la création de l'équipe.";
//         try {
//           const data = await res.json();
//           if (data?.message) msg = data.message;
//         } catch {}
//         setError(msg);
//         return;
//       }

//       setSuccess(`Équipe créée Code secret: ${secretCode}`);

//       if (onSuccessRedirectTo) {
//         location.href = onSuccessRedirectTo;
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Erreur serveur.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section className="rounded-3xl bg-green-50 p-10">
//       <h1 className="text-center text-xl font-medium text-black/80">
//         Ajouter Une Equipe
//       </h1>

//       <form onSubmit={onSubmit} className="mt-10">
//         {/* Nom */}
//         <div className="flex items-center gap-3 text-sm text-black/70">
//           <span className="font-semibold">Nom :</span>
//           <InputText
//             label=""
//             containerClassName="w-[220px]"
//             value={teamName}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setTeamName(e.target.value)
//             }
//             className="rounded-xl bg-white border border-black/10"
//           />
//         </div>

//         {/* Tournoi */}
//         <div className="mt-4 flex items-center gap-3 text-sm text-black/70">
//           <span className="font-semibold">Tournoi :</span>
//           <select
//             className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
//             value={idTour}
//             onChange={(e) =>
//               setIdTour(e.target.value ? Number(e.target.value) : "")
//             }
//           >
//             <option value="">-- sélectionner --</option>
//             {tournaments.map((t) => (
//               <option key={t.id_tour} value={t.id_tour}>
//                 {t.location?.trim() ? t.location : `Tournoi ${t.id_tour}`}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Équipe vide */}
//         <div className="mt-4 flex items-center gap-2 text-sm text-black/70">
//           <input
//             type="checkbox"
//             checked={reserveOnly}
//             onChange={(e) => setReserveOnly(e.target.checked)}
//           />
//           <span>Créer une équipe vide (réserver des places)</span>
//         </div>

//         {/* Joueurs */}
//         <div className="mt-6 flex flex-col gap-4">
//           <InputText
//             label=""
//             placeholder="Joueur 1 (user_name)"
//             containerClassName="w-full"
//             value={player1}
//             disabled={reserveOnly}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setPlayer1(e.target.value)
//             }
//             className="rounded-xl bg-pink-50 border-none"
//           />
//           <InputText
//             label=""
//             placeholder="Joueur 2 (user_name)"
//             containerClassName="w-full"
//             value={player2}
//             disabled={reserveOnly}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setPlayer2(e.target.value)
//             }
//             className="rounded-xl bg-pink-50 border-none"
//           />
//           <InputText
//             label=""
//             placeholder="Joueur 3 (user_name)"
//             containerClassName="w-full"
//             value={player3}
//             disabled={reserveOnly}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setPlayer3(e.target.value)
//             }
//             className="rounded-xl bg-pink-50 border-none"
//           />
//           <InputText
//             label=""
//             placeholder="Joueur 4 (user_name)"
//             containerClassName="w-full"
//             value={player4}
//             disabled={reserveOnly}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setPlayer4(e.target.value)
//             }
//             className="rounded-xl bg-pink-50 border-none"
//           />
//         </div>

//         {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
//         {success && <p className="mt-4 text-sm text-green-700">{success}</p>}

//         {/* Boutons */}
//         <div className="mt-10 flex justify-center gap-16">
//           <Button
//             title={loading ? "Création..." : "Creer"}
//             type="submit"
//             disabled={loading}
//             className="w-32 border-none"
//             color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
//             onClick={() => {
//               location.href = "/equipesPage";
//             }}
//           />

//           <Button
//             title="Annuler"
//             type="button"
//             className="w-32 border-none"
//             color="bg-red-400 border-red-400 text-white hover:bg-red-500"
//             onClick={() => {
//               if (onCancel) onCancel();
//               else location.href = "/equipesPage";
//             }}
//           />
//         </div>
//       </form>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/atoms/Button";
import SelectField from "@/components/atoms/SelectField"; // si tu l’utilises déjà
import Title from "@/components/atoms/Title";

type TournamentMini = { id_tour: number; location?: string | null };
type Props = {
  teamUrl: string; // POST create
  tournamentsUrl: string; // GET tournaments list
  // ✅ nouveaux
  editMode?: boolean;
  id_team?: number;
  detailsUrl: string; // GET /api/member/team/details
  updateUrl: string; // PATCH /api/member/team/update
};

type ApiMessage = { message?: string };

type TeamDetailsDTO = {
  id_team: number;
  name: string | null;
  id_tour: number | null;
  open?: boolean | null;
  key_team?: string | null;
  Team_member?: { user_name: string }[];
};

export default function CreateTeamForm({
  teamUrl,
  tournamentsUrl,
  editMode = false,
  id_team,
  detailsUrl,
  updateUrl,
}: Props) {
  const [teamName, setTeamName] = useState("");
  const [idTour, setIdTour] = useState<number | "">("");
  const [reserveOnly, setReserveOnly] = useState(false);

  // joueurs (comme ton code)
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const [keyTeam, setKeyTeam] = useState(""); // si tu l’as dans ton form
  const [open, setOpen] = useState(true); // si tu l’as dans ton form

  const [tournaments, setTournaments] = useState<TournamentMini[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validIdTeam = useMemo(
    () => editMode && id_team && !Number.isNaN(id_team),
    [editMode, id_team],
  );

  // 1) Charger tournois (comme avant)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(tournamentsUrl, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        setTournaments(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [tournamentsUrl]);

  // 2) Mode édition : pré-remplir depuis GET /api/member/team/details?id_team=...
  // useEffect(() => {
  //   if (!validIdTeam) return;

  //   (async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       setSuccess(null);

  //       const res = await fetch(`${detailsUrl}?id_team=${id_team}`, {
  //         cache: "no-store",
  //         //headers: { role: "admin" }, // si nécessaire dans ton projet
  //       });

  //       if (!res.ok) {
  //         const msg = (await res.json().catch(() => null)) as ApiMessage | null;
  //         throw new Error(msg?.message ?? "Erreur chargement équipe");
  //       }

  //       const team = (await res.json()) as TeamDetailsDTO;

  //       setTeamName(team.name ?? "");
  //       setIdTour(team.id_tour ?? "");
  //       setOpen(team.open ?? true);
  //       setKeyTeam(team.key_team ?? "");

  //       // joueurs depuis Team_member
  //       const players = (team.Team_member ?? [])
  //         .map((tm) => tm.user_name)
  //         .filter(Boolean);

  //       setPlayer1(players[0] ?? "");
  //       setPlayer2(players[1] ?? "");
  //       setPlayer3(players[2] ?? "");
  //       setPlayer4(players[3] ?? "");

  //       // reserveOnly (si < 4 joueurs)
  //       setReserveOnly(players.length < 4);
  //     } catch (e: unknown) {
  //       console.error(e);
  //       setError(e instanceof Error ? e.message : "Erreur");
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [validIdTeam, id_team, detailsUrl]);
  useEffect(() => {
    if (!validIdTeam) return;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        setSuccess(null);

        const res = await fetch(`${detailsUrl}?id_team=${id_team}`, {
          cache: "no-store",
          credentials: "include",
          //headers: { role: "admin" },
        });

        const data = (await res.json().catch(() => null)) as
          | ApiMessage
          | TeamDetailsDTO
          | null;

        if (!res.ok) {
          const msg =
            (data as ApiMessage | null)?.message ?? "Erreur chargement équipe";
          throw new Error(msg);
        }

        const team = data as TeamDetailsDTO;

        setTeamName(team.name ?? "");
        setIdTour(team.id_tour ?? "");
        setOpen(team.open ?? true);
        setKeyTeam(team.key_team ?? "");

        const players = (team.Team_member ?? [])
          .map((tm) => tm.user_name)
          .filter(Boolean);

        setPlayer1(players[0] ?? "");
        setPlayer2(players[1] ?? "");
        setPlayer3(players[2] ?? "");
        setPlayer4(players[3] ?? "");

        setReserveOnly(players.length < 4);
      } catch (e: unknown) {
        console.error(e);
        setError(e instanceof Error ? e.message : "Erreur serveur");
      } finally {
        setLoading(false);
      }
    })();
  }, [validIdTeam, id_team, detailsUrl]);

  const submit = async () => {
    setError(null);
    setSuccess(null);

    if (!teamName.trim()) {
      setError("Le nom de l équipe est obligatoire.");
      return;
    }
    if (!idTour) {
      setError("Choisis un tournoi.");
      return;
    }

    // players array comme ton code :contentReference[oaicite:2]{index=2}
    const players = [player1, player2, player3, player4].filter(
      (p) => p && p.trim(),
    );

    try {
      setSaving(true);

      // ✅ Mode EDIT: PATCH
      if (validIdTeam) {
        const res = await fetch(updateUrl, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_team,
            name: teamName.trim(),
            id_tour: Number(idTour),
            open,
            key_team: keyTeam.trim() ? keyTeam.trim() : null,
            players, // si ton backend veut aussi mettre à jour les membres
            reserveOnly,
          }),
        });

        const msg = (await res.json().catch(() => null)) as ApiMessage | null;

        if (!res.ok) {
          throw new Error(msg?.message ?? "Erreur modification équipe");
        }

        setSuccess("Équipe modifiée avec succès.");
        return;
      }

      // ✅ Mode CREATE: POST (ton comportement actuel)
      // const res = await fetch(teamUrl, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: teamName.trim(),
      //     id_tour: Number(idTour),
      //     key_team: keyTeam.trim() ? keyTeam.trim() : null,
      //     open,
      //     players,
      //   }),
      // });
      const res = await fetch(updateUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
            //role: "admin",
        },
        credentials: "include",
        body: JSON.stringify({
          id_team,
          name: teamName.trim(),
          id_tour: Number(idTour),
          open,
          key_team: keyTeam.trim() ? keyTeam.trim() : null,
          players,
          reserveOnly,
        }),
      });

      const msg = (await res.json().catch(() => null)) as ApiMessage | null;

      if (!res.ok) {
        throw new Error(msg?.message ?? "Erreur création équipe");
      }

      setSuccess("Équipe créée avec succès.");
    } catch (e: unknown) {
      console.error(e);
      setError(e instanceof Error ? e.message : "Erreur serveur.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="p-6 text-sm text-black/70">Chargement...</p>;
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-8">
      <Title as="h1" className="p-1">
        {validIdTeam ? "Modifier une équipe" : "Créer une équipe"}
      </Title>

      {error && (
        <div className="mt-3 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-3 rounded-xl bg-green-50 px-4 py-2 text-sm text-green-700">
          {success}
        </div>
      )}

      <div className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow">
        {/* Nom */}
        <div>
          <label className="text-xs text-black/70">Nom de l’équipe</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>

        {/* Tournoi */}
        <div>
          <label className="text-xs text-black/70">Tournoi</label>
          <SelectField
            value={idTour}
            onChange={(e) =>
              setIdTour(e.target.value ? Number(e.target.value) : "")
            }
          >
            <option value="">-- Choisir --</option>
            {tournaments.map((t) => (
              <option key={t.id_tour} value={t.id_tour}>
                {t.location ?? `Tournoi ${t.id_tour}`}
              </option>
            ))}
          </SelectField>
        </div>

        {/* Open */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={open}
            onChange={(e) => setOpen(e.target.checked)}
            className="h-4 w-4"
          />
          <span className="text-sm">Équipe ouverte</span>
        </div>

        {/* Key */}
        <div>
          <label className="text-xs text-black/70">Clé (optionnel)</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
            value={keyTeam}
            onChange={(e) => setKeyTeam(e.target.value)}
          />
        </div>

        {/* Players (comme createTeam) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="text-xs text-black/70">Joueur 1</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-black/70">Joueur 2</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
          {!reserveOnly && (
            <>
              <div>
                <label className="text-xs text-black/70">Joueur 3</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                  value={player3}
                  onChange={(e) => setPlayer3(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-black/70">Joueur 4</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                  value={player4}
                  onChange={(e) => setPlayer4(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={reserveOnly}
            onChange={(e) => setReserveOnly(e.target.checked)}
            className="h-4 w-4"
          />
          <span className="text-sm">Réserve (moins de 4 joueurs)</span>
        </div>

        <div className="mt-4">
          <Button
            title={
              saving
                ? "Enregistrement..."
                : validIdTeam
                  ? "Enregistrer"
                  : "Créer"
            }
            type="button"
            className="w-full h-10 border-none bg-green-400"
            disabled={saving}
            onClick={() => void submit()}
          />
        </div>
      </div>
    </div>
  );
}
