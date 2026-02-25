import NavBar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import ProfileCard from "@/components/organisms/ProfileCard";



export default function ProfilAdmin(){
    const admin={
      name: "Yvan jaures",
      details: "Communauté de la ville d’ottawa. Rejoins nous pour du fun!",
      imgUrl: "/assets/avatars/avatar_prof_4.png",
      email: "emaildeyvan@gmail.com"
    }
    return(
        <div className="bg-gray-100">
            <NavBar/>
            <main className="mb-80 mt-5 flex flex-col justify-center items-center m-2">
                <ProfileCard name={admin.name} imgUrl={admin.imgUrl} email={admin.email} edit="pointer-events-all"/>
            </main>
            <Footer/>
        </div>
    )
}