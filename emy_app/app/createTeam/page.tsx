"use client";

//import React, { useEffect, useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import CreateTeamForm from "@/components/organisms/CreateTeamForm";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";
import React, { Suspense, useMemo } from "react";
import { CreateTeamContent } from "@/components/organisms/CreateTeamContent";
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

  if (loading) return <LoadingAnimation />;
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {member?.Admin?.id_community && (
        <NavBarAdmin id_community={member.Admin.id_community} />
      )}

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <Suspense fallback={<LoadingAnimation />}>
          <CreateTeamContent />
        </Suspense>

      </main>

      <Footer />
    </div>
  );
}

