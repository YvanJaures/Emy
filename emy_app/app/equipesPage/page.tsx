"use client";

import React, { useEffect, useState } from "react";

import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";

import Button from "@/components/atoms/Button";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";

import TournamentTeamsBlock from "@/components/organisms/TournamentTeamsBlock";
import type { TournamentDTO } from "@/hooks/Type_DTO";
import { useAuth } from "@/hooks/useAuth";

/**
 * Page affichant la liste des équipes inscrites aux tournois d’une communauté.
 *
 * Cette fonction :
 * - récupère l’utilisateur connecté via useAuth() pour vérifier l’accès admin
 * - charge les équipes depuis l’endpoint /api/admin/tour/teams
 * - affiche une animation de chargement tant que les données ne sont pas prêtes
 * - affiche la barre de navigation admin si l’utilisateur appartient à une communauté
 * - rend la liste des équipes via TournamentTeamsBlock
 * - propose un bouton permettant de créer une nouvelle équipe
 */

export default function EquipesPage() {
  const [data, setData] = useState<TournamentDTO[]>([]);
  const [_loading, setLoading] = useState(true);
  const {member,loading}=useAuth()
  
useEffect(() => {
  const idCommunity = member?.Admin?.id_community;
  if (!idCommunity) return;

  (async () => {
    try {
      const res = await fetch(`/api/admin/tour/teams?id_community=${idCommunity}`, {
        cache: "no-store",
        headers: { role: "admin" },
      });

      if (!res.ok) throw new Error("Erreur chargement équipes");

      const json = (await res.json()) as TournamentDTO[];
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  })();
}, [member?.Admin?.id_community]);

  if(loading) return <LoadingAnimation/>
  return (
    // a copier coller dans les autres pages
    <div className="min-h-screen bg-white">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        {/* Bandeau pâle + bouton vert */}
        <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
          <div className="flex justify-center">
            <Button
              icon={<span className="text-base">+</span>}
              title="Créer une équipe"
              color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
              className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
              onClick={() => (location.href = "/createTeam")}
            />
          </div>
        </section>

        {/* Bloc image + titre + blocs tournois */}
        <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
          <div className="flex justify-center pt-2">
            <SectionPillTitle text="Liste des équipes" />
          </div>

          <div className="mt-6 space-y-6">
            {_loading ? (
              <p className="text-xs text-white/90">Chargement...</p>
            ) : (
              data.map((t) => <TournamentTeamsBlock key={t.id_tour} t={t} admin={true} />)
            )}
          </div>
        </ImageBackground>
      </main>

      <Footer />
    </div>
  );
}