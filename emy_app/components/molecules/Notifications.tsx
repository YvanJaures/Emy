import Title from '../atoms/Title'
type Props={
    notifications:any[]|null
}
export default function Notifications({notifications}:Props){
    return(
        <div className="absolute flex flex-col h-dvh w-sm right-0 mr-2 rounded-xl z-99 bg-white">
            <Title
            children='NOTIFICATIONS'
            as='h2'
            className="text-xl bold text-center p-2"/>
            {
                !notifications &&(
                    <p className="text-center italic">Aucune notification pour l'instant!</p>
                )
            }
            <ul>
                { notifications?.map((notification)=>(
                    <li>Hello</li>
                ))}
            </ul>
        </div>
    )
}