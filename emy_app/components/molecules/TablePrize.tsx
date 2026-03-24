"use client"

import { PrizeDTO } from "@/hooks/Type_DTO"
import { useState } from "react"
import Button from "../atoms/Button"

type Props={
    prizes:PrizeDTO[],
    onSelect:(prizes:PrizeDTO[])=>void,
}
export default function TablePrize({prizes,onSelect}:Props){
    const [selected,setSelected]=useState<{id:number,prize:PrizeDTO}[]|[]>([])
    const [tous,setTous]=useState(false)
    const [checked,setChecked]=useState<boolean[]>([...Array(prizes.length)].fill(false))
    const handleCheck=(p:number)=>{
        let selects:{id:number,prize:PrizeDTO}[]=selected
        
        
        const newChecked = checked.map((check, i) => {
            if (i === p) {
                if(check) {
                    if(tous) setTous(!tous)
                    const selects2 = selects?.filter(select => select.id !== p);
                    setSelected(selects2)
                    console.log(selects2)
                    
                }
                else {
                   selects.push({id:p,prize:prizes[p]})
                    console.log(selects)
                    setSelected(selects)
                }
                return !check;
            }
            return check;
        })
        setChecked(newChecked)
    }
    const handleTous=()=>{
        let select:{id:number,prize:PrizeDTO}[]=[]
        setTous(!tous)
        console.log(selected)
        const newChecked = checked.map((check) => {
            if (!tous) return true;
            else return !check
        })
        if(!tous) select=prizes.map((prize,i)=>{return {id:i,prize:prize}})
        else select=[]
        setSelected(select)
        setChecked(newChecked)
        console.log(newChecked)
    }
    const handleCommanditer=()=>{
        onSelect(selected.map((select)=>select.prize))
    }
    return(
        <>
            <div className="p-2">
                <table className="w-full rounded-xl shadow-md">
                    <caption className="text-start ml-2">LISTE DE COMMANDITES</caption>
                    <thead className="bg-gray-200 h-15">
                        <tr>
                            <th className="flex-5">
                                <input type="checkbox" name="tous" id="tous" 
                                    checked={tous}
                                    onChange={()=>{handleTous()}}/>
                                Tous
                            </th>
                            <th>
                                Commandites
                            </th>
                            <th>
                                Valeure
                            </th>
                            <th>
                                Places
                            </th>
                            <th>
                                Groupes
                            </th>
                            <th>
                                Etats
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { prizes?.map((prize,i)=>(
                            <tr key={prize?.id_prize} 
                                className="">
                                <td className="p-2"><input type="checkbox" name="prize" id="prize" 
                                    checked={checked[i]}
                                    onChange={()=>{handleCheck(i);}}/></td>
                                <td>{prize.name}</td>
                                <td>${5000}</td>
                                <td>{prize.group_spot*4}</td>
                                <td>{prize.group_spot}</td>
                                <td>{prize.Prize_sponsor?.length ?? 0}/{prize.spots}</td>
                            </tr>
                        ))

                        }
                        {/*{prizes.length===0 &&(
                            <tr className="w-full flex text-xl bold italic p-3 justify-center items-center"> 
                                <td><strong>Aucune commandite</strong></td>
                            </tr>
                        )

                        }*/}
                    </tbody>
                    <tfoot>
                        <tr className="flex justify-end w-full absolute right-0 mr-2">
                            <td>
                                <Button
                                    title="Commanditer"
                                    className="border-none h-8"
                                    onClick={()=>handleCommanditer()}/>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}