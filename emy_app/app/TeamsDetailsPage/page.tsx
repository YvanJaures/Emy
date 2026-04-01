"use client";

import TeamsDetails from "@/components/organisms/TeamsDetails";
import { useAuth } from "@/hooks/useAuth";
import LoadingAnimation from "@/components/organisms/LoadingAnimation";

export default function CreateTeamPage() {
  const { member, loading } = useAuth();
  if (loading) return <LoadingAnimation />;

  return <div>{member?.Admin?.id_community && <TeamsDetails />}</div>;
}
