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
      teamUrl="/api/member/teams"
      tournamentsUrl="/api/tournaments"
      editMode={editMode}
      id_team={id_team}
      detailsUrl="/api/member/team/details"
      updateUrl="/api/member/team/update"
    />
  )
}