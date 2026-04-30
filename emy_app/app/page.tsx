"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import PopCommunity from "@/components/organisms/PopCommunity";
import Title from "@/components/atoms/Title";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/NavBar";
import MetaData from "@/components/organisms/MetaData";
import Founders from "@/components/organisms/Founders";
import { useConnexion } from "@/hooks/useAuth";
import MapSection from "@/components/organisms/MapSection";

export default function Home() {
  const router = useRouter();
  const { member } = useConnexion();
  const list_communautes = [
    {
      name: "Ottawa city",
      details: "Communauté de la ville d'ottawa. Rejoins nous pour du fun!",
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
      details: "Communauté de la ville d'oshawa. Rejoins nous pour du fun!",
      avatar: "/assets/arrieres_plan/EtangGolf.png",
      members: 180,
      location: "Madrid, Canada",
      id_manager: "12",
      privacy: false,
    },
  ];

  if (member) location.href = "/communautes";

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <MetaData seoTitle="Accueil" seoDescription="Accueil du site" />
      <Navbar />

      {/* Hero */}
      <div className="relative w-full max-sm:h-140 overflow-hidden">
        <img
          src="/assets/arrieres_plan/AlpineFairwayCanada.png"
          alt="image accueil des alpines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-5 px-6 text-center">
          <span className="text-xs tracking-[3px] text-white/70 uppercase border border-white/20 px-4 py-1 rounded-full">
            Plateforme de golf #1 au Canada
          </span>
          <Title className="text-[42px] text-white drop-shadow-md">
            BIENVENUE SUR EMY
          </Title>
          <p className="text-white/80 max-w-xl text-sm leading-relaxed">
            Découvrez toutes les compétitions de golf dans votre région.
            Rejoignez une communauté et participez à des tournois organisés
            régulièrement.
          </p>
          <div className="flex w-full justify-evenly mt-2">
            <Button
              title="S'INSCRIRE"
              onClick={() => router.push("/signup")}
              className="bg-[#0F70AC] text-white border-none w-fit"
              color="#0F70AC"
            />
            <Button
              title="TOURNOIS"
              onClick={() => router.push("/tournois")}
              className="bg-white/10 text-white border-none w-fit backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 bg-[#0F70AC]">
        {[
          { num: "550+", label: "Membres" },
          { num: "12+", label: "Communautés" },
          { num: "40+", label: "Tournois" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-5 border-r border-white/20 last:border-r-0 dark:bg-gray-800/90">
            <span className="text-white text-2xl font-medium">{s.num}</span>
            <span className="text-white/60 text-xs tracking-widest uppercase mt-1">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="flex flex-col items-center px-6 py-12 gap-4 max-w-2xl mx-auto text-center">
        <Title className="text-[28px]">QU'EST-CE QUE EMY ?</Title>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          Emy est une plateforme en ligne d'hébergement de tournois de golf.
          N'attendez plus, inscrivez-vous dès maintenant et rejoignez une de nos
          nombreuses communautés remplies de passionnés de golf comme vous.
        </p>
      </div>

      {/* Communautés populaires */}

      <PopCommunity list={list_communautes} />

      {/* Features */}
      <div className="w-full bg-zinc-100 dark:bg-black py-12 px-6 mt-6">
        <div className="max-w-5xl mx-auto">
          <Title className="text-[22px] text-center mb-8">POURQUOI CHOISIR EMY ?</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tournois organisés",
                desc: "Des compétitions régulières adaptées à tous les niveaux.",
              },
              {
                title: "Communautés locales",
                desc: "Rejoignez des golfeurs passionnés près de chez vous.",
              },
              {
                title: "Inscription simple",
                desc: "Créez votre profil et commencez à jouer en quelques minutes.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col gap-3 border border-zinc-200 dark:border-zinc-700"
              >
                <p className="font-medium text-sm tracking-wide">{f.title}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MapSection/>
      {/* Fondateurs */}
      <Founders />

      {/* CTA final */}
      <div className="w-full bg-[url(/assets/arrieres_plan/CoastalCarolina2.png)] bg-center bg-cover dark:bg-gray-800/90">
        <div className="w-full flex flex-col items-center gap-4 text-center bg-black/55 h-full py-20 px-6">
          <Title className="text-[26px] text-white">PRÊT À REJOINDRE LA COMMUNAUTÉ ?</Title>
          <p className="text-white/70 text-sm max-w-md">
            Des tournois sont organisés régulièrement. Ne manquez plus aucune compétition près de chez vous.
          </p>
          <Button
            title="CRÉER MON COMPTE"
            onClick={() => router.push("/signup")}
            className="bg-black  text-[#0F70AC] border-none w-fit mt-2 font-medium "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}