export default function ImageDefault(props:{avatar:string,title:string}){
    return(
        <>
            <img src={props.avatar? props.avatar:"/assets/avatars/avatar_prof_2.png"}
             alt={props.title} className="w-full"
             onError={(e) =>(e.target.src="/assets/arrieres_plan/AutumnParkland.png")}
            />
        </>
    )
}