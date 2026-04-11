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
import ProfileTourViewList from "@/components/molecules/ProfileTourViewList";

export default function Profil() {
    const { member, loading } = useAuth();
    const [activeView, setActiveView] = useState("profil");
    const [modify, setModify] = useState(false);
    const [teams, setTeams] = useState<any[]>([]);
    const [tournaments, setTournaments] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        birth_date: "",
    });

    const [errors, setErrors] = useState({
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

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const res = await fetch(`/api/member/my-tournaments`, {
                    credentials: "include",
                });

                if (!res.ok) return;

                const data = await res.json();
                setTournaments(data.tournaments ?? []);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTournaments();
    }, []);

    const validateForm = () => {
        const newErrors: any = {};
        const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Le nom est requis";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Seulement des lettres";
        }

        if (!formData.surname.trim()) {
            newErrors.surname = "Le prénom est requis";
        } else if (!nameRegex.test(formData.surname)) {
            newErrors.surname = "Seulement des lettres";
        }

        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Email invalide";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Le téléphone est requis";
        } else if (!/^[0-9\s-]+$/.test(formData.phone)) {
            newErrors.phone = "Seulement chiffres, espaces et tirets";
        } else {
            const digits = formData.phone.replace(/[\s-]/g, "");

            if (digits.length !== 10) {
                newErrors.phone = "Doit contenir 10 chiffres";
            } else if (!/^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(formData.phone)) {
                newErrors.phone = "Format invalide (ex: 514-555-1234)";
            }
        }

        if (!formData.birth_date) {
            newErrors.birth_date = "Date requise";
        } else {
            const birth = new Date(formData.birth_date);
            if (birth > new Date()) {
                newErrors.birth_date = "Date invalide";
            }
        }

        return newErrors;
    };

    const handleSave = async () => {
        const validationErrors = validateForm();
        setErrors({
            name: validationErrors.name || "",
            surname: validationErrors.surname || "",
            email: validationErrors.email || "",
            phone: validationErrors.phone || "",
            address: validationErrors.address || "",
            birth_date: validationErrors.birth_date || "",
        });

        if (Object.keys(validationErrors).length > 0) return;

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
                    <main className="flex flex-col md:flex-row flex-grow">
                        <Sidebar setActiveView={setActiveView} activeView={activeView} />
                        <div className="flex-1 p-8">
                            {activeView === "profil" && (
                                <>
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-lg underline">PROFIL</h1>

                                    <Link
                                        href="/"
                                        className="text-sm px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                                    >
                                        X
                                    </Link>
                                </div>

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
                                        <div className="relative flex flex-row flex-wrap w-full h-fit justify-start items-start gap-5 rounded-xl p-6 shadow-xl mt-10 bg-white dark:bg-gray-800 dark:shadow-black/30">
                                            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-10 w-full">
                                                <span>Nom utilisateur:</span>
                                                <span className="break-words">{member?.user_name ?? "-"}</span>
                                                <span>Nom:</span>
                                                <span className="break-words">{member?.name ?? "-"}</span>
                                                <span>Prénom:</span>
                                                <span className="break-words">{member?.surname ?? "-"}</span>
                                                <span>Email:</span>
                                                <span className="break-words">{member?.email ?? "-"}</span>
                                                <span>Téléphone:</span>
                                                <span className="break-words">{member?.phone ?? "-"}</span>
                                                <span>Adresse:</span>
                                                <span className="break-words">{member?.address ?? "-"}</span>
                                                <span>Date de naissance:</span>
                                                <span className="break-words">
                                                    {member?.birth_date
                                                        ? new Date(member.birth_date).toLocaleDateString()
                                                        : "-"}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {modify && (
                                        <div className="bg-white p-6 rounded-xl shadow-xl dark:bg-gray-800">
                                            <h2 className="mb-4 font-semibold">Modifier le profil</h2>

                                            <input
                                                value={formData.name}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, name: e.target.value });
                                                    setErrors({ ...errors, name: "" });
                                                }}
                                                className={`border p-2 mb-1 w-full rounded ${errors.name ? "border-red-500" : ""}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

                                            <input
                                                value={formData.surname}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, surname: e.target.value });
                                                    setErrors({ ...errors, surname: "" });
                                                }}
                                                className={`border p-2 mb-1 w-full rounded ${errors.surname ? "border-red-500" : ""}`}
                                            />
                                            {errors.surname && <p className="text-red-500 text-sm mb-2">{errors.surname}</p>}

                                            <input
                                                value={formData.email}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, email: e.target.value });
                                                    setErrors({ ...errors, email: "" });
                                                }}
                                                className={`border p-2 mb-1 w-full rounded ${errors.email ? "border-red-500" : ""}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

                                            <input
                                                value={formData.phone}
                                                onChange={(e) => {
                                                    let value = e.target.value;

                                                    value = value.replace(/[^0-9\s-]/g, "");
                                                    value = value.replace(/--+/g, "-");
                                                    value = value.replace(/\s{2,}/g, " ");
                                                    value = value.replace(/^[\s-]+/, "");

                                                    setFormData({ ...formData, phone: value });
                                                    setErrors({ ...errors, phone: "" });
                                                }}
                                                maxLength={15}
                                                inputMode="numeric"
                                                className={`border p-2 mb-1 w-full rounded ${
                                                    errors.phone ? "border-red-500" : ""
                                                }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
                                            )}

                                            <input
                                                value={formData.address}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, address: e.target.value })
                                                }
                                                className="border p-2 mb-2 w-full rounded"
                                            />

                                            <input
                                                type="date"
                                                value={formData.birth_date}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, birth_date: e.target.value });
                                                    setErrors({ ...errors, birth_date: "" });
                                                }}
                                                className={`border p-2 mb-1 w-full rounded ${errors.birth_date ? "border-red-500" : ""}`}
                                            />
                                            {errors.birth_date && <p className="text-red-500 text-sm mb-2">{errors.birth_date}</p>}

                                            <div className="mt-4 flex gap-4 justify-end">
                                                <button
                                                    onClick={() => setModify(false)}
                                                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-700 dark:hover:bg-gray-800 hover:cursor-pointer"
                                                >
                                                    Annuler
                                                </button>

                                                <button
                                                    onClick={handleSave}
                                                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition hover:cursor-pointer"
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

                                    {tournaments.length === 0 ? (
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center">
                                            <p className="text-gray-500">
                                                Vous n'êtes inscrit à aucun tournoi.
                                            </p>
                                        </div>
                                    ) : (
                                        <ProfileTourViewList tournaments={tournaments} />
                                    )}
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