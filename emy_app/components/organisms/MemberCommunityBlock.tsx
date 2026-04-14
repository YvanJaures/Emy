"use client";
import TableUser from "@/components/molecules/TableUser";
import Footer from "@/components/organisms/Footer";
import NavBarAdmin from "@/components/organisms/NavBarAdmin";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import { getCommunityMembers, getMembers } from "@/fetchs/global";
import { MemberDTO } from "@/hooks/Type_DTO";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import Confirmation from "@/components/organisms/Confirmation";

export default function MemberCommunity() {
  const [members, setMembers] = useState<MemberDTO[]|null>(null);
  const { member, loading } = useAuth();
    const [_loading,setLoading]=useState(true)
  const headers = [
    "Id",
    "Email",
    "Date naissance",
    "Telephone",
    "Employé?",
    "Adresse",
  ];
  useEffect(() => {
    if(!member) return
    (async () => {
      const id = member?.Admin ? member?.Admin?.id_community : -1;
      const members = await getCommunityMembers(id);
      setMembers(members);
      setLoading(false)
    })();
  }, [member]);
  if (loading) return <LoadingAnimation />;
  return (
    <div className="flex flex-col justify-between gap-5">
      <NavBarAdmin id_community={member?.Admin?.id_community ?? 0} />
      <main className="p-5 flex-80  max-sm:p-2">
        <TableUser
          title="Liste des membres"
          headers={headers}
          datas={members}
          loading={_loading}
          id_community={member?.Admin ? member?.Admin?.id_community : -1}
        />
      </main>
      <Footer />
    </div>
  );
}
