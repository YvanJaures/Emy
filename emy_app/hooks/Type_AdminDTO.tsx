export type AdminDTO = {
  id_admin: number;
  user_name: string | null;

  Member?: {
    name: string | null;
    surname: string | null;
    email: string | null;
  } | null;

  Tournament?: {
    id_tour: number;
    location: string | null;
  }[];
};