import type { Metadata } from "next";
import { TournamentDTO, MemberDTO } from "@/hooks/Type_DTO";
import TournamentBlockSlug from "@/components/organisms/TournamentBlockSlug";
import { useConnexion } from "@/hooks/useAuth";
import Constructing from "@/components/organisms/Constructing";
import Navbar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getTournaments(): Promise<TournamentDTO[]> {
  const res = await fetch(`${process.env.API_BASE}/api/tournaments`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

function buildMap(tournois: TournamentDTO[]): Record<number, TournamentDTO> {
  return tournois.reduce((acc, c) => {
    acc[c.id_tour] = c;
    return acc;
  }, {} as Record<number, TournamentDTO>);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tournois = await getTournaments();
  const tournaments = buildMap(tournois);
  const tournament = tournaments[Number(slug)];

  if (!tournament) {
    return { title: "Communauté non trouvée", description: "Cette communauté n'existe pas." };
  }

  return {
    title: tournament.name,
    description: tournament.Community.details,
    robots:{
        index:false,
        follow:false
    },
    openGraph: {
      title: tournament.name? tournament.name:'',
      description: tournament.Community.details? tournament.Community.details:'',
      siteName:"Emy",
      images: [{ url: tournament.avatar? tournament.avatar:'/assets/logos/emy_foot.png', width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card:"summary_large_image",
      title: tournament.name? tournament.name:'',
      description: tournament.Community.details? tournament.Community.details:'',
      images: [{ url: tournament.avatar? tournament.avatar:'/assets/logos/emy_foot.png', width: 1200, height: 630 }]
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const tournois = await getTournaments();
  const tournaments = buildMap(tournois);
  const selectedTournament = tournaments[Number(slug)]

  return (
    <>
      <TournamentBlockSlug tournament={selectedTournament} />
      <Footer/>
    </>
  )
}