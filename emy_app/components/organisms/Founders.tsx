import FounderCard from "../molecules/FounderCard";
import Title from "../atoms/Title";


export default function Founders(){
    const founders=[
    {
        name: "Emma Raissa",
        img: "/assets/avatars/prof.png",
        email: "emmaraissa@email.com",
        username: "fondatrice"
    },
    {
        name: "Mathieu Larocque",
        img: "/assets/avatars/mathieu.png",
        email: "mathieularocque@email.com",
        username: "fondateur"
    },
    {
        name: "Yvan Jaures",
        img: "/assets/avatars/yvan.png",
        email: "yvanjaures@email.com",
        username: "fondateur"
    }
    ]
    return(
        <>
            <section className="w-full gap-5 flex flex-col items-center justify-center py-2">
                <Title className="bold text-[25px]" as="h2">Rencontrez nos fondateurs</Title>
                <div className="flex flex-row justify-center items-center flex-wrap-reverse gap-5 mw-full">
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