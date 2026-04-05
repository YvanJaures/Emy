"use client"
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";
import MetaData from "@/components/organisms/MetaData";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useEffect, useState } from "react";
import { getUser } from "@/fetchs/global";
import { MemberDTO } from "@/hooks/Type_DTO";
import { isNull } from "util";
import { useAuth } from "@/hooks/useAuth";

/**
 * Page affichant le profil de l’administrateur connecté.
 *
 * Cette fonction :
 * - utilise useAuth() pour récupérer l’utilisateur et vérifier son statut
 * - affiche une animation de chargement tant que les données ne sont pas prêtes
 * - affiche la barre de navigation admin si l’utilisateur appartient à une communauté
 * - rend la carte de profil (ProfileCard) avec les informations de l’utilisateur
 * - inclut les métadonnées SEO et le footer
 */

export default function ProfilAdmin(){
    const {member,loading}=useAuth();
    console.log(member)
    return(
        <>
            {
                loading ? (
                    <LoadingAnimation/>
                ) : (
                    <div className="bg-gray-100   dark:bg-black">
                        <MetaData seoTitle="Profil utilisateur" seoDescription="informations de profil utilisateur"></MetaData>
                        {member?.Admin?.id_community && (
                            <NavBarAdmin id_community={member.Admin.id_community} />
                        )}
                        <main className="mb-80 mt-5 flex flex-col justify-center items-center m-2">
                            <ProfileCard name={member?.name ?? ""} user_name={member?.user_name ?? ""} imgUrl={member?.avatar ?? "null"} email={member?.email ?? ""} admin={true} onModify={()=>('')} edit="pointer-events-all"/>
                        </main>
                        <Footer/>
                    </div>
                )
            }
        </>
    )
}