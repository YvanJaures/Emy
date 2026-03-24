"use client";
import { useEffect, useState } from "react";
import { GrMapLocation, GrShare } from "react-icons/gr";
import { TournamentDTO, PrizeDTO, TeamDTO } from "@/hooks/Type_DTO";
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
  // Les commandites sélectionnés
  const [selectedPrizes, setSelectedPrizes] = useState<PrizeDTO[] | null>(null);
  // Le tournoi actuel
  const [_tour, setTour] = useState<TournamentDTO>(tournament);
  // Affichage ou non du formulaire d'inscription
  const [openRegistration, setOpenRegistration] = useState(false);
  // Affichage ou non de la redirection vers la page de connxion
  const [onConfirmation, SetOnConfirmation] = useState(false);
  // Erreur lors de l'inscription
  const [registrationError, setRegistrationError] = useState("");
  // Erreur lors de la création d'équipe
  const [creationError, setCreationError] = useState("");
  // Ouverture ou non du formulaire de création d'équipe
  const [openCreation, setOpenCreation] = useState(false);
  // Membre connecté (si un)
  const { member } = useConnexion();

  /**
   * Ajoute l'équipe créé à la liste des équipes du tournoi
   * @param team équipe créée
   */
  const handleNewTeam = (team: TeamDTO) => {
    console.log("hey");
    console.log(team);
    const tour = _tour;
    if (team) {
      tour.Team?.push(team);
      setTour(tour);
    }
  };
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
  /**
   * Gére le clique sur le bouton s'inscrire en ajoutant le membre au tournoi
   * @returns
   */
  const handleRegistrationClick = () => {
    if (!member) {
      SetOnConfirmation(true);
      return;
    }
    SetOnConfirmation(false);
    if (etat === -1 || etat === 0) {
      setRegistrationError("");
      setOpenRegistration(true);
    } else {
      setRegistrationError("Tournoi terminé");
      setOpenRegistration(false);
    }
  };
  /**
   * Gére le clique sur le bouton de création d'équipe en affichant le formulaire et l'équipe par la suite.
   * @returns
   */
  const handleCreationClick = () => {
    if (!member) {
      SetOnConfirmation(true);
      return;
    }
    SetOnConfirmation(false);
    if (etat === -1 || etat === 0) {
      setCreationError("");
      setOpenCreation(true);
    } else {
      setCreationError("Tournoi terminé");
      setOpenCreation(false);
    }
  };
  /**
   * Ferme le formulaire d'inscription au tournoi
   */
  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };
  /**
   * Ferme le formulaire de création d'équipes
   */
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
            <div className="flex">
              <div className="">
                groupes : {tournament?.Team?.length} /{tournament?.members / 4}
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
                {etat === -2 && (
                  <div className="flex justify-start items-center gap-1">
                    status:
                    <p className="w-2  h-2 rounded-full bg-red-800 text-center"></p>
                    erreur
                  </div>
                )}
                {etat === -1 && (
                  <div className="flex justify-start items-center gap-1">
                    status:
                    <p className="w-2  h-2 rounded-full bg-green-600 text-center"></p>
                    commence bientôt
                  </div>
                )}
                {etat === 0 && (
                  <div className="flex justify-start items-center gap-1">
                    status:
                    <p className="w-2  h-2 rounded-full bg-orange-300 text-center"></p>
                    en cours
                  </div>
                )}
                {etat === 1 && (
                  <div className="flex justify-start items-center gap-1">
                    status:
                    <p className="w-2  h-2 rounded-full bg-red-600 text-center"></p>
                    terminé
                  </div>
                )}
              </div>
              <span className="boder flex-50 flex justify-center items-end">
                {etat === -1 && (
                  <Button
                    title="S'inscrire"
                    className="bg-[#0F70AC] bg-#0F70AC flex justify-center border-none"
                    onClick={handleRegistrationClick}
                  />
                )}
                {registrationError && (
                  <p className="mt-2 text-sm text-red-600 font-medium">
                    {registrationError}
                  </p>
                )}
              </span>
            </div>
          </section>
          <span className="flex-20 h-full text-lg">
            <p className="flex justify-start items-center gap-2">
              <LuUsers className="" /> {tournament?.Player?.length ?? 0}/
              {tournament?.members}
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
          <TournamentTeamsBlock
            t={_tour}
            admin={false}
            onCreate={(res) => {
              if (res) handleCreationClick();
            }}
          />
        </section>
        <section>
          <TablePrize
            prizes={tournament?.Prize ?? []}
            onSelect={(prizes) => setSelectedPrizes(prizes)}
          />
        </section>
      </div>
      {/** Formulaire de création d'équipe */}
      <FormulaireCreationEquipe
        isOpen={openCreation}
        onClose={handleCloseCreation}
        id_tour={tournament.id_tour}
        onCreate={(team) => handleNewTeam(team)}
      />
      {/**Formulaire d'inscription à un tournoi */}
      <FormulaireInscription
        isOpen={openRegistration}
        onClose={handleCloseRegistration}
        id_tour={tournament.id_tour}
      />
      {/** Confirmation de redirection vers la page de connexion */}
      {onConfirmation && (
        <Confirmation
          title="Redirection"
          message="Vous allez être rediriger vers la page de connexion. Continuer?"
          onConfirmed={(res) => {
            SetOnConfirmation(false);
            if (res) location.href = "/login";
          }}
          showConfirm={onConfirmation}
        />
      )}
    </>
  );
}
