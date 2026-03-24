"use client";
import { CommunityDTO, MemberDTO } from "@/hooks/Type_DTO";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import ImageDefault from "../atoms/ImageDefault";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { addCommunityMember } from "@/fetchs/global";
import OnError from "../organisms/OnError";
import { LuUsers } from "react-icons/lu";
import { TbTournament } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import CommunityBlock from "../organisms/CommunityBlock";
type Props = {
  community: CommunityDTO;
  member: MemberDTO | null;
  isMine: boolean;
};

/**
 * block représentant une communauté
 */
export default function CommunityRow({ community, member, isMine }: Props) {
  // le membre est-il membre de cette communauté?
  const [isVisible, setIsVisible] = useState(true);
  // le membre est-il membre de cette communauté? pour le tri
  const [isMember, setIsMember] = useState(false);
  const [_isMine, setIsMine] = useState(false);
  // y'a t il eu une erreur lors de l'ajout à la communauté?
  const [onError, setOnError] = useState(false);
  // Si il y'a une fênetre pop up
  const [onPopUp, setOnPopUp] = useState(false);
  // afficher la communauté
  const [showCom,setShowCom]=useState(false);

  const date=(new Date(community.created))?.toLocaleDateString()
  useEffect(() => {
    (() => {
      try {
        if (member) {
          member.Community_member?.forEach((element) => {
            if (element.id_community === community.id_community) {
              console.log('hey');
              setIsMember(true);
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [member, community]);

  useEffect(() => {
    console.log("hey2");
    if (!isMine && !isMember) {
      setIsMine(true);
      return;
    }
    if (isMember && !isMine) {
      setIsMine(false);
      return;
    }
    if (!isMember && isMine) {
      setIsMine(false);
      return;
    }
    if (isMine && isMember) {
      setIsMine(true);
      return;
    }
  }, [isMine, isMember]);

  /**
   * ajoute le membre à la communauté après vérification
   * de son appartenance ou non
   */
  const handleJoin = async () => {
    try {
      if (!member) location.href = "/login";

      const payload = {
        id_community: community.id_community,
        user_name: member?.user_name,
      };
      //ajout le membre grâce au fetch de l'api d'ajout
      await addCommunityMember(payload);
      //définit le membre comme appartenant à la communauté
      setIsMember(true);
    } catch (error) {
      // affiche un message d'erreur
      setOnError(true);
      // floutte l'arrière plan de la pop up
      setOnPopUp(true);
    }
  };
  /**
   * Affiche la communauté
   */
  const handleShow=()=>{
    setShowCom(!showCom)
  }
  return (
    <>
    <li
      className={`${onPopUp ? "pointer-events-none blur-md" : ""} ${_isMine? '':'hidden'} 
        flex flex-wrap justify-center items-center 
        shadow-xl dark:shadow-black/30
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        rounded-xl max-sm:flex-col hover:cursor-pointer transition-all`}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className="flex-50 overflow-hidden rounded-xl w-full">
        <ImageDefault
          avatar={community.avatar ?? ""}
          title="image de couverture de la communauté"
          className="w-full h-50 object-cover"
          onClick={()=>handleShow()}
        />
      </span>

      <div
        className={`flex flex-50 flex-col flex-nowrap p-2 justify-center items-center h-full
           overflow-hidden ${isVisible ? " max-sm:hidden" : "max-sm:flex"} transition-shadow
           w-full`}
      >
        <Title
          as="h2"
          children={community.name?.toUpperCase()}
          className="flex-10"
        />

        <p className="flex-50 text-center w-full text-gray-700 dark:text-gray-300">
          {community.details}
        </p>

        {community.privacy ? (
          <Button
            disabled={community.privacy}
            title={"Privée"}
            color="[#0F70AC]"
            className="disabled:cursor-not-allowed bg-[#0F70AC] text-white border-none flex-20"
          />
        ) : (
          <Button
            title={isMember ? "AFFICHER" : "REJOINDRE"}
            color="[#0F70AC]"
            className="bg-[#0F70AC] text-white disabled:cursor-not-allowed border-none flex-20"
            onClick={() => {
                              if(!isMember) handleJoin();
                              if(isMember) handleShow();
                            }}
          />
        )}

        <footer className="flex flex-row justify-between items-center w-full flex-20 text-gray-700 dark:text-gray-300">
          <span className="flex-50 flex flex-col justify-start items-center">
            <span className="text-start w-full flex gap-1">
              <GrMapLocation className="justify-center items-center hidden max-sm:flex" />
              <p className="max-sm:hidden">Adresse:</p>
              {community.location}
            </span>

            <p className="text-start w-full flex">
              Créé le {date} par {community.Admin[0]?.user_name}
            </p>
          </span>

          <span className="flex-50 flex flex-col justify-end items-center">
            <span className="text-end w-full flex gap-1 justify-end">
              <LuUsers className="justify-center items-center hidden max-sm:flex" />
              {community.Community_member?.length}
              <p className="max-sm:hidden">Membres</p>
            </span>

            <span className="text-end w-full flex gap-1 justify-end">
              <TbTournament className="justify-center items-center hidden max-sm:flex" />
              {community.Tournament ? community.Tournament.length : "0"}{" "}
              <p className="max-sm:hidden">Tournois</p>
            </span>
          </span>
        </footer>
      </div>

      <Title
        as="h2"
        children={community.name?.toUpperCase()}
        className={`flex-10 hidden p-2 ${
          isVisible ? " max-sm:flex" : "max-sm:hidden"
        }`}
      />

      <IoIosArrowDown
        className={`hover:cursor-pointer hidden max-sm:flex text-gray-700 dark:text-gray-300 ${
          isVisible ? "" : "rotate-180"
        }`}
      />

      {onError && (
        <OnError
          title="REJOINDRE"
          message="Une erreur est survenue! Impossible de rejoindre cette communauté. Veuillez réessayer plus tard."
          onConfirmed={(res) => {
            setOnError(res);
            setOnPopUp(res);
          }}
        />
      )}
    </li>
      {
        showCom &&(
          <CommunityBlock 
            community={community}
            _isMember={isMember}
            onShown={(res)=>setShowCom(res)}/>
        )
      }
    </>
  );
}