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
        <div className="w-105 shadow-md mb-5 bg-white rounded-lg flex flex-wrap items-center justify-start gap-2 p-2 dark:text-white dark:bg-gray-800 dark:text-gray-200">
            <ImageDefault
                avatar={sponsor.Member.avatar}
                title="Avatar du commanditaire"
                className="w-[4rem] h-[4rem] rounded-full flex-10"/>
            <div className="flex flex-col gap-0.5 max-sm:hidden dark:text-gray-200 flex-10">
                <h2 className="text-[10px]">NOM:</h2>
                <h2 className="text-[10px]">TITRE:</h2>
                <h2 className="text-[10px]">COURIEL:</h2>
                <h2 className="text-[10px]">TÉLÉPHONE:</h2>
            </div>
            <div className="flex flex-col gap-0.5 dark:text-gray-200 flex-30 overflow-hidden">
                <h2 className="text-[12px] underline text-nowrap text-ellipsis overflow-hidden">{sponsor.company_name?.toUpperCase()}</h2>
                <h2 className="text-[12px] text-nowrap text-ellipsis overflow-hidden">{sponsor.title}</h2>
                <h2 className="text-[12px] text-nowrap text-ellipsis overflow-hidden">{sponsor.Member.email}</h2>
                <h2 className="text-[12px] text-nowrap text-ellipsis overflow-hidden">{sponsor.Member.phone}</h2>
            </div>
            <div className="flex flex-col h-full gap-0.5 justify-end items-end dark:text-gray-200 flex-10">
                <span className="flex items-center text-[12px] text-sm dark:text-gray-200">
                    <p>50</p>
                    <FaPercentage />
                </span>
                <span className="flex items-center text-[12px] text-sm">
                    <p>200</p>
                    <FaAward />
                </span>
                <span className="flex items-center text-[12px] text-sm">
                    <p>Voir plus</p>
                    <FiPlusCircle />
                </span>
            </div>
        </div>
    )
}