import Button from "../atoms/Button"
export default function FounderCard(props:{name:string,img:string,email:string,username:string}){
    return(
        <>
            <div className="flex flex-col justify-center items-center gap-1 h-80 border-1 border-gray-200 w-60 max-sm:h-50 max-sm:w-26 rounded-xl overflow-hidden shadow-[0_1px_5px_rgba(0,0,0,0.25)] ">
                <span className="flex flex-50 justify-center items-center bg-gray-200 w-full dark:bg-gray-800">
                    <img src={props.img} alt="userPicture" className="w-25 h-25 max-sm:w-15 max-sm:h-15 br-50 rounded-full bg-green-600/50 animate-pulse p-1" />
                </span>
                <span className="flex flex-col justify-center items-center p-3 gap-1 w-full max-sm:text-[12px]">
                    <p className="font-bold line-clamp-1">{props.name}</p>
                    <p className="italic  ">@{props.username}</p>
                    <p className="text-sm text-start max-sm:text-[10px] text-ellipsis overflow-hidden w-full">{props.email}</p>
                    <Button title="Contacter" className="border-none max-sm:w-18 max-sm:h-6"></Button>
                </span>
            </div>
        </>
    )
}