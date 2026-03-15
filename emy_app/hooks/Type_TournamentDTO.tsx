// types/tournament.ts
export type TournamentDTO = {
  id_tour: number;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  status: number;
  avatar: string | null;
  fees: number | null;
  id_admin: number | null;
  id_community: number | null;
};