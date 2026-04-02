"use client"

// Composant TablePrize : Affiche une table des prix/commandites avec possibilité de sélection
// Permet à l'utilisateur de sélectionner des prix et de les commanditer

import { PrizeDTO } from "@/hooks/Type_DTO"
import { useEffect, useState } from "react"
import Button from "../atoms/Button"

/**
 * Props du composant TablePrize
 */
type Props={
    prizes:PrizeDTO[], // Liste des prix/commandites à afficher
    onSelect:(prizes:PrizeDTO[])=>void, // Fonction appelée lors de la sélection des prix
    success?:boolean // Indique si la sélection a été effectuée avec succès
}

/**
 * Composant TablePrize : Affiche une table des prix/commandites avec possibilité de sélection
 * Permet à l'utilisateur de sélectionner des prix et de les commanditer
 * @param {Props} props - L'objet props
 * @param {PrizeDTO[]} props.prizes - Liste des prix à afficher
 * @param {(prizes: PrizeDTO[]) => void} props.onSelect - Fonction appelée lors de la sélection des prix
 * @param {boolean} [props.success] - Indique si la sélection a été effectuée avec succès
 * @returns {JSX.Element} Le composant rendu
 */
export default function TablePrize({prizes,onSelect,success}:Props){
    // État pour les prix sélectionnés
    const [selected,setSelected]=useState<{id:number,prize:PrizeDTO}[]|[]>([])
    // État pour indiquer si tous les prix sont sélectionnés
    const [tous,setTous]=useState(false)
    // État pour les cases à cocher individuelles
    const [checked,setChecked]=useState<boolean[]>([...Array(prizes.length)].fill(false))

    // État pour suivre les prix déjà ajoutés/commandités
    const [added,setAdded]=useState<boolean[]>([...Array(prizes.length)].fill(false))

    // État pour la liste des prix (copie locale pour éviter les mutations)
    const [prizesList,setPrizesList]=useState<PrizeDTO[]>(prizes)
    /**
     * Gestionnaire pour cocher/décocher un prix individuel
     * @param {number} p - L'indice du prix dans le tableau
     */
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
                   if(!selects.some((s)=>s.id===p)) selects.push({id:p,prize:prizes[p]})
                    console.log(selects)
                    setSelected(selects)
                }
                return !check;
            }
            return check;
        })
        setChecked(newChecked)
    }
    /**
     * Gestionnaire pour sélectionner/désélectionner tous les prix
     */
    const handleTous=()=>{
        let select:{id:number,prize:PrizeDTO}[]=[]
        setTous(!tous)
        console.log(selected)
        const newChecked = checked.map((check) => {
            if (!tous) return true;
            else return !check
        })
        if(!tous) select=prizes.map((prize,i)=>{
            // Vérifie si le prix est déjà commandité ou si les places sont remplies
            if((prize.Prize_sponsor?.length ?? 0) >=prize.spots || added[i]) return {id:-1,prize:prize}
            return {id:i,prize:prize}}
        )
        else select=[]
        const selected2=select.filter(select=>select.id!==-1)
        setSelected(selected2)
        setChecked(newChecked)
        console.log(newChecked)
    }
    /**
     * Gestionnaire pour commanditer les prix sélectionnés
     */
    const handleCommanditer=()=>{
        // Appelle la fonction onSelect avec les prix sélectionnés
        onSelect(selected.map((select)=>select.prize))
        // Réinitialise les cases cochées
        setChecked(checked.map(()=>false))
        // Marque les prix sélectionnés comme ajoutés
        let add=added
        selected.forEach((select)=>{
            if(!added[select.id]) add[select.id]=true
        })
        setAdded(add)
        // Vide la sélection
        setSelected([])
    }
 /*   useEffect(()=>{
        // Effet pour gérer le succès de la commandite
        if(success && success) {
            const added=selected.map((select,i)=>{
                if(select.id===i) return true
                return false
            });
            setAdded(added)
            setSelected([])
        }
    },[success])*/
    // Rendu du composant : table avec cases à cocher et bouton de commandite
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
                        {/* Mapping des prix pour afficher chaque ligne du tableau */}
                        { prizesList?.map((prize,i)=>(
                            <tr key={prize?.id_prize} 
                                className="p-2 hover:bg-black/2"
                                onClick={()=>{
                                    if((prize.Prize_sponsor?.length ?? 0) <= prize.spots && !added[i]) handleCheck(i)
                                }}>
                                <td className="p-2">
                                    {/* Case à cocher seulement si le nombre de sponsors est inférieur aux places disponibles et que le prix n'est pas déjà ajouté */}
                                    {(prize.Prize_sponsor?.length ?? 0) <= prize.spots && !added[i]&&(<input type="checkbox" name="prize" id="prize" 
                                    checked={checked[i]}
                                    onChange={()=>{handleCheck(i);}}/>)}
                                </td>
                                <td className="p-2 ">{prize.name}</td>
                                <td className="p-2 ">${prize.value}</td>
                                <td className="p-2 ">{prize.group_spot*4}</td>
                                <td className="p-2 ">{prize.group_spot}</td>
                                <td className="p-2 ">{prize.Prize_sponsor?.length ?? 0}/{prize.spots}</td>
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
                                    className={`${selected.length===0 && "hover:cursor-not-allowed"} border-none h-8`}
                                    disabled={selected.length===0}
                                    containerClassName={`${selected.length===0 && "hover:cursor-not-allowed"} `}
                                    onClick={handleCommanditer}/>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}