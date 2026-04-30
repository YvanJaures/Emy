import LoadRoundButton from "./LoadRoundButton";
import LoadText2 from "./LoadText2";

export default function page(){
    return(
        <>
        <li className="w-40 h-60 shadow-lg border border-black/10 p-1 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-hidden h-full flex flex-col justify-center items-center gap-2">
                <LoadText2
                    cn="w-40 h-30 rounded-xl"
                />
                <section
                    className="w-full flex-30 flex flex-col justify-between items-center gap-2"
                >
                    <LoadText2
                        cn="w-full text-center text-sm font-semibold text-nowrap overflow-hidden text-ellipsis"
                    />
                    <span className="flex flex-col text-[10px] gap-1 justify-center items-center w-full">
                        <LoadText2 cn="w-10 h-3 max-sm:w-10"/>
                        <LoadText2 cn="w-30 h-3"/>
                    </span>
                    <LoadText2 
                        cn="border-none h-4 w-25"
                    />
                    <LoadText2
                        cn="w-full h-3 max-sm:w-full mb-0"/>
                </section>
            </div>
        </li>
        </>
    )
}