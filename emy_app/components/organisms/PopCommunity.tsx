import router from 'next/router';
import Title from '../atoms/Title';
import CommunityBar from '../molecules/CommunityBar'
export default function PopCommunity(props:{list:Array<any>}){
    return(
    <div className='flex flex-col gap-5 justify-center items-center bg-[url(/assets/arrieres_plan/CarolinaLowcountry.png)] bg-cover bg-no-repeat p-5 w-full'>
        <div className="w-full pb-4">
          <div className="flex items-baseline justify-between mb-4 mx-auto">
            <h2 className="text-white text-[24px] underline">COMMUNAUTÉS POPULAIRES</h2>
            <button
              onClick={() => router.push("/communautes")}
              className="text-[#0F70AC] text-md hover:underline hover:cursor-pointer bg-black rounded-xl px-2"
            >
              Voir tout →
            </button>
          </div>
        </div>
        {props.list.map((element,index)=>(
            <CommunityBar key={index} number={index+1} img={`${element.avatar}`} title={element.name} details={element.details} size={`${element.members}`}></CommunityBar>
        ))}
        
    </div>
    );
}