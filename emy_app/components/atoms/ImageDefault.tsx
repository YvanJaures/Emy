type ImageProps={
    
    avatar:string,title:string,
    className?:string,
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;

}
const ImageDefault:React.FC<ImageProps>=({avatar,title,className,onClick})=>
    {
    return(
        <>
            <img src={avatar? avatar:"/assets/avatars/avatar_prof_2.png"}
             alt={title} className={className}
             onError={(e:any) =>(e.target.src="/assets/arrieres_plan/AutumnParkland.png")}
             onClick={onClick}
            />
        </>
    )
}
export default ImageDefault