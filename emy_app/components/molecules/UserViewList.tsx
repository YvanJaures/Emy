import { MemberDTO } from "@/hooks/Type_DTO";
import ImageDefault from "../atoms/ImageDefault";
import { FaRegEye } from "react-icons/fa";
/**
 * affiche la liste des membres de la communauté
 * @param props :{ MemberDTO[] }
 * @returns la liste de membres
 */
export default function UserViewList(props:{members:MemberDTO[]}){
    return(
        <ul className="absolute w-full mt-17 p-3 flex flex-col justify-start items-center gap-2">
            { props.members.length>0 ?
                (props.members.map((member)=>(
                    <li key={member.user_name} className="group hover:cursor-pointer hover:bg-black/10 p-1 flex justify-start items-center w-full"
                        onClick={()=> location.href='/members?id='+member.user_name}>
                        <ImageDefault
                        avatar={member.avatar ?? ''}
                        title='image de profil du membre'
                        onClick={()=> location.href='/members?id='+member.user_name}
                        className='w-10 h-10 rounded-full p-1'/>
                        <p className=" flex-10 max-sm:text-[13px] text-gray-500 italic"><sub>@</sub>{member.user_name}</p>
                        <FaRegEye 
                        className="flex text-end justify-end group-hover:text-[#0F70AC]"/>
                    </li>
                )) 
                ):(
                <li>
                    <p>
                        Aucun membre pou l'instant.
                    </p>
                </li>
                )
            }
        </ul>
    )
}