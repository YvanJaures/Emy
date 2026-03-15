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

                        <div>

                            <button
                            type="button"
                            aria-label="Close"
                            className="absolute right-6 top-4 text-black/70 hover:text-black hover:cursor-pointer text-[40px] leading-none"
                            onClick={() => history.back()}
                            >
                            ×
                            </button>
                        </div>

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

                                <div className="flex flex-row flex-wrap w-full h-fit justify-start items-start gap-5 rounded-xl p-6 shadow-xl mt-10 bg-white">

                                    <div className="grid grid-cols-[200px_1fr] gap-y-4 gap-x-10 w-full max-w-2xl">

                                        <span className="">Nom utilisateur:</span>
                                        <span>{member?.user_name ?? "-"}</span>

                                        <span className="">Nom:</span>
                                        <span>{member?.name ?? "-"}</span>

                                        <span className="">Prénom:</span>
                                        <span>{member?.surname ?? "-"}</span>

                                        <span className="">Email:</span>
                                        <span>{member?.email ?? "-"}</span>

                                        <span className="">Téléphone:</span>
                                        <span>{member?.phone ?? "-"}</span>

                                        <span className="">Adresse:</span>
                                        <span>{member?.address ?? "-"}</span>

                                        <span className="">Date de naissance:</span>
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