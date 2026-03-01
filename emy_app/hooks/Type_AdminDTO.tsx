export type AdminDTO = {
  id_admin: number;
  user_name: string | null;
  id_community: number;


  Member?: {
     user_name: string;
    name: string | null;
    surname: string | null;
    email: string | null;
  } | null;

  Community?: {
    id_community: number;
    name?: string | null; 
  } | null;

  Tournament?: {
    id_tour: number;
    location: string | null;
  }[];
};