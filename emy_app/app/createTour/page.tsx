"use client";

import { useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import MetaData from "@/components/organisms/MetaData";
import InputText from "@/components/atoms/InputText";
import Button from "@/components/atoms/Button";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useAuth } from "@/hooks/useAuth";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";

type PrizeRow = {
  name: string;
  value: string;
  quotas: string;
  places: string;
};

/**
 * Page qui permet de creer un tournoi
 */
export default function CreateTournament() {
  const [tr, setTr] = useState(1);

  const [tourLocation, setTourLocation] = useState("");
  const [typeTour, setTypeTour] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fees, setFees] = useState("");
  const [members, setMembers] = useState("0");

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [_loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [prizes, setPrizes] = useState<PrizeRow[]>([
    { name: "", value: "", quotas: "", places: "" },
  ]);

  const { member, loading } = useAuth();

  let trHaut = "";
  if (tr < 2) trHaut = "pointer-events-none";

  function addPrizeRow() {
    setTr((prev) => prev + 1);
    setPrizes((prev) => [
      ...prev,
      { name: "", value: "", quotas: "", places: "" },
    ]);
  }

  function removePrizeRow(index: number) {
    if (prizes.length <= 1) return;
    setTr((prev) => prev - 1);
    setPrizes((prev) => prev.filter((_, i) => i !== index));
  }

  function updatePrize(index: number, field: keyof PrizeRow, value: string) {
    setPrizes((prev) =>
      prev.map((prize, i) =>
        i === index ? { ...prize, [field]: value } : prize,
      ),
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

    const id_community = member?.Admin?.id_community;

    if (!id_community) {
      setError("Impossible de déterminer votre communauté. Reconnectez-vous.");
      return;
    }

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

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        location: tourLocation.trim(),
        start_date: startDate,
        end_date: endDate,
        members: members ? Number(members) : 0,
        avatar: avatarFile ? avatarFile.name : "",
        id_community: Number(id_community),
        fees: Number(fees),
        prizes: prizes.map((prize) => ({
          name: prize.name.trim(),
          value: Number(prize.value),
          spots: Number(prize.places),
          group_spot: Number(prize.quotas),
        })),
      };

      console.log(payload);

      const res = await fetch("/api/admin/tour&prizes", {
        method: "POST",
        headers: { "Content-Type": "application/json", role: "admin" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = "Erreur lors de la création du tournoi.";
        try {
          const data = await res.json();
          if (data?.message) msg = data.message;
        } catch {}
        setError(msg);
        return;
      }

      setSuccess("Tournoi créé");
      setTimeout(() => {
        location.href = "/tournoisPage";
      }, 300);
    } catch (err) {
      console.error(err);
      setError("Erreur serveur.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <LoadingAnimation />;

  return (
    <div className="bg-gray-100">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}

      <MetaData
        seoTitle="Création de tournoi"
        seoDescription="creation de tournoi par un administrateur"
      ></MetaData>

      <main className="flex flex-col gap-2 p-5 justify-center items-center rounded-xl m-2 bg-white shadow-xl">
        <h1>CREATION D UN TOURNOI</h1>

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

              {/* <InputText
                label="Type de tournoi"
                containerClassName="flex flex-row flew-wrap justify-center items-center"
                required
                value={typeTour}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTypeTour(e.target.value)
                }
              /> */}
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
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAvatarFile(e.target.files?.[0] ?? null)
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

              <tbody id="tableBody">
                {prizes.map((prize, i) => (
                  <tr key={i} className="m-0 flex w-full">
                    <td className="flex-40 flex text-center justify-center items-center">
                      <input
                        type="text"
                        placeholder="nom"
                        className="w-full p-2 text-center"
                        required
                        value={prize.name}
                        onChange={(e) => updatePrize(i, "name", e.target.value)}
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
                        className={
                          trHaut +
                          " text-red-500 hover:cursor-pointer hover:opacity-80"
                        }
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
              title={_loading ? "Création..." : "Creer"}
              type="submit"
              disabled={_loading}
            />
            <Button
              className="bg-red-400 border-none w-25"
              title="Annuler"
              type="button"
              onClick={() => history.back()}
            />
          </section>
        </form>
      </main>

      <Footer />
    </div>
  );
}
