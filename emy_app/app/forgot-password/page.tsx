"use client"
import Button from "@/components/atoms/Button";
import FormError from "@/components/atoms/FormError";
import Title from "@/components/atoms/Title";
import Alert from "@/components/molecules/Alert";
import ResetPForm from "@/components/organisms/ResetPForm";
import VerificationForm from "@/components/organisms/VerificationForm";
import { fetchApi, getUser } from "@/fetchs/global";
import { MemberDTO } from "@/hooks/Type_DTO";
import { courrielEstValide } from "@/validations/validation";
import { useEffect,useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function Page(){
    const [verified,setVerified]=useState(false)

    const [verify,setVerify]=useState(false)

    const [email,setEmail]=useState('')

    const [code,setCode]=useState('')

    const [member,setMember]=useState<MemberDTO|null>(null)

    const [error,setError]=useState('')

    const [loading,setLoading]=useState(false)

    const [time,setTime]=useState(180)

    const createCode=()=>{
        const val = Math.floor(10000 + Math.random() * 90000)
        return val.toString()
    }
    const handleCode= async ()=>{
        setLoading(true)
        let codeV=createCode()
        const res0=await fetch(process.env.NEXT_PUBLIC_API_BASE+'/api/member/email?email='+email)
        
        if(!res0.ok){ 
            const ress=await res0.json()
            setError(ress.message)
            setLoading(false)
            return
        }
            
        const memberV=await res0.json() as MemberDTO
        const connected=await getUser() as MemberDTO

        if(connected){ 
            setError('vous devez être déconnecté pour continuer! redirection...')
            setTimeout(()=>{location.href='/profil'},3000)
        }
            
        if(!memberV){ 
            
           setError('Aucun membre enregistré avec ce courriel')
           setLoading(false)
           return
        }
        setMember(memberV)
        
        const payload={

            user_name:memberV.user_name,
            code:codeV,
            email:email

        }

        const res=await fetchApi(payload,'/api/sendMail/verificationEmail','POST')

        if(res){

          setCode(codeV)
          setVerify(true)
            setLoading(false)
        }
    }
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        setError('')
        if(!courrielEstValide(email)) return setError('Courriel invalide')
        handleCode()
    }
    const handleVerified=()=>{
        setVerified(true)
        setVerify(false)
    }
    useEffect(()=>{

        if(time===0) location.href='/login'

        for(let i=0;i<time;i++){

            setTimeout(()=>{setTime(time-1)},1000)
        }

    },[time])

    return(
        <div className="bg-cover bg-center bg-no-repeat flex boder h-screen w-full justify-center items-center dark:bg-white/10 bg-[url(/assets/arrieres_plan/DesertBloomArizona.png)] dark:bg-[url(/assets/arrieres_plan/Desert_bloom_night.png)]">
            <div className="bg-transparent backdrop-blur p-3 w-90 rounded-xs p-5 shadow-sm shadow-white">
                {(!verify&&!verified) &&<form className="flex  flex-col items-center text-gray-900 dark:text-gray-100 gap-5 justify-center"
                    onSubmit={(e)=>handleSubmit(e)}>
                    <Title as="p" className=" text-xl text-white">
                        Réinitialisation de mot de passe
                    </Title>
                    <input type="email" 
                        placeholder="votre adresse courriel"
                        value={email}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
                        className="w-80 p-2 border-2 rounded-sm outline-[#0F70AC] text-md text-center text-white"
                    />
                    <FormError
                        message={error}
                    />
                    <span className="flex gap-5">
                        <Button
                            type="submit"
                            title={loading ?"en cours...":"Vérification"}   
                            className="h-8 w-35" 
                            disabled={email.length===0|| loading}
                        />
                        <Button
                            type="button"
                            title={"Annuler"}   
                            className="h-8 w-35" 
                            color=""
                            disabled={loading}
                            onClick={()=>history.back()}
                        />
                    </span>
                </form>}
                {verify &&<VerificationForm
                    code={code}
                    onSuccess={handleVerified}
                    onResend={handleCode}
                    />
                }
                {(verified &&member) &&<ResetPForm
                    user_name={member.user_name}
                    reset={true}
                />
                }
                {error.length!==0 && <Alert 
                message={error}
                error={true}
                onMes={()=>setError('')}
                />}     
            </div>
            <div
                className={`flex absolute justify-start items-center gap-2 fixed top-35 left-1/2 -translate-x-1/2 z-50 p-2 border rounded-md shadow dark:bg-gray-800 w-80
                ${time<30 ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"} ${time<60 && "bg-orange-100 border-orange-500"}`}
                >
                    {time<30? (<MdOutlineCancel className="text-red-500 w-10 h-10"/>):(<FaRegCheckCircle className={` ${time<60 && "text-orange-500"} text-green-500 w-10 h-10`}/>)}
                <p className="text-center">Temps retant : {time} secondes {time<=5&& 'redirection...'}</p>
            </div>
        </div>
    )
}