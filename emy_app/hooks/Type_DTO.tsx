// types de données

/**
 * object représentant les administrateurs de communautés
 */
export type AdminDTO = {
  id_admin: number;
  user_name: string | null;
  id_community: number;
  Tournament?:TournamentDTO[];
  Member:MemberDTO;
  Community?: CommunityDTO ;
};
/**
 * object représentant les membres ou utilisateurs de l'application
 */
export type MemberDTO={
  user_name        :string;            
  name             :string | null |null;            
  surname          :string | null |null;            
  address          :string | null |null;            
  birth_date       :Date | null;          
  country          :string | null |null;          
  email            :string | null |null;          
  phone            :string | null |null;          
  avatar           :string | null |null;
  Admin            :AdminDTO | null;
  Community_member?:Community_memberDTO[]|null;
  Employee        ?:EmployeeDTO|null;
  Player          ?:PlayerDTO[]|null;
  Sponsor         ?:SponsorDTO | null;
  Team            ?:TeamDTO[] | null;
  Team_member     ?:Team_memberDTO[] |null
}
/**
 * object représentant les communautés
 */
export type CommunityDTO ={
  id_community     :number;
  name             :string;
  details          :string | null;
  avatar           :string | null            ;
  members          :number |null;
  location         :string | null            ;
  id_manager       :number;
  created          :Date;
  privacy          :boolean;
  Admin            :AdminDTO[] ;
  Manager          :ManagerDTO ;
  Community_member?:Community_memberDTO[] |null;
  Tournament      ?:TournamentDTO[] |null
}
/**
 * object représentant les membres d'une communauté
 */
export type Community_memberDTO ={
  avatar: string|null;
  id_co_member :number   ; 
  join_Date    :Date ; 
  id_community :number;
  user_name    :string;
  Community   ?:CommunityDTO |null;
  Member      ?:MemberDTO |null   
}
/**
 * object représentant les employès reliés a une communauté
 */
export type EmployeeDTO ={
  user_name :string| null;
  retraite  :boolean;
  Member   ?:MemberDTO 
}
/**
 * object représentant les managers du site de l'application
 */
export type ManagerDTO ={
  id_manager :number     ;  
  password   :string | null;
  Community ?:CommunityDTO[];
}
/**
 * object représentant les joueurs partici^pant a un tournoi
 */
export type PlayerDTO ={
  id_player  :number; 
  id_tour    :number;
  user_name  :string | null; 
  Member    ?:MemberDTO;   
  Tournament?:TournamentDTO 
}
/**
 * object représentant les commandites d'un tournoi
 */
export type PrizeDTO ={
  id_prize      :number;          
  name          :string | null ;    
  spots         :number;
  group_spot    :number;
  id_tour       :number;
  id_type       :number |null;
  id_admin      :number;
  Tournament   ?:TournamentDTO;     
  Type         ?:TypeDTO | null ;         
  Prize_sponsor?:Prize_sponsorDTO[]
}
/**
 * object représentant les commanditaires et leurs commandites
 */
export type Prize_sponsorDTO ={
  id_prize_sponsor :number ;    
  id_prize         :number;
  user_name        :string | null;
  Prize           ?:PrizeDTO  ;
  Sponsor         ?:SponsorDTO 
}
/**
 * object représentant les commanditaires
 */
export type SponsorDTO ={
  user_name     :string | null  ; 
  company_name  :string | null  ; 
  title         :string | null  ; 
  Prize_sponsor?:Prize_sponsorDTO[];
  Member       ?:MemberDTO          
}
/**
 * object représentant les équipes participant à un tournoi
 */
export type TeamDTO ={
  id_team     :number;          
  name        :string | null;    
  members     :number;
  players     :number;
  id_tour     :number;
  key_team    :string | null ;
  open        :boolean;     
  user_name   :string | null ;
  Tournament ?:TournamentDTO  
  Member     ?:MemberDTO;    
  Team_member?:Team_memberDTO[]
}
/**
 * object représentant les membres d'un équipe particiânt à un tounoi
 */
export type Team_memberDTO ={
  id_team_member :number ;   
  id_team        :number;
  user_name      :string | null;
  status         :boolean;
  Team          ?:TeamDTO   ;
  Member        ?:MemberDTO ;
}
/**
 * object représentant les tournois
 */
export type TournamentDTO = {
  id_tour        : number;
  name           :string;
  location       : string | null;
  start_date     : Date   ;
  end_date       : Date   ;
  status         : number | null;
  avatar         : string | null;
  fees           : number | null;
//  id_admin       : number | null;
  id_community   : number | null;
  members        :number ;
  Player        ?: PlayerDTO[];
  Prize         ?: PrizeDTO[];
  Team          ?: TeamDTO[];
//  Admin         ?: AdminDTO  ;  
  Community      : CommunityDTO;
}
/**
 * object représentant les types de commandites
 */
export type TypeDTO ={
  id_type :number ;   
  name    :string | null;
  Prize  ?:PrizeDTO[]
}

/**
 * object représentant les utilisateurs qui cree un compte
 */
export type SignupFormData = {
  user_name: string;
  name: string;
  surname: string;
  address: string;
  email: string;
  birth_date: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  phone: string;
};