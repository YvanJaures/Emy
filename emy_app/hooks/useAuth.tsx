"use client"
import { getUser } from '@/fetchs/global';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { MemberDTO } from './Type_DTO';

export const useAuth = () => {
    const [member,setMember]=useState<MemberDTO|null>(null)
    const [loading,setLoading]=useState(true)
    const router = useRouter();
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const data = await getUser();
                
                if (!data) {
                    router.push('/login?redirect=' + location.pathname);
                } else {
                    setMember(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("pas de user", error);
                router.replace('/login?redirect=' + location.pathname);
            } 
        };

        verifyUser();
    }, [router]);

    return { member, loading };
};
export const useConnexion=()=>{
    const [member,setMember]=useState<MemberDTO|null>(null)
    const [loading,setLoading]=useState(true)
    const router = useRouter();
    /*useEffect(() => {
        const source = new EventSource(process.env.NEXT_PUBLIC_API_BASE+"/api/stream");

        source.addEventListener("connexion", (e) => {
            const data = JSON.parse(e.data) as MemberDTO;
            if (data) setMember(data);
        });

        return () => {
            source.close(); 
        };
    }, []);*/
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const data = await getUser();
                
                if (!data) {
                    setMember(null);
                    setLoading(false)
                } else {
                    setMember(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("pas de user", error);
            } 
        };

        verifyUser();
    }, [router]);

    return { member, loading };   
}