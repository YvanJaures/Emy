import Button from "../atoms/Button"
export default function FounderCard(props:{name:string,img:string,email:string,username:string}){
    return(
        <>
            <div className="flex flex-col justify-center items-center gap-5 h-70 border-1 border-gray-200 w-46 shadow-[0_1px_5px_rgba(0,0,0,0.25)] ">
                <span className="flex flex-40 justify-center items-center bg-gray-200 w-full">
                    <img src={props.img} alt="userPicture" className="w-20 h-20 br-50 rounded-full" />
                </span>
                <span className="flex flex-col justify-center items-center p-3 gap-1">
                    <p className="font-bold">{props.name}</p>
                    <p className="italic  ">@{props.username}</p>
                    <p className="text-sm">{props.email}</p>
                    <Button title="Contacter" className="border-none"></Button>
                </span>
            </div>
        </>
    )
}