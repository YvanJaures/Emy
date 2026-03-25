// types/teams.ts
export type MemberMiniDTO = {
  user_name: string;
  avatar?: string | null;
  name?: string | null;
  surname?: string | null;
};

export type TeamMiniDTO = {
  id_team: number;
  name?: string | null;
  id_tour?: number | null;
  open?: boolean | null;      
  key_team?: string | null;   
  members?: number | null;
  
  Tournament?: {              
    name?: string | null;
  } | null;

  Team_member?: { 
  status?: boolean | null; //pour TeamCardProfil ---> garder la structure de prisma
  Member?: MemberMiniDTO | null }[]; // pour avatar
};

export type TournamentTeamsDTO = {
  id_tour: number;
  location?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  avatar?: string | null;
  Team: TeamMiniDTO[];
};