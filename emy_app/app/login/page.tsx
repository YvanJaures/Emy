"use client";
import Confirmation from "@/components/organisms/Confirmation";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import LoginForm from "@/components/organisms/LoginForm";
import MetaData from "@/components/organisms/MetaData";
import { useAuth, useConnexion } from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useMemo } from "react";

/**
 * Page de connexion permettant à un utilisateur (admin ou membre) de s’authentifier.
 *
 * Cette fonction :
 * - utilise useAuth() pour récupérer l’état d’authentification de l’utilisateur
 * - prépare la route de redirection après connexion (profil admin)
 * - affiche les métadonnées SEO de la page
 * - affiche un fond d’écran avec un effet de carte en verre (glassmorphism)
 * - rend le formulaire de connexion (LoginForm)
 * - inclut un bouton permettant de revenir à la page précédente
 */

export default function LoginPage() {
  const {member,loading}=useConnexion();
  if(loading) return <LoadingAnimation/>
  return (
    <>
    <MetaData seoTitle="Log in" seoDescription="page de connexion"></MetaData>
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/arrieres_plan/DesertBloomArizona.png)] dark:bg-[url(/assets/arrieres_plan/Desert_bloom_night.png)]"
    >
      {/* Overlay léger (aide à lire la carte) */}
      <div className="min-h-screen w-full bg-black/10 flex items-center justify-center p-6">
        {/* Card / Modal */}
        <section className="relative w-[360px] max-w-[92vw] rounded-xl bg-white/35 backdrop-blur-md border border-white/40 shadow-2xl">
          {/* Petit effet “header” doux comme sur l’image */}
          <div className="h-12 w-full rounded-t-xl bg-white/10" />

          {/* Bouton X */}
          <button
            type="button"
            aria-label="Close"
            className="absolute left-4 top-4 text-black/70 hover:text-black hover:cursor-pointer text-[40px] leading-none"
            onClick={() => history.back()}
          >
          ×
          </button>

          {/* Contenu */}
            <div className="px-10 pb-10 pt-2">
              <Suspense fallback={<><LoadingAnimation/></>}>
                <LoginContent member={member} />
              </Suspense>
            </div>
        </section>
      </div>
      <Confirmation
        title="Etes vous sur iOS ?"
        message="La connexion est actuellement désactivé pour tous les appareils ios. Nous travaillons actuellement sur la mise à jour de cette fonctionnalité. Merci de votre compréhension!"
        onConfirmed={(res) => {
        }}
        showConfirm={true}
      />
    </main>
  </>
  );
}
function LoginContent({ member }: { member: any }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const route = useMemo(() => {
    return searchParams.get("redirect") || "/communautes"
  }, [searchParams])

  useEffect(() => {
    if (member) {
      router.push(route)
    }
  }, [member, route, router])

  return <LoginForm route={route} />
}