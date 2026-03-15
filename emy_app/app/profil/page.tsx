"use client"
import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";
import Sidebar from "@/components/organisms/SideBar";
import MetaData from "@/components/organisms/MetaData";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { useAuth } from "@/hooks/useAuth";

export default function Profil(){
    const { member, loading } = useAuth();
    console.log(member)

    return(
               <>
            {
                loading ? (
                    <LoadingAnimation/>
                ) : (
                    <div className="bg-gray-100 min-h-screen flex flex-col">

                        <MetaData 
                            seoTitle="Profil utilisateur"
                            seoDescription="informations de profil utilisateur"
                        />

                        <main className="flex flex-grow">

                            <Sidebar/>

                            <div className="flex-1 p-8">

                                <h1 className="text-lg font-semibold underline underline-offset-4 mb-6">
                                    PROFIL
                                </h1>

                                <ProfileCard
                                    name={member?.name ?? ""}
                                    user_name={member?.user_name ?? ""}
                                    imgUrl={member?.avatar ?? "null"}
                                    email={member?.email ?? ""}
                                    edit="pointer-events-all"
                                />

                                <div className="border rounded-lg p-4 mt-6 space-y-4">

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Nom:</span>
                                        <span>{member?.name ?? "-"}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Prénom:</span>
                                        <span>{member?.surname ?? "-"}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Email:</span>
                                        <span>{member?.email ?? "-"}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Téléphone:</span>
                                        <span>{member?.phone ?? "-"}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Adresse:</span>
                                        <span>{member?.address ?? "-"}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Date de naissance:</span>
                                        <span>
                                            {member?.birth_date
                                                ? new Date(member.birth_date).toLocaleDateString()
                                                : "-"}
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </main>

                        <Footer/>

                    </div>
                )
            }
        </>
    )
}