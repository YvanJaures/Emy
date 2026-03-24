"use client";
import React, { useState, useEffect } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import Footer from "@/components/organisms/Footer";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import UserSelectRow from "@/components/molecules/UserSelectRow";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import AdminList from "@/components/organisms/AdminList";
import OnError from "@/components/organisms/OnError";
import { Community_memberDTO, CommunityDTO, AdminDTO } from "@/hooks/Type_DTO";
import { useAuth } from "@/hooks/useAuth";
import notFound from "@/app/not-found";

type Props = {
  slug2: string;
  communities: Record<number, CommunityDTO>;
};

export default function AdminCommunityBlock({ slug2, communities }: Props) {
  const [admins, setAdmins] = useState<AdminDTO[]>([]);
  const [members, setMembers] = useState<Community_memberDTO[]>([]);
  const [community, setCommunity] = useState<CommunityDTO | null>(null);
  const [display, setDisplay] = useState("hidden");
  const [onError, setOnError] = useState(false);
  const [onPopUp, setOnPopUp] = useState(false);
  const [_loading, setLoading] = useState(true);
  const { member, loading } = useAuth();
  const [selectedMembers, setSelectedMembers] = useState<Community_memberDTO[]>(
    [],
  );

  useEffect(() => {
    try {
      const selectedCommunity = communities[Number(slug2)];
      setCommunity(selectedCommunity ?? null);
      setMembers(selectedCommunity?.Community_member ?? []);
      setAdmins(selectedCommunity?.Admin ?? []);
    } catch (error) {
      console.error(error);
      setOnError(true);
    } finally {
      setLoading(false);
    }
  }, [slug2, communities]);

  const handleDelete = async (id_admin: number) => {
    const admin = admins.find((a) => a.id_admin === id_admin);
    if (!admin) return;
    console.log({
          id_admin: admin.id_admin,
          user_name: admin.user_name,
          id_community: admin.id_community,
        })
    try {
      const res = await fetch("/api/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", role: "admin" },
        credentials: "include",
        body: JSON.stringify({
          id_admin: admin.id_admin,
          user_name: admin.user_name,
          id_community: admin.id_community,
        }),
      });
      if (!res.ok) throw new Error("Suppression échouée "+res.status);
      setAdmins((prev) => prev.filter((a) => a.id_admin !== id_admin));
    } catch (e) {
      console.error(e);
      setOnError(true);
    }
  };

  const handleAddAdmin = async () => {
    if (!community || selectedMembers.length === 0) return;

    try {
      const alreadyAdminsUserNames = admins.map((admin) => admin.user_name);

      const membersToAdd = selectedMembers.filter(
        (selectedMember) =>
          !alreadyAdminsUserNames.includes(selectedMember.user_name),
      );

      if (membersToAdd.length === 0) {
        setDisplay("hidden");
        setOnPopUp(false);
        setSelectedMembers([]);
        return;
      }
      let addedAdmin:AdminDTO[]=[]
      for (const selectedMember of membersToAdd) {
        const res = await fetch("/api/admin/admin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            role: "admin",
          },
          credentials: "include",
          body: JSON.stringify({
            user_name: selectedMember.user_name,
            id_community: community.id_community,
          }),
        });

        if (!res.ok) {
          throw new Error("Ajout d'administrateur échoué");
        }
        if(res.ok){
          addedAdmin.push(await res.json())
        }
      }

      /*const newAdmins: AdminDTO[] = membersToAdd.map(
        (selectedMember, index) => ({
          id_admin: -(Date.now() + index),
          user_name: selectedMember.user_name,
          id_community: community.id_community
        }),
      );*/
      const newAdmins: AdminDTO[]=addedAdmin
      setAdmins((prev) => [...prev, ...newAdmins]);
      setSelectedMembers([]);
      setDisplay("hidden");
      setOnPopUp(false);
    } catch (error) {
      console.error(error);
      setOnError(true);
    }
  };

  // Tous les hooks sont déclarés — returns conditionnels après
  if (loading) return <LoadingAnimation />;
  if (!community) return notFound();

  return (
    <>
      <div
        className={`min-h-screen bg-white flex flex-col justify-center items-center`}
      >
        {member?.Admin?.id_community && (
          <NavBarAdmin id_community={member.Admin.id_community} />
        )}

        <main
          className={`${onError ? "pointer-events-none blur-md" : ""} ${onPopUp ? "pointer-events-none blur-md" : ""} mx-auto w-full max-w-6xl px-6 py-8 mb-15`}
        >
          <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
            <div className="flex justify-center">
              <Button
                icon={<span className="text-base">+</span>}
                title="Ajouter un administrateur"
                color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
                className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
                onClick={() => {
                  setDisplay("flex");
                  setOnPopUp(true);
                }}
              />
            </div>
          </section>

          <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
            <div className="flex justify-center pt-2">
              <SectionPillTitle text="Liste des administrateurs" />
            </div>
            <AdminList admins={admins} onDelete={handleDelete} />
          </ImageBackground>
        </main>

        {onError && (
          <OnError
            title="Suppression"
            message="Une erreur est survenue! Impossible de supprimer cet administrateur. Veuillez réessayer plus tard."
            onConfirmed={(res) => setOnError(res)}
          />
        )}

        <Footer />

        <div
          className={
            `flex-col justify-center items-center shadow-xl absolute 
            bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] 
            p-2 rounded-xl z-50 overflow-visible ` + display
          }
        >
          <Title as="h2" className="p-1 flex-5">
            Selectionner un nouvel admin
          </Title>
          <span className="flex justify-center items-center p-2 gap-5">
            <Button
              title="Ajouter"
              className="w-[100%] h-5 border-none bg-green-400"
              //type="submit"
              type="button"
              onClick={handleAddAdmin}
            />
            <Button
              title="Annuler"
              className="w-[100%] h-5 border-none bg-red-500"
              onClick={() => {
                setDisplay("hidden");
                setOnPopUp(false);
                setSelectedMembers([]);
              }}
            />
          </span>
          <UserSelectRow
            users={members}
            className="flex-90"
           onSelectionChange={setSelectedMembers}
          />
        </div>
      </div>
    </>
  );
}
