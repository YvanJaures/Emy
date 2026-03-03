"use client";

//import React, { useEffect, useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import CreateTeamForm from "@/components/organisms/CreateTeamForm";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";

export default function CreateTeamPage() {
  const { member, loading } = useAuth();
  if (loading) return <LoadingAnimation />;
  return (
    <div className="min-h-screen bg-white">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <CreateTeamForm
          teamUrl="/api/member/team"
          tournamentsUrl="/api/tournaments"
          onSuccessRedirectTo="/equipes"
          onCancel={() => (location.href = "/equipesPage")}
        />
      </main>

      <Footer />
    </div>
  );
}

// import InputText from "@/components/atoms/InputText";
// import Button from "@/components/atoms/Button";

// type TournamentMini = { id_tour: number; location?: string | null };

// function generateSecretCode(len = 8) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//   let out = "";
//   for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// export default function CreateTeamPage() {
//   const [teamName, setTeamName] = useState("Equipe 4");
//   const [idTour, setIdTour] = useState<number | "">("");
//   const [reserveOnly, setReserveOnly] = useState(false); // ✅ admin peut créer équipe vide

//   // 4 joueurs (user_name)
//   const [player1, setPlayer1] = useState("");
//   const [player2, setPlayer2] = useState("");
//   const [player3, setPlayer3] = useState("");
//   const [player4, setPlayer4] = useState("");

//   const [tournaments, setTournaments] = useState<TournamentMini[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // ✅ adapte selon ta vraie API
//   const TEAM_URL = "/api/admin/team";
//   const TOURNAMENTS_URL = "/api/admin/tours"; // exemple (liste tournois)

//   useEffect(() => {
//     // optionnel: charger la liste des tournois pour un select
//     (async () => {
//       try {
//         const res = await fetch(TOURNAMENTS_URL, { headers: { role: "admin" } });
//         if (!res.ok) return;
//         const data = (await res.json()) as TournamentMini[];
//         setTournaments(data);
//       } catch {}
//     })();
//   }, []);

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
//       // énoncé: équipe de 4 joueurs :contentReference[oaicite:3]{index=3}
//       setError("Veuillez saisir les 4 joueurs (user_name) ou cocher 'Équipe vide'.");
//       return;
//     }

//     // énoncé: génération d’un code secret :contentReference[oaicite:4]{index=4}
//     const secretCode = generateSecretCode(8);

//     setLoading(true);
//     try {
//       const payload = {
//         name: teamName.trim(),
//         id_tour: Number(idTour),
//         key_team: secretCode,
//         open: true, // l’admin peut décider (true/false)
//         players: reserveOnly ? [] : players, // admin peut créer équipe vide :contentReference[oaicite:5]{index=5}
//       };

//       const res = await fetch(TEAM_URL, {
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
//       // optionnel: redirection
//       // window.location.href = "/equipes";
//     } catch (err) {
//       console.error(err);
//       setError("Erreur serveur.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <NavbarAdmin />

//       <main className="mx-auto w-full max-w-6xl px-6 py-8">
//         {/* panneau vert pâle comme la capture */}
//         <section className="rounded-3xl bg-green-50 p-10">
//           <h1 className="text-center text-xl font-medium text-black/80">
//             Ajouter Une Equipe
//           </h1>

//           {/* FORM */}
//           <form onSubmit={onSubmit} className="mt-10">
//             {/* Ligne Nom */}
//             <div className="flex items-center gap-3 text-sm text-black/70">
//               <span className="font-semibold">Nom :</span>
//               <InputText
//                 label=""
//                 containerClassName="w-[220px]"
//                 value={teamName}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                   setTeamName(e.target.value)
//                 }
//                 className="rounded-xl bg-white border border-black/10"
//               />
//             </div>

//             {/* Choix tournoi (simple select HTML, pas besoin d’un nouveau composant) */}
//             <div className="mt-4 flex items-center gap-3 text-sm text-black/70">
//               <span className="font-semibold">Tournoi :</span>
//               <select
//                 className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
//                 value={idTour}
//                 onChange={(e) => setIdTour(e.target.value ? Number(e.target.value) : "")}
//               >
//                 <option value="">-- sélectionner --</option>
//                 {tournaments.map((t) => (
//                   <option key={t.id_tour} value={t.id_tour}>
//                     {t.location?.trim() ? t.location : `Tournoi ${t.id_tour}`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Équipe vide (réservation) */}
//             <div className="mt-4 flex items-center gap-2 text-sm text-black/70">
//               <input
//                 type="checkbox"
//                 checked={reserveOnly}
//                 onChange={(e) => setReserveOnly(e.target.checked)}
//               />
//               <span>Créer une équipe vide (réserver des places)</span>
//             </div>

//             {/* Champs joueurs (désactivés si réserve) */}
//             <div className="mt-6 flex flex-col gap-4">
//               <InputText
//                 label=""
//                 placeholder="Joueur 1 (user_name)"
//                 containerClassName="w-full"
//                 value={player1}
//                 disabled={reserveOnly}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer1(e.target.value)}
//                 className="rounded-xl bg-pink-50 border-none"
//               />
//               <InputText
//                 label=""
//                 placeholder="Joueur 2 (user_name)"
//                 containerClassName="w-full"
//                 value={player2}
//                 disabled={reserveOnly}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer2(e.target.value)}
//                 className="rounded-xl bg-pink-50 border-none"
//               />
//               <InputText
//                 label=""
//                 placeholder="Joueur 3 (user_name)"
//                 containerClassName="w-full"
//                 value={player3}
//                 disabled={reserveOnly}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer3(e.target.value)}
//                 className="rounded-xl bg-pink-50 border-none"
//               />
//               <InputText
//                 label=""
//                 placeholder="Joueur 4 (user_name)"
//                 containerClassName="w-full"
//                 value={player4}
//                 disabled={reserveOnly}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer4(e.target.value)}
//                 className="rounded-xl bg-pink-50 border-none"
//               />
//             </div>

//             {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
//             {success && <p className="mt-4 text-sm text-green-700">{success}</p>}

//             {/* Boutons comme la capture */}
//             <div className="mt-10 flex justify-center gap-16">
//               <Button
//                 title={loading ? "Création..." : "Creer"}
//                 type="submit"
//                 disabled={loading}
//                 className="w-32 border-none"
//                 color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
//               />
//               <Button
//                 title="Annuler"
//                 type="button"
//                 className="w-32 border-none"
//                 color="bg-red-400 border-red-400 text-white hover:bg-red-500"
//                 onClick={() => (window.location.href = "/equipes")}
//               />
//             </div>
//           </form>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
