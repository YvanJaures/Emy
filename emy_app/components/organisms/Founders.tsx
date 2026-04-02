import FounderCard from "../molecules/FounderCard";
import Title from "../atoms/Title";


export default function Founders(){
    const founders=[
        {
        name: "Yvan Jaures",
        img: "/assets/avatars/yvan.png",
        email: "yvanjaures@email.com",
        username: "yvano"
    },
    {
        name: "Emma Raissa",
        img: "/assets/avatars/prof.png",
        email: "emmaraissa@email.com",
        username: "patate"
    },
    {
        name: "Mathieu Larocque",
        img: "/assets/avatars/mathieu.png",
        email: "mathieularocque@email.com",
        username: "patate"
    }
    ]
    return(
        <>
            <section className="w-full">
                <Title className="bold text-[25px]" as="h2">Rencontrez nos fondateurs</Title>
                <div className="flex flex-row justify-center items-center flex-wrap-reverse gap-2 mw-full">
                    {founders.map((founder,i)=>(
                        <FounderCard key={i} name={founder.name} 
                        img={founder.img} email={founder.email}
                        username=""></FounderCard>
                    ))}
                </div>
            </section>
        </>
    )
}