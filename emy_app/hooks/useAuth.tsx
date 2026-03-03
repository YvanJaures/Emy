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
                    router.push('/login');
                } else {
                    setMember(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("pas de user", error);
                router.replace('/login');
            } 
        };

        verifyUser();
    }, [router]);

    return { member, loading };
};