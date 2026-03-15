"use client"
import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";
import Sidebar from "@/components/organisms/SideBar";


export default function Profil(){
    return(

    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
        <div className="bg-white w-[900px] h-[600px] rounded-lg shadow-lg relative flex">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
                X
            </button>
            

            <Sidebar/>

            <div className="flex-1 p-8 overflow-y-auto">
                 <h1 className="text-xl font-semibold mb-6">
                    PARAMÈTRES
                </h1>
            </div>
    
    
        </div>
        <Footer/>
    </div>
    )
}