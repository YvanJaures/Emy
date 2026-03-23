"use client";
import { useState } from "react";
import { GrMapLocation, GrShare } from "react-icons/gr";
import { TournamentDTO, PrizeDTO } from "@/hooks/Type_DTO";
import ImageDefault from "../atoms/ImageDefault";
import { useMemo } from "react";
import { CiGlobe, CiBadgeDollar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdOutlineLock } from "react-icons/md";
import Button from "../atoms/Button";
import TournamentTeamsBlock from "./TournamentTeamsBlock";
import TablePrize from "../molecules/TablePrize";
import FormulaireInscription from "./FormulaireInscription";
import FormulaireCreationEquipe from "./FormulaireCreationEquipe";
import Confirmation from "./Confirmation";
import { useConnexion } from "@/hooks/useAuth";

type Props = {
  tournament: TournamentDTO;
};
export default function TournamentBlockSlug({ tournament }: Props) {
  const [selectedPrizes, setSelectedPrizes] = useState<PrizeDTO[] | null>(null);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [onConfirmation,SetOnConfirmation]=useState(false)
  const [registrationError, setRegistrationError] = useState("");
  const [creationError, setCreationError] = useState("");
  const [openCreation, setOpenCreation] = useState(false);
  const {member}=useConnexion()
  /**
   * compare les date du tournois à la date actuelle pour determiner si
   * elle auras, a ou a eu lieu
   */
  const etat: number = useMemo(() => {
    let etat: number = -2;
    {
      console.log("debut");
      const start = new Date(
        tournament?.start_date ? tournament?.start_date : "00/00/0000",
      );
      const end = new Date(
        tournament?.end_date ? tournament?.end_date : "00/00/0000",
      );
      // si il y'a une erreur de date
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.warn("Date invalide pour le tournoi :", tournament);
        etat = -2; // code spécial pour erreur
      }
      // note date actuelle
      const date = new Date();
      // si actuel est avant la date de debut du tournoi
      if (start.getTime() > date.getTime()) {
        etat = -1;
      }
      // si actuel est après la date de debut et avant la fin du tournoi
      else if (
        start.getTime() < date.getTime() &&
        date.getTime() < end.getTime()
      ) {
        etat = 0;
      }
      // si actuel est après la date de fin du tournoi
      else if (date.getTime() > end.getTime()) {
        etat = 1;
      }
    }
    console.log(etat);
    return etat;
  }, [tournament]);

  const handleRegistrationClick = () => {
    if(!member){
      SetOnConfirmation(true)
      return
    }
    SetOnConfirmation(false)
    if (etat === -1 || etat === 0) {
      setRegistrationError("");
      setOpenRegistration(true);
    } else {
      setRegistrationError("Tournoi terminé");
      setOpenRegistration(false);
    }
  };
  const handleCreationClick = () => {
      if(!member){
      SetOnConfirmation(true)
      return
    }
    SetOnConfirmation(false)
    if (etat === -1 || etat === 0) {
      setCreationError("");
      setOpenCreation(true);
    } else {
      setCreationError("Tournoi terminé");
      setOpenCreation(false);
    }
  };
  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };
  const handleCloseCreation = () => {
    setOpenCreation(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <span className="flex flex-5 justify-between items-center p-2">
          <p>{tournament ? tournament?.name : "Tournoi"}</p>
          <GrShare />
        </span>
        <span className="flex-10">
          <ImageDefault
            title={tournament ? tournament?.name : "avatar du tournoi"}
            avatar={
              tournament
                ? tournament?.avatar
                : "/assets/arrieres_plan/AlpineLake.png"
            }
            className="object-cover h-50 w-full flex justify-center items-center"
          />
        </span>
        <section className="flex-20 p-2 gap-2 flex border-b ml-2 mr-2">
          <section className="flex-80 flex flex-col text-gray-400 gap-2">
            <p>{tournament?.Community.details}</p>
            <span className="flex">
              <p className="">
                groupes : {tournament?.members ? tournament?.members : "0"}{" "}
                <br />
                début:{" "}
                {new Date(
                  tournament ? tournament?.start_date : "0/00/0000",
                ).toLocaleDateString()}{" "}
                <br />
                fin:{" "}
                {new Date(
                  tournament ? tournament?.end_date : "0/00/0000",
                ).toLocaleDateString()}{" "}
                <br />
                status:
                {etat === -2 && (
                  <sub className="w-2  h-2 rounded-full bg-green-600"></sub>
                )}
                {etat === -2 && " erreur"}
                {etat === -1 && (
                  <sub className="w-2  h-2 rounded-full bg-green-600"></sub>
                )}
                {etat === -1 && " commence bientôt"}
                {etat === 0 && (
                  <sub className="w-2  h-2 rounded-full bg-orange-300"></sub>
                )}
                {etat === 0 && " en cours"}
                {etat === 1 && (
                  <sub className="w-2  h-2 rounded-full bg-red-600"></sub>
                )}
                {etat === 1 && " terminé"}
              </p>
              <span className="boder flex-50 flex justify-center items-end">
                <Button
                  title="S'inscrire"
                  className="bg-[#0F70AC] bg-#0F70AC flex justify-center border-none"
                  onClick={handleRegistrationClick}
                />
                {registrationError && (
                  <p className="mt-2 text-sm text-red-600 font-medium">
                    {registrationError}
                  </p>
                )}
              </span>
            </span>
          </section>
          <span className="flex-20 h-full text-lg">
            <p className="flex justify-start items-center gap-2">
              <LuUsers className="" /> {tournament?.Player?.length ?? 0}
            </p>
            <a
              href={`https://www.google.com/maps/place/${tournament?.location ?? "/"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 justify-start items-center hover:underline"
            >
              <GrMapLocation className="hover:cursor-pointer hover:text-[#0F70AC]" />
              <p className="max-sm:hidden overflow-hidden">
                {tournament?.location}
              </p>
            </a>
            <p className="flex justify-start items-center gap-2">
              <MdOutlineLock className="" /> Ouvert
            </p>
            <p className="flex justify-start items-center gap-2">
              <CiGlobe className="" /> EN, FR
            </p>
            <p className="flex justify-start items-center gap-2">
              <CiBadgeDollar className="" /> {tournament?.fees ?? 0}
            </p>
          </span>
        </section>
        <section className="p-3 ">
          <p>EQUIPES</p>
          <TournamentTeamsBlock t={tournament} admin={false} onCreate={(res)=>{ if(res) handleCreationClick()}}/>
        </section>
        <section>
          <TablePrize
            prizes={tournament?.Prize ?? []}
            onSelect={(prizes) => setSelectedPrizes(prizes)}
          />
        </section>
      </div>
      <FormulaireCreationEquipe
        isOpen={openCreation}
        onClose={handleCloseCreation}
        id_tour={tournament.id_tour}
      />
      <FormulaireInscription
        isOpen={openRegistration}
        onClose={handleCloseRegistration}
        id_tour={tournament.id_tour}
      />
      {onConfirmation &&(
        <Confirmation
          title="Redirection"
          message="Vous allez être rediriger vers la page de connexion. Continuer?"
          onConfirmed={(res)=>{SetOnConfirmation(false);if(res) location.href='/login'}}
          showConfirm={onConfirmation}/>
      )}
    </>
  );
}
