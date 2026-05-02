"use client";

import { CommunityDTO } from "@/hooks/Type_DTO";
import { SlMagnifier } from "react-icons/sl";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { TbTournament } from "react-icons/tb";
import { GrMapLocation, GrShare } from "react-icons/gr";
import Title from "../atoms/Title";
import ImageDefault from "../atoms/ImageDefault";
import { useState, useEffect } from "react";
import { getCommunityMembers, getCommunityTournaments } from "@/fetchs/global";
import { MemberDTO, TournamentDTO } from "@/hooks/Type_DTO";
import UserViewList from "../molecules/UserViewList";
import TourViewList from "../molecules/TourViewList";
import OnError from "./OnError";
import Constructing from "./Constructing";
import NavBarCommunity from "./NavBarCommunity";
import OnPrivate from "./OnPrivate";
import { useConnexion } from "@/hooks/useAuth";
import { RiArrowLeftSLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
type Props = {
  community: CommunityDTO;
};
/**
 * Affiche les données sur la communauté
 * @param community
 * @param member
 * @returns la page de detail de communauté
 */
export default function CommunityBlockSlug({ community }: Props) {
  const [members, setMembers] = useState<MemberDTO[]>([]);
  const [tournaments, setTournaments] = useState<TournamentDTO[]>([]);
  const [onError, setOnError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMember, SetIsMember] = useState(false);
  const [view, setView] = useState(1);
  const router = useRouter();
  const { member } = useConnexion();
  const handleShareClick=()=>{
      if(navigator.share){
      try{
          navigator.share({
              title:community.name,
              text:community.details ?? "Rejoignez moi sur cette communauté !",
              url:location.href
          })
          }catch(error){
          console.error("Erreur lors du partage :", error);
          }
      }else{
          alert('Partage non supporté sur ce navigateur');
      }
  }
  useEffect(() => {
    const handleIsMember = () => {
      community.Community_member?.forEach((memb) => {
        if (memb.user_name === member?.user_name) {
          SetIsMember(true);
        }
        return;
      });
    };
    handleIsMember();
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const res = await getCommunityMembers(community.id_community);
        setOnError(false);
        if (res) {
          setMembers(res);
          setLoading(false);
          res.forEach((memb: MemberDTO) => {
            if (memb.user_name === member?.user_name) {
              SetIsMember(true);
            }
          });
        }
      } catch (error) {
        setOnError(true);
      }
    };
    fetchMembers();
    const fetchTournaments = async () => {
      try {
        setLoading(true);
        const res = await getCommunityTournaments(community.id_community);
        setOnError(false);
        if (res) {
          setTournaments(res);
          setLoading(false);
        }
      } catch (error) {
        setOnError(true);
      }
    };
    fetchTournaments();
  }, [member]);

  return (
    <div
      className="z-150 absolute fixed flex flex-col top-0 left-0 
            bg-white h-lvh w-full overflow-scroll max-sm:h-full dark:bg-black"
    >
            <header className="flex-5 absolute sticky top-0 left-0 dark:bg-gray-800
                flex justify-between items-center w-full p-3 bg-white/70 z-99">
                <RiArrowLeftSLine 
                    title="Retour"
                    onClick={()=>router?.push('/communautes#community-'+community.id_community)}
                    className="hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-black/20 rounded-full stroke-2 size-5"/>
                <Title
                    children={community.name}
                    as='h2'
                    className="bold max-sm:text-[14px] overflow-hidden line-clamp-1"/>
                <p className="font-semibold max-sm:text-[14px] overflow-hidden line-clamp-1">Id : {community.id_community}</p>
                <SlMagnifier 
                    className="hover:cursor-pointer stroke-2 size-4 stroke-2"
                    onClick={()=>alert('La recherche est en cours de développement')}
                />
                <GrShare 
                    title="Partager"
                    onClick={handleShareClick}
                    className="hover:cursor-pointer size-4 stroke-2"
                />
            </header>
      <main className="flex-95 flex flex-col w-full justify-start items-center">
        <div className="flex-20 w-full">
          <ImageDefault
            avatar={community.avatar ?? ""}
            title="avatar de la communauté"
            className="object-cover h-40 w-full flex justify-center items-center"
          />
          <span className="absolute -translate-y-5 p-2 gap-2 rounded-t-2xl bg-white w-full flex justify-between dark:bg-gray-800">
            <span className="flex justify-center items-center gap-1">
              <FaGlobeAmericas />
              {community.privacy ? "Privée" : "Publique"}
            </span>
            <span className="flex gap-1 justify-start items-center">
              {community.Community_member?.length}
              <p className="max-sm:hidden">membres</p>
              <LuUsers className="hidden max-sm:block" />
            </span>
            <span className="flex gap-1 justify-start items-center">
              {community.Tournament?.length}
              <p className="max-sm:hidden">Tournois</p>
              <TbTournament className="hidden max-sm:block" />
            </span>
            <a
              href={`https://www.google.com/maps/place/${community.location ?? "/"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 justify-start items-center hover:underline"
            >
              <p className="max-sm:hidden">{community.location}</p>
              <p className="max-sm:hidden hover:underine">: Localisation</p>
              <GrMapLocation className="hover:cursor-pointer hover:text-[#0F70AC] hidden max-sm:block" />
            </a>
          </span>
          <NavBarCommunity setView={(view) => setView(view)} />
          {loading && <p className="italic text-sm">chargement...</p>}
          {community.privacy && !isMember ? (
            <OnPrivate />
          ) : (
            <>
              {view === 0 && <Constructing />}
              {view === 1 && <TourViewList tournaments={tournaments} className="mt-17"/>}
              {view === 2 && <UserViewList members={members} />}
              {view === 3 && (
                <p className="absolute w-full mt-17 p-3 flex flex-col justify-start items-center max-sm:text-[12px]">
                  {community.details}
                </p>
              )}
              {view === 4 && <Constructing />}
            </>
          )}
        </div>
      </main>
      {onError && (
        <OnError
          title="Erreur"
          message="Une erreur est survenue durant la récupération de données."
          onConfirmed={(res) => setOnError(res)}
        />
      )}
    </div>
  );
}
