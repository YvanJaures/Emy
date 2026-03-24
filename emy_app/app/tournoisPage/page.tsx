"use client";

import React, { useEffect, useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";

import Button from "@/components/atoms/Button";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import TournamentList from "@/components/organisms/TournamentList";
import MetaData from "@/components/organisms/MetaData";
import type { TournamentDTO } from "@/hooks/Type_TournamentDTO";
import { useAuth } from "@/hooks/useAuth";
import OnError from "@/components/organisms/OnError";

/**
 * Page listant tous les tournois de la communauté.
 *
 * Cette fonction :
 * - charge les tournois depuis l’endpoint /api/tournaments
 * - utilise useAuth() pour récupérer l’utilisateur connecté et afficher la barre admin
 * - affiche une animation de chargement tant que les données ne sont pas disponibles
 * - rend la liste des tournois via TournamentList
 * - permet la suppression d’un tournoi via handleDelete()
 * - propose un bouton pour créer un nouveau tournoi
 */

type ApiMessage = { message?: string };

export default function TournoisPage() {
  const [tournaments, setTournaments] = useState<TournamentDTO[]>([]);
  const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<number | null>(null);
  const {member}=useAuth()
  const [onError, setOnError] = useState(false);
  const [onPopUp,setOnPopUp]=useState(false)

  // const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";
  //const TOURNAMENTS_URL = `${API_BASE}/api/tournaments`;
  // ADAPTER LE NOM DE LA ROUTE
  const TOURNAMENTS_URL = `/api/tournaments`;
  //console.log(member)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(TOURNAMENTS_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Erreur chargement tournois");
        const data = (await res.json()) as TournamentDTO[];
        setTournaments(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [TOURNAMENTS_URL]);

  const handleDelete = async (id_tour: number) => {
    const id_community = member?.Admin?.id_community;

    if (!id_community) {
      alert("Communauté introuvable (admin non chargé).");
      return;
    }

    try {
      setDeletingId(id_tour);

      const res = await fetch("/api/admin/tour", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          role: "admin", // ⚠️ selon ton verifyAdmin actuel
        },
        body: JSON.stringify({ id_tour, id_community }),
      });

      const data: ApiMessage | null = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message ?? "Suppression échouée");
      }

      setTournaments((prev) => prev.filter((t) => t.id_tour !== id_tour));
    } catch (e: unknown) {
  //     console.error(e);
  //     setOnError(true);
  //     setOnPopUp(true)
  //   }
  // };
  console.error(e);
      alert(
        e instanceof Error ? e.message : "Impossible de supprimer ce tournoi.",
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="min-h-screen bg-white">
          <MetaData
            seoTitle="Tournois de la communauté"
            seoDescription="Tournois de la communauté"
          ></MetaData>
          {member?.Admin?.id_community && (
            <NavBarAdmin id_community={member.Admin.id_community} />
          )}
          <main className="mx-auto w-full max-w-6xl px-6 py-8">
            {/* Bandeau pâle + bouton vert */}
            <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
              <div className="flex justify-center">
                <Button
                  title="Créer une compétition"
                  icon={<span className="text-base">+</span>}
                  color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
                  className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
                  onClick={() => {
                    location.href = "/createTour";
                  }}
                />
              </div>
            </section>

            {/* Bloc image + liste */}
            <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
              <div className="flex justify-center pt-2">
                <SectionPillTitle text="Liste des tournois" />
              </div>

              {loading ? (
                <p className="mt-6 text-xs text-white/90">Chargement...</p>
              ) : (
                <TournamentList
                  tournaments={tournaments}
                  onDelete={handleDelete}
                  deletingId={deletingId}
                />
              )}
            </ImageBackground>
          </main>

          <Footer />
          {onError && (
          <OnError
            title="Suppression"
            message="Une erreur est survenue! Impossible de supprimer ce tournoi. Veuillez réessayer plus tard."
            onConfirmed={(res) =>{ setOnError(res);setOnPopUp(res)}}
          />
        )}
        </div>
      )}
     
    </>
  );
}

