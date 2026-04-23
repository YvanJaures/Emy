"use client"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import CreateTeamForm from "./CreateTeamForm"

export function CreateTeamContent() {
  const searchParams = useSearchParams()

  const editMode = useMemo(
    () => searchParams.get("edit") === "1",
    [searchParams]
  )

  const id_team = useMemo(
    () => Number(searchParams.get("id_team")),
    [searchParams]
  )

  return (
    <CreateTeamForm
      teamUrl={process.env.NEXT_PUBLIC_API_BASE+"/api/member/teams"}
      tournamentsUrl={process.env.NEXT_PUBLIC_API_BASE+"/api/tournaments"}
      editMode={editMode}
      id_team={id_team}
      detailsUrl={process.env.NEXT_PUBLIC_API_BASE+"/api/member/team/details"}
      updateUrl={process.env.NEXT_PUBLIC_API_BASE+"/api/member/team/update"}
    />
  )
}