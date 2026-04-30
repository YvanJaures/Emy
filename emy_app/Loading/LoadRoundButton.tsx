// cn: className
export default function page({cn}:{cn?:string}){
    return <div className={`h-7 w-7 text-gray-100 bg-gray-100 rounded-full animate-pulse overflow-hidden dark:text-gray-600 dark:bg-gray-600 ${cn}  dark:opacity-15`}>button</div>
}