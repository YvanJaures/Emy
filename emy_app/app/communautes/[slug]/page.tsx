import type { Metadata } from "next";
import { CommunityDTO, MemberDTO } from "@/hooks/Type_DTO";
import CommunityBlockSlug from "@/components/organisms/communityBlockSlug";
import { useConnexion } from "@/hooks/useAuth";
import ScrollToHash from "@/components/molecules/ScrollToHash";
import Footer from "@/components/organisms/Footer";
import { notFound } from "next/navigation";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getCommunities(): Promise<CommunityDTO[]> {
  const res = await fetch(`${process.env.API_BASE}/api/communities`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

function buildMap(communautes: CommunityDTO[]): Record<number, CommunityDTO> {
  return communautes.reduce((acc, c) => {
    acc[c.id_community] = c;
    return acc;
  }, {} as Record<number, CommunityDTO>);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const communautes = await getCommunities();
  const communities = buildMap(communautes);
  const community = communities[Number(slug)];

  if (!community) {
    return { title: "Communauté non trouvée", description: "Cette communauté n'existe pas." };
  }

  return {
    title: community.name,
    description: community.details,
    robots:{
        index:false,
        follow:false
    },
    openGraph: {
      title: community.name? community.name:'',
      description: community.details? community.details:'',
      siteName:"Emy",
      images: [{ url: community.avatar? community.avatar:'/assets/logos/emy_foot.png', width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card:"summary_large_image",
      title: community.name? community.name:'',
      description: community.details? community.details:'',
      images: [{ url: community.avatar? community.avatar:'/assets/logos/emy_foot.png', width: 1200, height: 630 }]
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const communautes = await getCommunities();
  const communities = buildMap(communautes);
  const selectedCommunity = communities[Number(slug)]

  if(!selectedCommunity) return notFound()
  return( 
  <>
    <CommunityBlockSlug community={selectedCommunity} />
  </>
  )
}