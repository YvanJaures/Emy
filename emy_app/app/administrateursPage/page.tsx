"use client";

import React, { useState } from "react";

import Navbar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";

import Button from "@/components/atoms/Button";
import ImageBackground from "@/components/atoms/ImageBackground";
import SectionPillTitle from "@/components/molecules/SectionPillTitle";
import AdminList from "@/components/organisms/AdminList";
import type { Admin } from "../../components/molecules/AdminRow";

export default function AdministrateursPage() {
  const [admins, setAdmins] = useState<Admin[]>([
    {
      id: "1",
      name: "Jean Dupuis",
      tournoi: "Tournoi 2025",
      email: "jean@gmail.com",
    },
    {
      id: "2",
      name: "Marie Desjardin",
      tournoi: "Tournoi 2025",
      email: "marie@gmail.com",
    },
  ]);

  const handleDelete = (id: string) => {
    setAdmins((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 py-8 mb-15">
        {/* Bandeau haut pâle + bouton vert */}
        <section className="mb-6 rounded-3xl bg-gradient-to-r from-rose-50 to-green-50 p-8">
          <div className="flex justify-center">
            <Button
              icon={<span className="text-base">+</span>}
              title="Ajouter un administrateur"
              color="bg-green-300 border-green-300 text-black/80 hover:bg-green-200"
              className="rounded-2xl border-0 px-10 py-3 text-sm shadow-sm"
            />
          </div>
        </section>

        {/* Grand bloc image + titre pill + liste */}
        <ImageBackground imageUrl="/assets/arrieres_plan/CarolinaLowcountry.png">
          <div className="flex justify-center pt-2">
            <SectionPillTitle text="Liste des administrateurs" />
          </div>

          <AdminList admins={admins} onDelete={handleDelete} />
        </ImageBackground>
      </main>

      <Footer />
    </div>
  );
}
