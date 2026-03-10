"use client"
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import { useRouter } from "next/navigation";
export default function Error404Page(){
    const router = useRouter();
    return(
        <div className="w-full h-dvh bg-cover bg-[url(/assets/emy_error_404_v2.png)]
         bg-clip-content bg-center bg-no-repeat bg-fixed overflow-hidden 
         flex flex-col overflow-scroll">
        <div className="bg-white w-full h-fit p-10 
          flex flex-col justify-center items-center gap-3 max-sm:text-[20px] text-[30px] bold">
          <Title className="flex justify-center items-center gap-2
            text-[30px] bold">
            <p className="text-red-700 text-[50px]">×</p>
            Page introuvable
          </Title>
          Il semble que la page soit hors limite.
        <Button
            title="RETOUR"
            onClick={() => router.back()}
            className="bg-[#0F70AC] text-white border-none w-fit
             "
            color="#0F70AC"
        ></Button>
        </div>
        <img
           src="/assets/emy_error_404_v2.png"
           alt="image de page introuvable"
           className="h-dvh w-full object-cover top-0"
         />
      </div>
    )
}