import FounderCard from "../molecules/FounderCard";
import Title from "../atoms/Title";


export default function Founders(){
    const founders=[
    {
        name: "Emma Raissa",
        img: "/assets/avatars/prof.png",
        email: "emmaraissa@gmail.com",
        username: "fondatrice"
    },
    {
        name: "Mathieu Larocque",
        img: "/assets/avatars/mathieu.png",
        email: "mathieularocque@gmail.com",
        username: "fondateur"
    },
    {
        name: "Yvan Jaures",
        img: "/assets/avatars/yvan.png",
        email: "yvanjauresnzali@gmail.com",
        username: "fondateur"
    }
    ]
    return(
        <>
            <section className="w-full gap-3 flex flex-col items-center justify-center py-2">
                <Title className="bold text-[25px] max-sm:text-[20px]" as="h2">Rencontrez nos fondateurs</Title>
                <div className="flex flex-row justify-center items-center flex-wrap-reverse gap-3 mw-full">
                    {founders.map((founder,i)=>(
                        <FounderCard key={i} name={founder.name} 
                        img={founder.img} email={founder.email}
                        username={founder.username}></FounderCard>
                    ))}
                </div>
            </section>
        </>
    )
}