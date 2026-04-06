import LoadRoundButton from "./LoadRoundButton";
import LoadText from "./LoadText";

export default function page(){
    return(
        <>
            <div className="w-full shadow-md mb-5 bg-white rounded-lg flex flex-wrap items-center justify-start gap-2 p-2 dark:bg-gray-800">
            <LoadRoundButton
                cn="w-[6rem] h-[6rem] rounded-full"/>
            <div className="flex flex-col gap-0.5 max-sm:hidden dark:opacity-15">
                <LoadText cn="text-sm w-10"></LoadText>
                <LoadText cn="text-sm w-15"></LoadText>
                <LoadText cn="text-sm w-20"></LoadText>
                <LoadText cn="text-sm w-25"></LoadText>
            </div>
            <div className="flex flex-col gap-0.5 dark:opacity-15">
                <LoadText cn="text-sm w-60"></LoadText>
                <LoadText cn="text-sm w-60"></LoadText>
                <LoadText cn="text-sm w-60"></LoadText>
                <LoadText cn="text-sm w-60"></LoadText>
            </div>
            <div className="flex flex-col h-full gap-0.5 justify-start items-end ml-auto dark:opacity-15 ">
                <LoadText cn="flex items-center text-sm w-10"/>
                <LoadText cn="flex items-center text-sm w-15"/>
                <LoadText cn="flex items-center text-sm w-20"/>
            </div>
        </div>
        </>
    )
}