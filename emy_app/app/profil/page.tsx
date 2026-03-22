"use client";

import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";
import Sidebar from "@/components/organisms/SideBar";
import MetaData from "@/components/organisms/MetaData";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import TeamCardProfil from "@/components/molecules/TeamCardProfil";
import Constructing from "@/components/organisms/Constructing";

export default function Profil() {
    const { member, loading } = useAuth();
    const [activeView, setActiveView] = useState("profil");
    const [modify, setModify] = useState(false);
    const [teams, setTeams] = useState<any[]>([]);

    console.log("MEMBER:", member);
    console.log("TEAM_MEMBER:", member?.Team_member);

    useEffect(() => {
        const fetchTeams = async () => {
            if (!member?.Team_member) return;

            const results = await Promise.all(
                member.Team_member.map(async (tm: any) => {
                    if (!tm.id_team) return null;

                    const res = await fetch(
                        `/api/member/team/details?id_team=${tm.id_team}`,
                        { credentials: "include" }
                    );

                    if (res.ok) {
                        return await res.json();
                    }

                    return null;
                })
            );

            setTeams(results.filter(Boolean));
        };

        fetchTeams();
    }, [member]);

    return (
        <>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-gray-100">

                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute right-6 top-4 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:cursor-pointer text-[40px] leading-none"
                        onClick={() => history.back()}
                    >
                        ×
                    </button>

                    <MetaData
                        seoTitle="Profil utilisateur"
                        seoDescription="informations de profil utilisateur"
                    />

                    <main className="flex flex-grow">

                        <Sidebar
                            setActiveView={setActiveView}
                            activeView={activeView}
                        />

                        <div className="flex-1 p-8">

                            {activeView === "profil" && (
                                <>
                                    <h1 className="text-lg underline underline-offset-4 mb-6">
                                        PROFIL
                                    </h1>

                                    <ProfileCard
                                        name={member?.name ?? ""}
                                        user_name={member?.user_name ?? ""}
                                        imgUrl={member?.avatar ?? "null"}
                                        email={member?.email ?? ""}
                                        admin={false}
                                        onModify={(mod) => (setModify(mod))}
                                        edit="pointer-events-all"
                                    />

                                    <div className="flex flex-row flex-wrap w-full h-fit justify-start items-start gap-5 rounded-xl p-6 shadow-xl mt-10 bg-white dark:bg-gray-800 dark:shadow-black/30">

                                        <div className="grid grid-cols-[200px_1fr] gap-y-4 gap-x-10 w-full max-w-2xl">

                                            <span className="text-gray-700 dark:text-gray-300">Nom utilisateur:</span>
                                            <span>{member?.user_name ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Nom:</span>
                                            <span>{member?.name ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Prénom:</span>
                                            <span>{member?.surname ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Email:</span>
                                            <span>{member?.email ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Téléphone:</span>
                                            <span>{member?.phone ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Adresse:</span>
                                            <span>{member?.address ?? "-"}</span>

                                            <span className="text-gray-700 dark:text-gray-300">Date de naissance:</span>
                                            <span>
                                                {member?.birth_date
                                                    ? new Date(member.birth_date).toLocaleDateString()
                                                    : "-"}
                                            </span>

                                        </div>
                                    </div>
                                </>
                            )}

                            {activeView === "equipes" && (
                                <>
                                    <h1 className="text-lg underline underline-offset-4 mb-6">
                                    MES ÉQUIPES
                                    </h1>

                                    {teams.length === 0 ? (
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center">
                                        <p className="text-gray-500">
                                        Vous n'avez rejoint aucune équipe
                                        </p>

                                        <button className="mt-4 text-blue-500 hover:underline">
                                        Rejoindre une équipe
                                        </button>
                                    </div>
                                    ) : (
                                    <div className="flex flex-col gap-6">
                                        {teams.map((team: any) => (
                                        <TeamCardProfil key={team.id_team} team={team} />
                                        ))}
                                    </div>
                                    )}
                                </>
                                )}
                                {activeView === "activites" && (
                                    <>
                                        <h1 className="text-lg underline underline-offset-4 mb-6">
                                        ACTIVITÉS
                                        </h1>

                                        <div className="w-full h-[400px]">
                                        <Constructing />
                                        </div>
                                    </>
                                    )}
                        </div>
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
}