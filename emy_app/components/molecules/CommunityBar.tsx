import Title from '../atoms/Title'
import SousTexte from '../atoms/SousTexte'
import Router from 'next/router';
import { useRouter } from "next/navigation";

export default function CommunityBar(props:{number:number,img:string,title:string,details:string,size:string}){
    const router=useRouter()
    return(
    <div className='w-[100%] flex gap-5 flex-wrap justify-evenly items-center text-center flex-100 h-20 bg-white p-2 rounded-xl'>
        <p className='text-center text-gray-400 text-xl italic flex-10'>{props.number}.</p>
        <img src={props.img} alt="image de la communauté" className='w-35 rounded-xl flex-10'/>
        <span className='flex flex-col gap-2 align-center flex-60 items-start'>
            <Title>{props.title.toUpperCase()}</Title>
            <SousTexte details={props.details}></SousTexte>
        </span>
        <span className='flex flex-col gap-2 align-center flex-20'>
            <SousTexte details={`${props.size} Membres`}></SousTexte>
            <p className='text-0F70AC hover:cursor-pointer text-[#0F70AC]' onClick={() => router.push("/login")}>+ REJOINDRE</p>
        </span>
    </div>
    );
}