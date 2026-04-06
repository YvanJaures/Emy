import LoadRoundButton from "./LoadRoundButton";
import LoadText from "./LoadText";

export default function page(){
    return(
        <>
            <li  className="p-1 flex justify-start items-center w-full gap-1 dark:opacity-15">
                        <LoadRoundButton
                            cn='w-10 h-10 rounded-full p-1'/>
                        <LoadText cn="w-30 max-sm:w-10"/>
                        <span className="flex justify-evenly gap-4 flex-80">
                            <LoadText cn="w-15 max-sm:w-10"/>
                            <LoadText cn="w-60 max-sm:w-20"/>

                        </span>
                        <span 
                            className="flex flex-col flex-20 gap-2 justify-center items-center">
                            <LoadText cn="max-sm:hidden w-50"/>
                            <LoadRoundButton 
                                cn="hidden max-sm:block"/>
                        </span>
                        <LoadRoundButton 
                        cn="text-end justify-end "/>
            </li>
        </>
    )
}