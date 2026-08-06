import type { Player } from "../types/player";
import type { GameEvent } from "../types/event";
import type { Club } from "../data/clubs";
import type { Standing } from "../types/standing";

export type GameState = {
    


  // ======================
  // CLUB CREADO
  // ======================

  mode: string;

  club: string;

  stadium: string;

  rival: string;

  customClub: boolean;



  // ======================
  // CAMISETA
  // ======================

  kitId: number;

  primaryColor: string;

  secondaryColor: string;



  // ======================
  // TEMPORADA
  // ======================

  season: number;

  division: string;

  divisionLevel: number;

  leagueTeams:Club[];
  matchday: number;
  fixtures: Match[];
  standings: Standing[];


  // ======================
  // ECONOMÍA
  // ======================

  money: number;

  income: number;

  expenses: number;



  // ======================
  // COMPETICIÓN
  // ======================

  points: number;

  position: number;

  wins: number;

  draws: number;

  losses: number;



  // ======================
  // ESTADO DEL CLUB
  // ======================

  reputation: number;

  fans: number;

  morale: number;



  // ======================
  // PLANTEL
  // ======================

  squad: Player[];



  // ======================
  // EVENTOS
  // ======================

  news: string[];

  activeEvent: GameEvent | null;
    
};





export const initialGameState: GameState = {


  // ======================
  // CLUB
  // ======================

  mode: "",

  club: "",

  stadium: "",

  rival: "",

  customClub: false,

  standings: [],

  // ======================
  // CAMISETA
  // ======================

  kitId: 1,

  primaryColor: "#2563EB",

  secondaryColor: "#FFFFFF",



  // ======================
  // TEMPORADA
  // ======================

  season: 2026,

  division: "Primera Divisional C",

  divisionLevel: 3,

  leagueTeams: [],

  matchday: 1,



  // ======================
  // ECONOMÍA
  // ======================

  money: 500000,

  income: 0,

  expenses: 0,



  // ======================
  // COMPETICIÓN
  // ======================

  points: 0,

  position: 16,

  wins: 0,

  draws: 0,

  losses: 0,



  // ======================
  // ESTADO DEL CLUB
  // ======================

  reputation: 10,

  fans: 300,

  morale: 70,



  // ======================
  // PLANTEL
  // ======================

  squad: [],



  // ======================
  // EVENTOS
  // ======================

  news: [],

  activeEvent: null

};