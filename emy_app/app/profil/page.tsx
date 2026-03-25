"use client";

import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";
import Sidebar from "@/components/organisms/SideBar";
import MetaData from "@/components/organisms/MetaData";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import TeamCardProfil from "@/components/molecules/TeamCardProfil";
import Link from "next/link";

export default function Profil() {
    const { member, loading } = useAuth();
    const [activeView, setActiveView] = useState("profil");
    const [modify, setModify] = useState(false);
    const [teams, setTeams] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        birth_date: "",
    });

    useEffect(() => {
        if (member) {
            setFormData({
                name: member.name ?? "",
                surname: member.surname ?? "",
                email: member.email ?? "",
                phone: member.phone ?? "",
                address: member.address ?? "",
                birth_date: member.birth_date
                    ? new Date(member.birth_date).toISOString().split("T")[0]
                    : "",
            });
        }
    }, [member]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const res = await fetch(`/api/member/my-teams`, {
                    credentials: "include",
                });

                if (!res.ok) return;

                const data = await res.json();
                setTeams(data.teams ?? data ?? []);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTeams();
    }, []);

    const handleSave = async () => {
        try {
            const res = await fetch("/api/member/update", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    user_name: member?.user_name,
                    ...formData,
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Erreur:", text);
                return;
            }

            console.log("Profil mis à jour");

            setModify(false);
            window.location.reload();

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">

                    <main className="flex flex-grow">
                        <Sidebar setActiveView={setActiveView} activeView={activeView} />

                        <div className="flex-1 p-8">

                            {activeView === "profil" && (
                                <>
                                    <h1 className="text-lg underline mb-6">PROFIL</h1>

                                    {!modify && (
                                        <ProfileCard
                                            name={member?.name ?? ""}
                                            user_name={member?.user_name ?? ""}
                                            imgUrl={member?.avatar ?? "null"}
                                            email={member?.email ?? ""}
                                            admin={false}
                                            onModify={(mod) => setModify(mod)}
                                            edit="pointer-events-all"
                                        />
                                    )}

                                    
                                    {!modify && (
                                        <div className="relative flex flex-row flex-wrap w-full h-fit justify-start items-start gap-5
                                        rounded-xl p-6 shadow-xl mt-10 bg-white dark:bg-gray-800 dark:shadow-black/30">

                                            <button
                                            onClick={() => setModify(true)}
                                            className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                            >
                                            Modifier le profil
                                            </button>

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
                                        )}
                                        

                                    {modify && (
                                        <div className="bg-white p-6 rounded-xl shadow-xl">

                                            <h2 className="mb-4 font-semibold">Modifier le profil</h2>

                                            {/* NOM */}
                                            <input
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                placeholder="Nom"
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            {/* PRENOM */}
                                            <input
                                                value={formData.surname}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, surname: e.target.value })
                                                }
                                                placeholder="Prénom"
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            {/* EMAIL */}
                                            <input
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                placeholder="Email"
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            {/* PHONE */}
                                            <input
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                placeholder="Téléphone"
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            {/* ADDRESS */}
                                            <input
                                                value={formData.address}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, address: e.target.value })
                                                }
                                                placeholder="Adresse"
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            {/* DATE */}
                                            <input
                                                type="date"
                                                value={formData.birth_date}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, birth_date: e.target.value })
                                                }
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            <div className="mt-4 flex gap-4 justify-end">

                                                <button
                                                    onClick={() => setModify(false)}
                                                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                                >
                                                    Annuler
                                                </button>

                                                <button
                                                    onClick={handleSave}
                                                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                                >
                                                    Sauvegarder
                                                </button>

                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {activeView === "equipes" && (
                                <div className="flex flex-col gap-6">
                                    {teams.map((team: any) => (
                                        <TeamCardProfil key={team.id_team} team={team} />
                                    ))}
                                </div>
                            )}

                            {activeView === "activites" && (
                            <>
                                <h1 className="text-lg underline underline-offset-4 mb-6">
                                ACTIVITÉS
                                </h1>
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