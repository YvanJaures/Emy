"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import PopCommunity from "@/components/organisms/PopCommunity";
import Title from "@/components/atoms/Title";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/NavBar";

export default function Home() {
  const router = useRouter();
  const list_communautes = [
    {
      name: "Ottawa city",
      details: "Communauté de la ville d’ottawa. Rejoins nous pour du fun!",
      avatar: "/assets/arrieres_plan/AutumnParkland.png",
      members: 150,
      location: "New York, Canada",
      id_manager: "12",
      privacy: false,
    },
    {
      name: "Toronto city",
      details: "Communauté de la ville de Toronto. Rejoins nous pour du fun!",
      avatar: "/assets/arrieres_plan/CoastalCarolina.png",
      members: 220,
      location: "Los Angeles, Canada",
      id_manager: "12",
      privacy: true,
    },
    {
      name: "Oshawa city",
      details: "Communauté de la ville d’oshawa. Rejoins nous pour du fun!",
      avatar: "/assets/arrieres_plan/EtangGolf.png",
      members: 180,
      location: "Madrid, Canada",
      id_manager: "12",
      privacy: false,
    },
  ];
  return (
    <div className="flex flex-col gap-6 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <div className="w-full bg-contain h-[300px] bg-no-repeat bg-clip-content bg-fixed overflow-hidden">
        <img
          src="/assets/arrieres_plan/AlpineFairwayCanada.png"
          alt="image accueil des alpines"
          className="h-110 w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-5">
        <Title className="text-[40px] text-start">BIENVENUE</Title>
        <span className="text-wrap text-center">
          Emy est une plateforme en ligne d’hébergement de tournois de golf.
          C’est l’occasion de découvrir pour vous passionés de golf toutes les
          compétitions dans votre région. N’attendez plus, inscrivez vous dès
          maintenant et réjoingnez un tournoi.
        </span>
        <Button
          title="S'INSCRIRE"
          onClick={() => router.push("/register")}
          className="bg-[#0F70AC] text-white"
          color="#0F70AC"
        ></Button>
      </div>
      <PopCommunity list={list_communautes}></PopCommunity>
      <Button title="GO TO profile" onClick={() => router.push("/profilAdmin")} />

      <Footer />
    </div>
  );
}
