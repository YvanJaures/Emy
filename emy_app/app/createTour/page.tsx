"use client"

import { useState } from "react";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import Footer from "@/components/organisms/Footer";
import InputText from "@/components/atoms/InputText";
import Button from "@/components/atoms/Button";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function CreateTournament(){
    function addRow(){
        const tr=document.createElement('tr')

        tr.className="m-0 flex w-full"
        tr.innerHTML=`
                <td  className="flex-40 flex text-center justify-center items-center">
                    <input type="text" placeholder="nom" className="w-full p-2 text-center" required/>
                </td>
                <td  className="flex-15 flex text-center justify-center items-center">
                    $<input type="text" placeholder="valeur" className="w-full p-2 text-center" required/>
                </td>
                <td  className="flex-10 flex text-center justify-center items-center">
                    <input type="text" placeholder="quota" className="w-full p-2 text-center" required/>
                </td>
                <td  className="flex-30 flex text-center justify-center items-center">
                    <input type="text" placeholder="places disponibles" className="w-full p-2 text-center" required/>
                </td>
                <td  className="flex-5 p-2 text-center flex text-center justify-center items-center">
                    <Button className="bg-black-20 w-5 border-none" 
                    title="+" 
                    onClick={()=>(addRow())}></Button>
                </td>
            `
        document.getElementById('tableBody')?.append(tr)
    }
    const [tr,setTr]=useState(1)
    let trHaut=""
    if(tr<2) trHaut="pointer-events-none"
    return(
        <div className="bg-gray-100">
            <NavBarAdmin/>
            <main className="flex flex-col gap-2 p-5 justify-center items-center rounded-xl m-2 bg-white shadow-xl">
                <h1>
                    CREATION D UN TOURNOI
                </h1>
                <form action="submit" method="post" className="flex flex-col justify-center items-center w-full p-5">
                    <section className="flex flex-col flex-wrap w-full">
                        <div className="flex flex-row flew-wrap justify-center items-center gap-2">
                            <InputText label="Nom du tournoi" 
                                containerClassName="flex flex-row 
                                flew-wrap justify-center items-center" 
                                required>
                            </InputText>
                            <InputText label="Type de tournoi" containerClassName="flex flex-row flew-wrap justify-center items-center" required></InputText>
                        </div>
                        <div className="flex flex-row flew-wrap justify-center
                             items-center gap-2">
                            <InputText label="Date de début" 
                                containerClassName="flex flex-row
                                flew-wrap justify-center items-center" 
                                type="date" required>
                            </InputText>
                            <InputText label="Date de fin" 
                                containerClassName="flex flex-row
                                 flew-wrap justify-center items-center"
                                  type="date" required>
                            </InputText>
                        </div>
                            <InputText label="Avatar" 
                                containerClassName="flex flex-row flew-wrap 
                                justify-center items-center gap-6" type="file" 
                                accept="Image/*">
                            </InputText>
                    </section>
                    <section className="flex flex-col flex-wrap w-full">
                        <table className="w-full">
                            <caption>LISTE DE COMMANDITES</caption>
                            <thead className="bg-gray-200 p-2 
                                flex justify-start items-center  w-full">
                                <th className="flex-40">
                                    Nom de commandite
                                </th>
                                <th className="flex-15">
                                    Valeur
                                </th>
                                <th className="flex-10">
                                    Quotas
                                </th>
                                <th className="flex-30">
                                    Places
                                </th>
                                <th className="flex-5"></th>
                            </thead>
                            <tbody id="tableBody">
                                {[...Array(tr,)].map((_,i)=>(
                                    <tr key={i} className="m-0 flex w-full">
                                        <td  className="flex-40 flex text-center justify-center items-center">
                                            <input type="text" placeholder="nom" className="w-full p-2 text-center" required/>
                                        </td>
                                        <td  className="flex-15 flex text-center justify-center items-center">
                                            $<input type="text" placeholder="valeur" className="w-full p-2 text-center" required/>
                                        </td>
                                        <td  className="flex-10 flex text-center justify-center items-center">
                                            <input type="text" placeholder="quota" className="w-full p-2 text-center" required/>
                                        </td>
                                        <td  className="flex-30 flex text-center justify-center items-center">
                                            <input type="text" placeholder="places disponibles" className="w-full p-2 text-center" required/>
                                        </td>
                                        <td  className="flex-5 p-2 text-center flex text-center justify-center items-center">
                                            <RiDeleteBin2Line className={trHaut}  onClick={()=>(setTr(tr-1))}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Button className={`bg-black-20 w-5 border-none absolute right-0 -translate-4 -translate-y-8`} title="+" onClick={()=>(setTr(tr+1))}></Button>
                        <InputText label="Frais d'inscription" 
                            containerClassName="flex flex-row flew-wrap 
                            justify-center items-center" type="text" required>
                        </InputText>
                    </section>
                    <section className="flex justify-evenly items-center w-full">
                        <Button className="bg-green-400 border-none w-25" 
                            title="Creer" type="submit"/>
                        <Button className="bg-red-400 border-none w-25" 
                            title="Annuler" onClick={()=>(history.back())}/>
                    </section>
                </form>
            </main>
            <Footer/>
        </div>
    )
}