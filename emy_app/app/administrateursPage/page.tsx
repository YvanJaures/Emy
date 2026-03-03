"use client";

import React, { useState, useEffect, useMemo } from "react";

import NavbarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import MetaData from "@/components/organisms/MetaData";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import UserSelectRow from "@/components/molecules/UserSelectRow";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import AdminList from "@/components/organisms/AdminList";
import type { AdminDTO } from "@/hooks/Type_AdminDTO";
import { MemberDTO } from "@/hooks/Tpe_MemberDTO";

/**
 * Page d’administration permettant :
 * - d’afficher la liste des administrateurs
 * - de charger les membres pour en ajouter un comme admin
 * - de supprimer un administrateur existant
 * - d’ouvrir un modal pour sélectionner un nouvel admin
 *
 * Cette fonction gère :
 * - les appels API (GET admins, GET members, DELETE admin)
 * - les états de chargement
 * - l’affichage conditionnel (loading, liste, modal)
 */
export default function AdministrateursPage() {

  const [admins, setAdmins] = useState<AdminDTO[]>([]);
  const [members, setMembers] = useState<MemberDTO[]>([]);

  const [loadingAdmins, setLoadingAdmins] = useState(true);
  const [loadingMembers, setLoadingMembers] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ADMINS_URL = useMemo(() => "/api/admin/admins", []);
  const DELETE_ADMIN_URL = useMemo(() => "/api/admin/admin", []);
  const MEMBERS_URL = useMemo(() => "/api/members", []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(ADMINS_URL, {
          cache: "no-store",
          credentials: "include",
        });
        if (!res.ok) throw new Error("Erreur chargement admins");
        const data = (await res.json()) as AdminDTO[];
        setAdmins(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingAdmins(false);
      }
    })();
  }, [ADMINS_URL]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(MEMBERS_URL, {
          cache: "no-store",
          credentials: "include",
        });
        if (!res.ok) throw new Error("Erreur chargement members");
        const data = (await res.json()) as MemberDTO[];
        setMembers(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingMembers(false);
      }
    })();
  }, [MEMBERS_URL]);

  const handleDelete = async (id_admin: number) => {
    const admin = admins.find((a) => a.id_admin === id_admin);
    if (!admin) return;

    try {
      const res = await fetch(DELETE_ADMIN_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id_admin: admin.id_admin,
          user_name: admin.user_name,
          id_community: admin.id_community,
        }),
      });

      if (!res.ok) throw new Error("Suppression échouée");
      setAdmins((prev) => prev.filter((a) => a.id_admin !== id_admin));
    } catch (e) {
      console.error(e);
      alert("Impossible de supprimer cet administrateur.");
    }
  };

  const isLoading = loadingAdmins || loadingMembers;

  return (
    <>
    {
      isLoading ? (
        <LoadingAnimation/>
      ):(
    <div className="min-h-screen bg-white">
      <MetaData seoTitle="Liste des administrateurs" seoDescription="liste des administrateurs de la communauté"></MetaData>
     {/* {member?.Admin?.id_community && (
        <Component id_community={member.Admin.id_community} />
      )}
*/}
      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
          <div className="flex justify-center">
            <Button
              icon={<span className="text-base">+</span>}
              title="Ajouter un administrateur"
              color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
              className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </section>

        <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
          <div className="flex justify-center pt-2">
            <SectionPillTitle text="Liste des administrateurs" />
          </div>

          {loadingAdmins ? (
            <p className="mt-6 text-xs text-white/90">Chargement...</p>
          ) : (
            <AdminList admins={admins} onDelete={handleDelete} />
          )}
        </ImageBackground>
      </main>

      <Footer />

      {/* Modal (optionnel) */}
      {isModalOpen && (
        <>
          <button
            aria-label="Fermer"
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-3xl h-[70%] rounded-xl bg-white shadow-xl p-4">
            <Title as="h2" className="p-1">
              Selectionner un nouvel admin
            </Title>

            <div className="flex justify-center items-center p-2 gap-5">
              <Button
                title="Ajouter"
                className="w-full h-10 border-none bg-green-400"
                type="button"
                onClick={() => {
                  // TODO: route POST pour ajouter un admin (selon ton backend)
                }}
              />
              <Button
                title="Annuler"
                className="w-full h-10 border-none bg-red-500"
                type="button"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <div className="mt-2 h-[calc(70%-120px)] overflow-auto">
{ /*             <UserSelectRow users={members} className="w-full" />
*/}            </div>
          </div>
        </>
      )}
    </div>
      )}
    </>
  );
}
