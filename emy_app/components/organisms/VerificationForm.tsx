"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import Title from "../atoms/Title"
import FormError from "../atoms/FormError"
import { FaArrowRotateLeft } from "react-icons/fa6";
type Props={
    code:string,
    onSuccess:()=>void,
    onResend:(e: React.FormEvent) => Promise<void>
}
export default function Verification({code,onSuccess,onResend}:Props){
    const [values,setValues]=useState<string[]>(['','','','',''])
    const [cle,setCle]=useState(code)
    const [error,setError]=useState('')
    const [time,setTime]=useState(59)
    const ref0=useRef<HTMLInputElement | null>(null)
    const ref1=useRef<HTMLInputElement | null>(null)
    const ref2=useRef<HTMLInputElement | null>(null)
    const ref3=useRef<HTMLInputElement | null>(null)
    const ref4=useRef<HTMLInputElement | null>(null)
    const refs=[ref0,ref1,ref2,ref3,ref4]
    const handleValueChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        const vals = [...values]

        // Gestion du paste (plusieurs caractères)
        if (input.length > 1) {
            const chars = input.slice(0, values.length - i).split("")
            chars.forEach((char, index) => {
                vals[i + index] = char
            })
            setValues(vals)

            const nextIndex = i + chars.length
            if (nextIndex < refs.length) {
                refs[nextIndex].current?.focus()
            } else {
                handleEnd()
            }
            return
        }

        // Cas normal (1 caractère)
        vals[i] = input
        setValues(vals)

        if (input && i < refs.length - 1) {
            refs[i + 1].current?.focus()
        }

        if (i === values.length - 1) {
            handleEnd()
        }
    }
    const handleEnd=()=>{
        setError('')
        if(values.join('')===cle) return onSuccess()
        else return setError('Code incorrect') 
    }
    const reset=()=>{
        setValues(values.map(()=> {return ''}))
        setError('')
    }
    const handleResend=(e:React.FormEvent)=>{
        if(time!==0) return
        onResend(e)
        setTimeout(()=>{setTime(59)},5000)
        reset()
    }
    useEffect(()=>{
        for(let i=0;i<time;i++){

            setTimeout(()=>{setTime(time-1)},1000)
        }

    },[time])
    useEffect(()=>{
        setCle(code)
    },[code])
    return(
        <form className="flex w-full flex-col items-center text-gray-900 dark:text-gray-100 gap-2">
            <Title as="p" className="mb-3 text-xl">
                Vérification de compte
            </Title>
            <p>Nous vous avons envoyé un code par courriel</p>
            <div className="dark:border border-white flex gap-4">
                {[...Array(5)].map((_,i)=>(
                    <input key={i} className="w-8 p-2 border-2 rounded-sm outline-[#0F70AC] text-md text-center"
                        value={values[i]}
                        ref={refs[i]}
                        onFocus={(e) =>{ (e.target.value = "");if(i===values.length-1 && e.target.value!=='') handleEnd()}}
                        onChange={(e)=>handleValueChange(i,e)}/>
                ))}
            </div>
            <FaArrowRotateLeft 
                className="w-4 h-4 hover:rotate-180 transition-smooth hover:cursor-pointer"
                onClick={reset}
            />
            <FormError message={error}/>
            <p className={`underline text-sm text-start hover:cursor-pointer hover:opacity-80 ${time===0? 'text-[#0F70AC]':'text-gray-500'}`}
                onClick={handleResend}
                >Ré-envoyé le code</p>
            <p>00:{time<10 && 0}{time}</p>
        </form>
    )
}