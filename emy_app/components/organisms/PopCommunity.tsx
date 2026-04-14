import CommunityBar from '../molecules/CommunityBar'
export default function PopCommunity(props:{list:Array<any>}){
    return(
    <div className='flex flex-col gap-5 justify-center items-center bg-[url(/assets/arrieres_plan/CarolinaLowCountry.png)] bg-cover bg-no-repeat p-5 w-full'>
        <h2 className='text-white text-[24px] underline'>COMMUNAUTES POPULAIRES :</h2>
        {props.list.map((element,index)=>(
            <CommunityBar key={index} number={index+1} img={`${element.avatar}`} title={element.name} details={element.details} size={`${element.members}`}></CommunityBar>
        ))}
        
    </div>
    );
}