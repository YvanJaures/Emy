import { MdOutlineLock } from "react-icons/md";
export default function OnPrivate(){
    return(
        <div className="flex flex-col h-3/4 bg-gray-200 justify-center items-center dark:bg-black/100">
            <MdOutlineLock />
            <p>Ces données sont protégées</p>
        </div>
    )
}