// cn: className
export default function Text({cn}:{cn?:string}){

    return(
        <>
            <div className={`text-center bg-gray-100 animate-pulse text-gray-100 dark:text-gray-100 mb-2 ${cn}`}>
                h
            </div>
        </>
    )
}