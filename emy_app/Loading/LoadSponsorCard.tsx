import LoadRoundButton from "./LoadRoundButton";
import LoadText from "./LoadText";

export default function page(){
    return(
        <>
            <div className="w-full shadow-md mb-3 bg-white rounded-lg flex flex-wrap items-center justify-start gap-2 p-2 dark:bg-gray-800">
            <LoadRoundButton
                cn="w-[4rem] h-[4rem] rounded-full"/>
            <div className="flex flex-col gap-0.5 max-sm:hidden dark:opacity-15">
                <LoadText cn="text-[10px] w-10 max-sm:h-3  max-sm:w-5 "></LoadText>
                <LoadText cn="text-[10px] w-15 max-sm:h-3  max-sm:w-7 "></LoadText>
                <LoadText cn="text-[10px] w-20 max-sm:h-3  max-sm:w-10"></LoadText>
                <LoadText cn="text-[10px] w-25 max-sm:h-3  max-sm:w-12"></LoadText>
            </div>
            <div className="flex flex-col gap-0.5 dark:opacity-15">
                <LoadText cn="text-[12px] max-sm:h-3 w-60 max-sm:w-30 "></LoadText>
                <LoadText cn="text-[12px] max-sm:h-3 w-60 max-sm:w-30 "></LoadText>
                <LoadText cn="text-[12px] max-sm:h-3 w-60 max-sm:w-30 "></LoadText>
                <LoadText cn="text-[12px] max-sm:h-3 w-60 max-sm:w-30 "></LoadText>
            </div>
            <div className="flex flex-col h-full gap-0.5 justify-end items-end ml-auto dark:opacity-15 ">
                <LoadText cn="flex items-center text-[10px] w-10 max-sm:h-3   max-sm:w-5"/>
                <LoadText cn="flex items-center text-[10px] w-15 max-sm:h-3   max-sm:w-7"/>
                <LoadText cn="flex items-center text-[10px] w-20 max-sm:h-3  max-sm:w-10"/>
            </div>
        </div>
        </>
    )
}