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
import Alert from "./Alert";
type Props = {
  community: CommunityDTO;
  member: MemberDTO | null;
  isMine: boolean;
  filter?: string;
};

/**
 * block représentant une communauté
 */
export default function CommunityRow({ community, member, isMine,filter }: Props) {
  // le membre est-il membre de cette communauté?
  const [isVisible, setIsVisible] = useState(true);
  // le membre est-il membre de cette communauté? pour le tri
  const [isMember, setIsMember] = useState(false);
  const [_isMine, setIsMine] = useState(false);
  // y'a t il eu une erreur lors de l'ajout à la communauté?
  const [onError, setOnError] = useState(false);

  const [validation,setValidation]=useState("")
  // Si il y'a une fênetre pop up
  const [onPopUp, setOnPopUp] = useState(false);
  // afficher la communauté
  const [showCom,setShowCom]=useState(false);

  const date=(new Date(community.created))?.toLocaleDateString()
  const filteredCommunity=()=>{
    if(filter==="Publique" && !community.privacy || filter==="Tous") return false
    if(filter==="Privée" && community.privacy || filter==="Tous") return false
    if(filter==="Tous") return false
    return true
  }
  useEffect(() => {
    (() => {
      try {
        if (member) {
          member.Community_member?.forEach((element) => {
            if (element.id_community === community.id_community) {
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
      if (!member) return location.href = "/login?redirect="+location.pathname;

      const payload = {
        id_community: community.id_community,
        user_name: member?.user_name,
      };
      //ajout le membre grâce au fetch de l'api d'ajout
      const ajout=await addCommunityMember(payload);

      if(!ajout) return setOnError(true)

      if(ajout) setValidation('vous avez été ajouté à la communauté!')
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
        flex flex-wrap justify-between items-center 
        shadow-xl dark:shadow-black/30 overflow-hidden
        bg-white dark:bg-gray-800 w-full max-sm:w-38 min-sm:w-2/5 max-lg:w-92
        text-gray-900 dark:text-gray-100 max-sm:h-1/2 transition-all ease-in-out
        rounded-xl max-sm:flex-col hover:cursor-pointer transition-all
        ${filteredCommunity() ? 'hidden':''}
        `}
      id={'community-'+community.id_community.toString()}
      onClick={() => setIsVisible(!isVisible)}
    >
      <span className="flex-60 max-sm:flex-40 overflow-hidden rounded-xl w-full">
        <ImageDefault
          avatar={community.avatar ?? ""}
          title="image de couverture de la communauté"
          className="w-full h-40 object-cover"
          onClick={()=>handleShow()}
        />
      </span>

      <div
        className={`flex flex-60 flex-col max-sm:flex-60 flex-nowrap p-2 gap-1 justify-center items-center h-full
           overflow-hidden ${isVisible ? " max-sm:hidden" : "max-sm:flex"} transition-shadow
           w-full`}
      >
        <Title
          as="h2"
          children={community.name?.toUpperCase()}
          className="w-full flex-15 text-[12px] max-sm:text-[10px] text-nowrap text-ellipsis text-center overflow-hidden"
        />

        <p className="flex-40 text-[10px] line-clamp-3 max-sm:line-clamp-1 text-center w-full text-gray-700 dark:text-gray-300 text-wrap text-ellipsis overflow-hidden">
          {community.details}
        </p>

        {community.privacy ? (
          <Button
            disabled={community.privacy}
            title={"Privée"}
            color="[#0F70AC]"
            className="disabled:cursor-not-allowed h-6 w-20 text-[12px] bg-[#0F70AC]  text-white border-none flex-10"
          />
        ) : (
          <Button
            title={isMember ? "AFFICHER" : "REJOINDRE"}
            color="[#0F70AC]"
            className="h-6 w-20 bg-[#0F70AC] text-[12px] text-white disabled:cursor-not-allowed border-none flex-10"
            onClick={() => {
              if(!isMember) handleJoin();
              if(isMember) handleShow();
            }}
          />
        )}

        <footer className="flex flex-30 flex-row justify-between items-center w-full flex-20 text-gray-700 dark:text-gray-300">
          <span className="flex-70 flex flex-col justify-start items-center max-sm:line-clamp-1">
            <span className="text-start flex gap-1 text-[10px] justify-start">
              <GrMapLocation className="justify-center items-center hidden max-sm:flex" />
              <p className="max-sm:hidden max-lg:hidden">Adresse:</p>
              {community.location}
            </span>

            <p className="text-start w-full flex text-[10px] max-sm:line-clamp-1">
              Créé le {date} par {community.Admin[0]?.user_name}
            </p>
          </span>

          <span className="flex-30 flex flex-col justify-end items-center text-[10px]">
            <span className="text-end flex gap-1 justify-end">
              <LuUsers className="justify-center items-center hidden max-sm:flex" />
              {community.Community_member?.length}
              <p className="max-sm:hidden">Membres</p>
            </span>

            <span className="text-end flex gap-1 justify-end">
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
        className={`hidden w-full p-2 flex-15 text-[12px] max-sm:text-[10px] text-nowrap text-ellipsis text-center overflow-hidden ${
          isVisible ? " max-sm:block" : "hidden"
        }`}
      />

      <IoIosArrowDown
        className={`hover:cursor-pointer flex-5 hidden max-sm:flex text-gray-700 dark:text-gray-300 ${
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
      {validation!=="" && <Alert message={validation} error={onError} onMes={()=>setValidation('')}/>}
    </>
  );
}