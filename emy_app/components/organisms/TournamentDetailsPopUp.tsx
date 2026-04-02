"use client";

import { useEffect, useState } from "react";
import InputText from "@/components/atoms/InputText";
import Button from "@/components/atoms/Button";
import PopUp from "../atoms/PopUp";
import { RiDeleteBin2Line } from "react-icons/ri";
import { PrizeDTO } from "@/hooks/Type_DTO";

type PrizeRow = {
  name: string;
  value: string;
  quotas: string;
  places: string;
};

type TournamentDetails = {
  id_tour: number;
  name: string;
  location: string;
  members: number;
  fees: number | null;
  start_date: string;
  end_date: string;
  avatar: string;
  id_community: number;
  Prize: PrizeDTO[]
};

type TournamentDetailsPopUpProps = {
  idTour: number;
  idCommunity: number;
  onClose: () => void;
  onUpdated: () => void;
};

/**
 *  Popup qui s'affiche lorsqu'on veut voir le detail d'un tournoi et 
 * si on veut aussi le modifier 
 */
export default function TournamentDetailsPopUp({
  idTour,
  idCommunity,
  onClose,
  onUpdated,
}: TournamentDetailsPopUpProps) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [name, setName] = useState("");
  const [tourLocation, setTourLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [members, setMembers] = useState("0");
  const [fees, setFees] = useState("");
  const [avatar, setAvatar] = useState("");

  const [prizes, setPrizes] = useState<PrizeRow[]>([
    { name: "", value: "", quotas: "", places: "" },
  ]);

  useEffect(() => {
    async function loadTournamentDetails() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/tour&prizes/details?id_tour=${idTour}&id_community=${idCommunity}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Impossible de charger le tournoi.");
        }

        const tournament: TournamentDetails = data;

        setName(tournament.name ?? "");
        setTourLocation(tournament.location ?? "");
        setMembers(String(tournament.members ?? 0));
        setFees(
          tournament.fees !== null && tournament.fees !== undefined
            ? String(tournament.fees)
            : ""
        );
        setStartDate(tournament.start_date?.slice(0, 10) ?? "");
        setEndDate(tournament.end_date?.slice(0, 10) ?? "");
        setAvatar(tournament.avatar ?? "");

        setPrizes(
          tournament.Prize?.length
            ? tournament.Prize.map((p) => ({
                name: p.name ?? "",
                value: String(p.value?? ""),
                quotas: String(p.group_spot ?? ""),
                places: String(p.spots ?? ""),
              }))
            : [{ name: "", value: "", quotas: "", places: "" }]
        );
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : "Impossible de charger le tournoi."
        );
      } finally {
        setLoading(false);
      }
    }

    loadTournamentDetails();
  }, [idTour, idCommunity]);

  function addPrizeRow() {
    setPrizes((prev) => [
      ...prev,
      { name: "", value: "", quotas: "", places: "" },
    ]);
  }

  function removePrizeRow(index: number) {
    if (prizes.length <= 1) return;
    setPrizes((prev) => prev.filter((_, i) => i !== index));
  }

  function updatePrize(index: number, field: keyof PrizeRow, value: string) {
    setPrizes((prev) =>
      prev.map((prize, i) =>
        i === index ? { ...prize, [field]: value } : prize
      )
    );
  }

  function validatePrizes() {
    if (prizes.length <= 0) {
      return "Veuillez ajouter au moins une commandite.";
    }

    for (let i = 0; i < prizes.length; i++) {
      const prize = prizes[i];

      if (
        !prize.name.trim() ||
        !prize.value.trim() ||
        !prize.quotas.trim() ||
        !prize.places.trim()
      ) {
        return `Veuillez remplir tous les champs de la commandite ${i + 1}.`;
      }

      if (
        Number.isNaN(Number(prize.value)) ||
        Number.isNaN(Number(prize.quotas)) ||
        Number.isNaN(Number(prize.places))
      ) {
        return `Les valeurs numériques de la commandite ${i + 1} sont invalides.`;
      }
    }

    return "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!tourLocation || !startDate || !endDate || !name) {
      setError("Veuillez remplir: Nom/Lieu, dates");
      return;
    }

    if (!fees.trim()) {
      setError("Veuillez remplir les frais d'inscription.");
      return;
    }

    if (Number.isNaN(Number(fees))) {
      setError("Les frais d'inscription doivent être numériques.");
      return;
    }

    const prizesError = validatePrizes();
    if (prizesError) {
      setError(prizesError);
      return;
    }

    setSaving(true);

    try {
      const payload = {
        id_tour: idTour,
        id_community: idCommunity,
        name: name.trim(),
        location: tourLocation.trim(),
        start_date: startDate,
        end_date: endDate,
        members: members ? Number(members) : 0,
        fees: Number(fees),
        avatar: avatar,
        prizes: prizes.map((prize) => ({
          name: prize.name.trim(),
          value: Number(prize.value),
          spots: Number(prize.places),
          group_spot: Number(prize.quotas),
        })),
      };

      const res = await fetch("/api/admin/tour&prizes", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          role: "admin",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message ?? "Modification impossible");
      }

      setSuccess("Tournoi modifié");
      onUpdated();

      setTimeout(() => {
        onClose();
      }, 500);
    } catch (e) {
      console.error(e);
      setError(
        e instanceof Error ? e.message : "Erreur lors de la modification."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <PopUp onClose={onClose}>
      <main className="flex flex-col gap-2 p-5 justify-center items-center rounded-xl m-2 bg-white shadow-xl">
        <h1>DETAILS DU TOURNOI</h1>

        {loading ? (
          <p className="p-8 text-center">Chargement...</p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center w-full p-5"
          >
            <section className="flex flex-col flex-wrap w-full">
              <div className="flex flex-row flew-wrap justify-center items-center gap-2">
                <InputText
                  label="Nom du tournoi"
                  containerClassName="flex flex-row flew-wrap justify-center items-center"
                  required
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />

                <InputText
                  label="Frais d'inscription"
                  containerClassName="flex flex-row flew-wrap justify-center items-center"
                  type="text"
                  required
                  value={fees}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFees(e.target.value)
                  }
                />
              </div>

              <div className="flex flex-row flew-wrap justify-center items-center gap-2">
                <InputText
                  label="Date de début"
                  containerClassName="flex flex-row flew-wrap justify-center items-center"
                  type="date"
                  required
                  value={startDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStartDate(e.target.value)
                  }
                />

                <InputText
                  label="Date de fin"
                  containerClassName="flex flex-row flew-wrap justify-center items-center"
                  type="date"
                  required
                  value={endDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEndDate(e.target.value)
                  }
                />
              </div>

              <InputText
                label="Avatar"
                containerClassName="flex flex-row flew-wrap justify-center items-center gap-6"
                value={avatar}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAvatar(e.target.value)
                }
              />

              <InputText
                label="Adresse"
                containerClassName="flex flex-row flew-wrap justify-center items-center"
                required
                value={tourLocation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTourLocation(e.target.value)
                }
              />
            </section>

            <section className="flex flex-col flex-wrap w-full mt-2">
              <div className="flex flex-row flew-wrap justify-center items-center gap-2">
                <InputText
                  label="Capacité (ex: 100)"
                  containerClassName="flex flex-row flew-wrap justify-center items-center"
                  value={members}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMembers(e.target.value)
                  }
                />
              </div>
            </section>

            <section className="flex flex-col flex-wrap w-full relative">
              <table className="w-full">
                <caption>LISTE DE COMMANDITES</caption>
                <thead className="bg-gray-200 p-2 flex justify-start items-center w-full">
                  <tr className="bg-gray-200 p-2 flex justify-start items-center w-full">
                    <th className="flex-40">Nom de commandite</th>
                    <th className="flex-15">Valeur</th>
                    <th className="flex-10">Quotas</th>
                    <th className="flex-30">Places</th>
                    <th className="flex-5"></th>
                  </tr>
                </thead>

                <tbody>
                  {prizes.map((prize, i) => (
                    <tr key={i} className="m-0 flex w-full">
                      <td className="flex-40 flex text-center justify-center items-center">
                        <input
                          type="text"
                          placeholder="nom"
                          className="w-full p-2 text-center"
                          required
                          value={prize.name}
                          onChange={(e) =>
                            updatePrize(i, "name", e.target.value)
                          }
                        />
                      </td>

                      <td className="flex-15 flex text-center justify-center items-center">
                        $
                        <input
                          type="text"
                          placeholder="valeur"
                          className="w-full p-2 text-center"
                          required
                          value={prize.value}
                          onChange={(e) =>
                            updatePrize(i, "value", e.target.value)
                          }
                        />
                      </td>

                      <td className="flex-10 flex text-center justify-center items-center">
                        <input
                          type="text"
                          placeholder="quota"
                          className="w-full p-2 text-center"
                          required
                          value={prize.quotas}
                          onChange={(e) =>
                            updatePrize(i, "quotas", e.target.value)
                          }
                        />
                      </td>

                      <td className="flex-30 flex text-center justify-center items-center">
                        <input
                          type="text"
                          placeholder="places disponibles"
                          className="w-full p-2 text-center"
                          required
                          value={prize.places}
                          onChange={(e) =>
                            updatePrize(i, "places", e.target.value)
                          }
                        />
                      </td>

                      <td className="flex-5 p-2 text-center flex justify-center items-center">
                        <RiDeleteBin2Line
                          className="text-red-500 hover:cursor-pointer hover:opacity-80"
                          onClick={() => removePrizeRow(i)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Button
                className="bg-black-20 w-5 border-none absolute right-0 -translate-4 -translate-y-8 mt-10"
                title="+"
                type="button"
                onClick={addPrizeRow}
              />
            </section>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            {success && <p className="mt-3 text-sm text-green-600">{success}</p>}

            <section className="flex justify-evenly items-center w-full mt-4">
              <Button
                className="bg-green-400 border-none w-25"
                title={saving ? "Modification..." : "Modifier"}
                type="submit"
                disabled={saving}
              />
              <Button
                className="bg-red-400 border-none w-25"
                title="Fermer"
                type="button"
                onClick={onClose}
              />
            </section>
          </form>
        )}
      </main>
    </PopUp>
  );
}