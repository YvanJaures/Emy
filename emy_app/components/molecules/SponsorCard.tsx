"use client"

import { SponsorDTO } from "@/hooks/Type_DTO";
import ImageDefault from "../atoms/ImageDefault";
import { FaPercentage } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

/**
 * Interface des propriétés du composant SponsorCard
 */
type Props={
    /** Informations du sponsor à afficher */
    sponsor:SponsorDTO;
}

/**
 * Composant SponsorCard - Carte d'affichage d'un sponsor
 *
 * Ce composant affiche les informations d'un sponsor dans une carte
 * incluant l'avatar, le nom de l'entreprise, le titre, l'email, le téléphone,
 * et des statistiques (pourcentage et nombre de récompenses).
 *
 * @param props - Les propriétés du composant
 * @param props.sponsor - Objet contenant les informations du sponsor
 * @returns Le composant SponsorCard rendu
 */
export default function SponsorCard({sponsor}:Props){
    return(
        <div className="w-full shadow-md mb-5 bg-white rounded-lg flex flex-wrap items-center justify-start gap-2 p-2 dark:text-white dark:bg-gray-800 dark:text-gray-200">
            <ImageDefault
                avatar={sponsor.Member.avatar}
                title="Avatar du commanditaire"
                className="w-[6rem] h-[6rem] rounded-full"/>
            <div className="flex flex-col gap-0.5 max-sm:hidden dark:text-gray-200">
                <h2 className="text-sm">NOM:</h2>
                <h2 className="text-sm">TITRE:</h2>
                <h2 className="text-sm">COURIEL:</h2>
                <h2 className="text-sm">TÉLÉPHONE:</h2>
            </div>
            <div className="flex flex-col gap-0.5 dark:text-gray-200">
                <h2 className="text-sm underline">{sponsor.company_name?.toUpperCase()}</h2>
                <h2 className="text-sm">{sponsor.title}</h2>
                <h2 className="text-sm">{sponsor.Member.email}</h2>
                <h2 className="text-sm">{sponsor.Member.phone}</h2>
            </div>
            <div className="flex flex-col h-full gap-0.5 justify-start items-end ml-auto dark:text-gray-200">
                <span className="flex items-center text-sm dark:text-gray-200">
                    <p>50</p>
                    <FaPercentage />
                </span>
                <span className="flex items-center text-sm">
                    <p>200</p>
                    <FaAward />
                </span>
                <span className="flex items-center text-sm">
                    <p>Voir plus</p>
                    <FiPlusCircle />
                </span>
            </div>
        </div>
    )
}