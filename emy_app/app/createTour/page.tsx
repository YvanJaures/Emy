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

/**
 * Page permettant à un administrateur de créer un tournoi.
 *
 * Cette fonction :
 * - gère tous les états du formulaire (lieu, dates, type, avatar, frais, statut…)
 * - récupère l'utilisateur connecté via useAuth() pour vérifier l'accès admin
 * - affiche une animation de chargement tant que l’authentification n’est pas prête
 * - construit le payload et envoie la requête POST vers /api/admin/tour
 * - affiche les messages d’erreur ou de succès selon la réponse du serveur
 * - rend le formulaire complet de création de tournoi, incluant la table des commandites (UI)
 */
export default function CreateTournament() {
  const [tr, setTr] = useState(1);

  // l’API
  const [tourLocation, setTourLocation] = useState("");
  const [typeTour, setTypeTour] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fees, setFees] = useState("");
  const [members, setMembers] = useState("0");
  //const [idAdmin, setIdAdmin] = useState("");
  //const [idCommunity, setIdCommunity] = useState("");

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [_loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const { member, loading } = useAuth();

  let trHaut = "";
  if (tr < 2) trHaut = "pointer-events-none";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const id_admin = member?.Admin?.id_admin;
    const id_community = member?.Admin?.id_community;

    if (!id_admin || !id_community) {
      setError(
        "Impossible de déterminer votre admin/communauté. Reconnectez-vous.",
      );
      return;
    }

    //  validation selon ton controller
    // if (!tourLocation || !startDate || !endDate || !idAdmin || !idCommunity) {
    if (!tourLocation || !startDate || !endDate) {
      setError("Veuillez remplir: Nom/Lieu, dates");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        location: tourLocation.trim(),
        start_date: startDate,
        end_date: endDate,
        members: members ? Number(members) : 0,
        avatar: avatarFile ? avatarFile.name : "",
        id_admin: Number(id_admin),
        id_community: Number(id_community),
        //id_admin: Number(idAdmin),
        // id_community: Number(idCommunity),
      };

      const res = await fetch("/api/admin/tour", {
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

      setSuccess("Tournoi créé ");
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

        {/* form submit */}
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
                value={tourLocation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTourLocation(e.target.value)
                }
              />

              {/* UI only */}
              <InputText
                label="Type de tournoi"
                containerClassName="flex flex-row flew-wrap justify-center items-center"
                required
                value={typeTour}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTypeTour(e.target.value)
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

            {/* avatar (UI) */}
            <InputText
              label="Avatar"
              containerClassName="flex flex-row flew-wrap justify-center items-center gap-6"
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAvatarFile(e.target.files?.[0] ?? null)
              }
            />
          </section>

          <section className="flex flex-col flex-wrap w-full mt-2">
            <div className="flex flex-row flew-wrap justify-center items-center gap-2">
              {/* <InputText
                label="ID Admin"
                containerClassName="flex flex-row flew-wrap justify-center items-center"
                required
                value={idAdmin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdAdmin(e.target.value)
                }
              /> */}
              {/* <InputText
                label="ID Community"
                containerClassName="flex flex-row flew-wrap justify-center items-center"
                required
                value={idCommunity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdCommunity(e.target.value)
                }
              /> */}
            </div>

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

          {/* Table commandites (UI - pas envoyé à createTour pour le moment) */}
          <section className="flex flex-col flex-wrap w-full">
            <table className="w-full">
              <caption>LISTE DE COMMANDITES</caption>
              <thead className="bg-gray-200 p-2 flex justify-start items-center w-full">
              <tr className="bg-gray-200 p-2 flex justify-start items-center w-full" >
                <th className="flex-40">Nom de commandite</th>
                <th className="flex-15">Valeur</th>
                <th className="flex-10">Quotas</th>
                <th className="flex-30">Places</th>
                <th className="flex-5"></th>
              </tr>
              </thead>
              <tbody id="tableBody">
                {[...Array(tr)].map((_, i) => (
                  <tr key={i} className="m-0 flex w-full">
                    <td className="flex-40 flex text-center justify-center items-center">
                      <input
                        type="text"
                        placeholder="nom"
                        className="w-full p-2 text-center"
                        required
                      />
                    </td>
                    <td className="flex-15 flex text-center justify-center items-center">
                      $
                      <input
                        type="text"
                        placeholder="valeur"
                        className="w-full p-2 text-center"
                        required
                      />
                    </td>
                    <td className="flex-10 flex text-center justify-center items-center">
                      <input
                        type="text"
                        placeholder="quota"
                        className="w-full p-2 text-center"
                        required
                      />
                    </td>
                    <td className="flex-30 flex text-center justify-center items-center">
                      <input
                        type="text"
                        placeholder="places disponibles"
                        className="w-full p-2 text-center"
                        required
                      />
                    </td>
                    <td className="flex-5 p-2 text-center flex justify-center items-center">
                      <RiDeleteBin2Line
                        className={trHaut+" text-red-500 hover:cursor-pointer hover:opacity-80"}
                        onClick={() => setTr(tr - 1)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Button
              className="bg-black-20 w-5 border-none absolute right-0 -translate-4 -translate-y-8"
              title="+"
              type="button"
              onClick={() => setTr(tr + 1)}
            />
          </section>

          {/* messages */}
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          {success && <p className="mt-3 text-sm text-green-600">{success}</p>}

          <section className="flex justify-evenly items-center w-full mt-4">
            <Button
              className="bg-green-400 border-none w-25"
              title={_loading ? "Création..." : "Creer"}
              type="submit"
              disabled={_loading}
              // onClick={() => {
              //   location.href = "/tournoisPage";
              // }}
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
