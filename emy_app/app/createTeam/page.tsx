"use client";

//import React, { useEffect, useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import CreateTeamForm from "@/components/organisms/CreateTeamForm";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
/**
 * Page permettant à un administrateur de créer une nouvelle équipe.
 * 
 * Cette fonction :
 * - récupère l'utilisateur connecté via useAuth()
 * - affiche une animation de chargement tant que les données ne sont pas prêtes
 * - affiche la barre de navigation admin si l'utilisateur appartient à une communauté
 * - rend le formulaire de création d'équipe (CreateTeamForm)
 * - gère la redirection après création ou annulation
 */
export default function CreateTeamPage() {
  const { member, loading } = useAuth();
  const searchParams = useSearchParams();

  const editMode = useMemo(() => searchParams.get("edit") === "1", [searchParams]);
  const id_team = useMemo(() => Number(searchParams.get("id_team")), [searchParams]);
  if (loading) return <LoadingAnimation />;
  return (
    <div className="min-h-screen bg-white">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <CreateTeamForm
          // teamUrl="/api/member/team"
          // tournamentsUrl="/api/tournaments"
          // onSuccessRedirectTo="/equipes"
          // onCancel={() => (location.href = "/equipesPage")}

          teamUrl="/api/member/team"
        tournamentsUrl="/api/tournaments"
        // ✅ nouveaux props
        editMode={editMode}
        id_team={id_team}
        detailsUrl="/api/member/team/details"
        updateUrl="/api/member/team/update"
        />
      </main>

      <Footer />
    </div>
  );
}

