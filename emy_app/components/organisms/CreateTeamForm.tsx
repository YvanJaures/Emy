"use client";

import React, { useEffect, useState } from "react";
import InputText from "@/components/atoms/InputText";
import Button from "@/components/atoms/Button";

type TournamentMini = { id_tour: number; location?: string | null };

function generateSecretCode(len = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++)
    out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

type Props = {
  teamUrl?: string; // endpoint POST create team
  tournamentsUrl?: string; // endpoint GET tournaments
  onCancel?: () => void;
  onSuccessRedirectTo?: string; // ex: "/equipes"
};

export default function CreateTeamForm({
  teamUrl = "/api/member/team",
  tournamentsUrl = "/api/tournaments",
  onCancel,
  onSuccessRedirectTo,
}: Props) {
  const [teamName, setTeamName] = useState("Equipe 4");
  const [idTour, setIdTour] = useState<number | "">("");
  const [reserveOnly, setReserveOnly] = useState(false);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");

  const [tournaments, setTournaments] = useState<TournamentMini[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(tournamentsUrl, { headers: { role: "admin" } });
        if (!res.ok) return;
        const data = (await res.json()) as TournamentMini[];
        setTournaments(data);
      } catch {
        // silencieux: page fonctionne même sans liste
      }
    })();
  }, [tournamentsUrl]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!teamName.trim()) {
      setError("Le nom de l'équipe est requis.");
      return;
    }
    if (idTour === "") {
      setError("Veuillez sélectionner un tournoi.");
      return;
    }

    const players = [player1, player2, player3, player4].map((p) => p.trim());
    if (!reserveOnly && players.some((p) => !p)) {
      setError(
        "Veuillez saisir les 4 joueurs (user_name) ou cocher 'Équipe vide'.",
      );
      return;
    }

    const secretCode = generateSecretCode(8);

    setLoading(true);
    try {
      const payload = {
        name: teamName.trim(),
        id_tour: Number(idTour),
        key_team: secretCode,
        open: true,
        players: reserveOnly ? [] : players,
      };

      const res = await fetch(teamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          role: "admin",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Erreur lors de la création de l'équipe.";
        try {
          const data = await res.json();
          if (data?.message) msg = data.message;
        } catch {}
        setError(msg);
        return;
      }

      setSuccess(`Équipe créée Code secret: ${secretCode}`);

      if (onSuccessRedirectTo) {
        location.href = onSuccessRedirectTo;
      }
    } catch (err) {
      console.error(err);
      setError("Erreur serveur.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl bg-green-50 p-10">
      <h1 className="text-center text-xl font-medium text-black/80">
        Ajouter Une Equipe
      </h1>

      <form onSubmit={onSubmit} className="mt-10">
        {/* Nom */}
        <div className="flex items-center gap-3 text-sm text-black/70">
          <span className="font-semibold">Nom :</span>
          <InputText
            label=""
            containerClassName="w-[220px]"
            value={teamName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTeamName(e.target.value)
            }
            className="rounded-xl bg-white border border-black/10"
          />
        </div>

        {/* Tournoi */}
        <div className="mt-4 flex items-center gap-3 text-sm text-black/70">
          <span className="font-semibold">Tournoi :</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            value={idTour}
            onChange={(e) =>
              setIdTour(e.target.value ? Number(e.target.value) : "")
            }
          >
            <option value="">-- sélectionner --</option>
            {tournaments.map((t) => (
              <option key={t.id_tour} value={t.id_tour}>
                {t.location?.trim() ? t.location : `Tournoi ${t.id_tour}`}
              </option>
            ))}
          </select>
        </div>

        {/* Équipe vide */}
        <div className="mt-4 flex items-center gap-2 text-sm text-black/70">
          <input
            type="checkbox"
            checked={reserveOnly}
            onChange={(e) => setReserveOnly(e.target.checked)}
          />
          <span>Créer une équipe vide (réserver des places)</span>
        </div>

        {/* Joueurs */}
        <div className="mt-6 flex flex-col gap-4">
          <InputText
            label=""
            placeholder="Joueur 1 (user_name)"
            containerClassName="w-full"
            value={player1}
            disabled={reserveOnly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer1(e.target.value)
            }
            className="rounded-xl bg-pink-50 border-none"
          />
          <InputText
            label=""
            placeholder="Joueur 2 (user_name)"
            containerClassName="w-full"
            value={player2}
            disabled={reserveOnly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer2(e.target.value)
            }
            className="rounded-xl bg-pink-50 border-none"
          />
          <InputText
            label=""
            placeholder="Joueur 3 (user_name)"
            containerClassName="w-full"
            value={player3}
            disabled={reserveOnly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer3(e.target.value)
            }
            className="rounded-xl bg-pink-50 border-none"
          />
          <InputText
            label=""
            placeholder="Joueur 4 (user_name)"
            containerClassName="w-full"
            value={player4}
            disabled={reserveOnly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer4(e.target.value)
            }
            className="rounded-xl bg-pink-50 border-none"
          />
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-700">{success}</p>}

        {/* Boutons */}
        <div className="mt-10 flex justify-center gap-16">
          <Button
            title={loading ? "Création..." : "Creer"}
            type="submit"
            disabled={loading}
            className="w-32 border-none"
            color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
            onClick={() => {
              location.href = "/equipesPage";
            }}
          />

          <Button
            title="Annuler"
            type="button"
            className="w-32 border-none"
            color="bg-red-400 border-red-400 text-white hover:bg-red-500"
            onClick={() => {
              if (onCancel) onCancel();
              else location.href = "/equipesPage";
            }}
          />
        </div>
      </form>
    </section>
  );
}
