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
  email            :string ;          
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
  Member       :MemberDTO  
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
  name          :string;    
  spots         :number;
  group_spot    :number;
  value         :Float16Array
  id_tour       :number;
  id_type       :number |null;
  id_admin      :number;
  Tournament   ?:TournamentDTO;     
  Type         ?:TypeDTO | null ;         
  Prize_sponsor?:Prize_sponsorDTO[]
}
/**
 * Objet représentant les commanditaires et leurs commandites (sponsoring de prix)
 */
export type Prize_sponsorDTO ={
  /** Identifiant unique de la relation prix-sponsor */
  id_prize_sponsor :number ;
  /** Identifiant du prix commandité */
  id_prize         :number;
  /** Nom d'utilisateur du sponsor (peut être null) */
  user_name        :string | null;
  /** Informations détaillées du prix commandité */
  Prize           ?:PrizeDTO  ;
  /** Informations du sponsor */
  Sponsor         ?:SponsorDTO
}

/**
 * Objet représentant les commanditaires (sponsors) de l'application
 */
export type SponsorDTO ={
  /** Nom d'utilisateur unique du sponsor */
  user_name     :string  ;
  /** Nom de l'entreprise du sponsor */
  company_name  :string;
  /** Titre/fonction du contact dans l'entreprise */
  title         :string | null  ;
  /** Liste des prix commandités par ce sponsor */
  Prize_sponsor?:Prize_sponsorDTO[];
  /** Informations du membre associé à ce sponsor */
  Member        :MemberDTO
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
  status         : number ;
  avatar         : string | null;
  fees           : number | null;
//  id_admin       : number | null;
  id_community   : number ;
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
export type Position = {
  coords: {
    latitude: number,
    longitude: number,
    altitude: number | null,
    accuracy: number,
    altitudeAccuracy: number | null,
    heading: number | null,
    speed: number | null
  },
  timestamp: number
}
export type Location = {
    name: string | 'nom inconnu';
    members?: number | 0;
    lat: number;
    lon: number;
    link:string;
    type:string;
    city?:string,
    country?:string,
    displayName?:string,
    address?: {
      street: string,
      houseNumber: string,
      city:string,
      postcode: string,
      country: string,
      countryCode: string
    }
}
export type geoCodeData =   {
    lat: number,
    lon: number,
    displayName: string,
    type: string,
    country: string,
    city: string
  }
export type geocodeReverse={
    lat: number,
    lon: number,
    displayName:string,
    address: {
      street: string,
      houseNumber: string,
      city:string,
      postcode: string,
      country: string,
      countryCode: string
    }
}