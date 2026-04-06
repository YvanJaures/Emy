"use client"
import { deconnexion, getUser } from "@/fetchs/global";
import { MemberDTO } from "@/hooks/Type_DTO";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType={
    member:MemberDTO|null;
    loading:boolean;
    login:(member:MemberDTO)=>void
    logout:()=>void
}
const AuthContext=createContext<AuthContextType|null>(null)
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [member, setMember] = useState<MemberDTO | null>(null)
  const [loading, setLoading] = useState(true)

  const login = (user: MemberDTO) => {
    setMember(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const logout = async () => {
    await deconnexion()
    setMember(null)
    localStorage.removeItem("user")
  }

  useEffect(() => {
    const cached = localStorage.getItem("user")

    if (cached) {
      setMember(JSON.parse(cached))
      setLoading(false)
    }

    const verifyUser = async () => {
      try {
        const data = await getUser()

        setMember(data)

        if (data) {
          localStorage.setItem("user", JSON.stringify(data))
        } else {
          localStorage.removeItem("user")
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    verifyUser()
  }, [])

  return (
    <AuthContext.Provider value={{ member, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  const context = useContext(AuthContext)
  const router = useRouter()

  if (!context) {
    throw new Error("useAuth must be inside provider")
  }

  useEffect(() => {
    if (!context.loading && !context.member) {
      router.replace('/login?redirect=' + window.location.pathname)
    }
  }, [context.loading, context.member, router])

  return context
}
export function useConnexion() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be inside provider")
  }

  return context
}