export default function ImageDefault(props:{avatar:string,title:string,className?:string}){
    return(
        <>
            <img src={props.avatar? props.avatar:"/assets/avatars/avatar_prof_2.png"}
             alt={props.title} className={props.className}
             onError={(e:any) =>(e.target.src="/assets/arrieres_plan/AutumnParkland.png")}
            />
        </>
    )
}