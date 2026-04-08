import { useState } from "react";
import InputText from "../atoms/InputText";
import Button from "../atoms/Button";
import FormError from "../atoms/FormError";
import { telEstValide } from "@/validations/validation";
import { MemberDTO, SponsorDTO } from "@/hooks/Type_DTO";
import { addSponsor, fetchApi } from "@/fetchs/global";

/**
 * Interface pour les erreurs de formulaire
 */
type formErrors={
    /** Titre du champ en erreur */
    title:string,
    /** Message d'erreur associé */
    error:string|undefined
}

/**
 * Interface pour la fermeture du formulaire
 */
export type FormClose={
    /** Sponsor créé (null si annulé) */
    sponsor:SponsorDTO|null,
    /** Indique si le formulaire doit être fermé */
    close:boolean
}

/**
 * Composant SponsorForm - Formulaire pour devenir commanditaire
 *
 * Ce composant affiche un formulaire permettant à un membre de devenir sponsor.
 * Il valide les données saisies et envoie une requête pour créer le sponsor.
 * Le formulaire inclut la validation des champs requis et la gestion des erreurs.
 *
 * @param props - Les propriétés du composant
 * @param props.member - Informations du membre qui devient sponsor
 * @param props.onClose - Fonction appelée lors de la fermeture du formulaire
 * @returns Le composant SponsorForm rendu
 */
export default function SponsorForm({member,onClose}:{member:MemberDTO,onClose:(close:FormClose)=>void}){
    const [username, setUsername] = useState(member.user_name);
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState(member.email);
    const [phone, setPhone] = useState(member.phone?? "");
    const [title, setTitle] = useState("");
    const [formErrors,setFormErrors]=useState<formErrors[]>([
        {title:"username",error:undefined},
        {title:"companyName",error:undefined},
        {title:"email",error:undefined},
        {title:"phone",error:undefined},
        {title:"title",error:undefined}
    ]);
    const [errorSubmit,setErrorSubmit]=useState<string>("");
    const [loading,setLoading]=useState(false)
    const EmptyForm=()=>{
        setCompanyName("");
        setTitle("");
    };

    const validateForm=()=>{
        let isValid=true;
        const newErrors=formErrors.map((error) => {
            if (error.title === "username" && !username) {
                isValid = false;
                return { ...error, error: "Le nom d'utilisateur est requis" };
            }
            if (error.title === "companyName" && !companyName) {
                isValid = false;
                return { ...error, error: "Le nom de l'entreprise est requis" };
            }
            if (error.title === "email" && !email) {
                isValid = false;
                return { ...error, error: "L'adresse e-mail est requise" };
            }
            if (error.title === "phone") {
                if(!phone){
                    isValid = false;
                    return { ...error, error: "Le numéro de téléphone est requis" };
                }
                /*if(phone && !telEstValide(phone)){
                    isValid=false;
                    return {...error,error:"Le numéro de téléphone n'est pas valide"};
                }*/
            }
            if (error.title === "title" && !title) {
                isValid = false;
                return { ...error, error: "Le titre est requis" };
            }
            return { ...error, error: undefined };
        });
        setFormErrors(newErrors);
        return isValid;
    };
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setErrorSubmit("");
        setLoading(true)
        if(!validateForm()) return setLoading(false);
        const payload={
            user_name:username,
            company_name:companyName,
            title:title,
            email:member.email
        }
        const addedSponsor=await addSponsor(payload)
        if(!addedSponsor) {
            setLoading(false)
            setErrorSubmit("Une erreur est survenue lors de l'ajout du commanditaire! Veuillez réessayer.");
            return
        }
        EmptyForm();
        const sponsor:SponsorDTO={
            user_name:username,
            company_name:companyName,
            title:title,
            Member:member
        }
        onClose({sponsor,close:true});
    }
    return(
        <>
            <form className="p-4 text-center flex flex-col gap-2 items-center justify-center dark:bg-gray-800"
                onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
                <h2 className="text-xl font-bold">Formulaire de devenir commanditaire</h2>
                <div className="w-full flex flex-col">
                    <InputText
                        label="Nom d'utilisateur"
                        type='text'
                        value={username}
                        inputClassName="hover:cursor-not-allowed pointer-events-none opacity-40"
                    />
                    <FormError message={formErrors[0].error}/>
                    <InputText
                        label="Nom de l'entreprise"
                        type='text'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <FormError message={formErrors[1].error}/>
                    <InputText
                        label="Couriel"
                        type='text'
                        value={email}
                        inputClassName="hover:cursor-not-allowed pointer-events-none opacity-40"
                    />
                    <FormError message={formErrors[2].error}/>
                    <InputText
                        label="Telephone"
                        type='phone'
                        value={phone}
                        inputClassName="hover:cursor-not-allowed pointer-events-none opacity-40"
                    />
                    <FormError message={formErrors[3].error}/>
                    <InputText
                        label="Titre"
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onFocus={()=>{}}
                    />
                    <FormError message={formErrors[4].error}/>
                </div>
                <FormError message={errorSubmit}/>
                <div className="flex gap-2 w-full justify-evenly">
                    <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 border-none"
                        title={loading?"En cours...":"Soumettre"}
                        type="submit"
                        disabled={loading}
                        >
                    </Button>
                    <Button className="px-4 py-2 bg-red-500 text-gray-700 rounded hover:bg-red-600 border-none"
                        title="Annuler"
                        onClick={()=>onClose({sponsor:null,close:true})}
                    >
                    </Button>
                </div>
            </form>
        </>
    )
}