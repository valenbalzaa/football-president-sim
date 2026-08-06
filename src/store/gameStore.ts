import type { Player } from "../types/player";
import type { GameEvent } from "../types/event";
import type { Club } from "../data/clubs";
import type { Match } from "../types/match";
import type { TableTeam } from "../engine/tableEngine";


export type GameState = {

  table: TableTeam[];
  recentResults: (
 "V" | "E" | "D"
  )[];
  // CLUB

  mode: string;

  club: string;

  stadium: string;

  rival: string;

  customClub: boolean;



  // CAMISETA

  kitId:number;

  primaryColor:string;

  secondaryColor:string;



  // TEMPORADA

  season:number;

  division:string;

  divisionLevel:number;

  leagueTeams:Club[];

  schedule:Match[];

  matchday:number;



// ECONOMIA

  money:number;

  income:number;

  expenses:number;


  // ESTADIO

  ticketPrice:number;

  attendance:number;

  matchIncome:number;

  matchExpenses:number;



  // COMPETICION

  points:number;

  position:number;

  wins:number;

  draws:number;

  losses:number;



  // ESTADO CLUB

  reputation:number;

  fans:number;

  morale:number;



  // PLANTEL

  squad:Player[];



  // EVENTOS

  news:string[];

  activeEvent:GameEvent | null;


    // CAMBIOS DEL ULTIMO PARTIDO

  matchChanges:{
    fans:number;
    morale:number;
    money:number;
    reputation:number;
    attendance:number;
    income:number;
    expenses:number;
  } | null;
  // ULTIMO PARTIDO

  lastMatch:{

    home:string;

    away:string;

    homeGoals:number;

    awayGoals:number;

    result:string;

  } | null;


};





export const initialGameState:GameState = {
  table: [] as TableTeam[],
  recentResults: [],
  matchChanges:null,
  mode:"",

  club:"",

  stadium:"",

  rival:"",

  customClub:false,



  kitId:1,

  primaryColor:"#2563EB",

  secondaryColor:"#FFFFFF",



  season:2026,

  division:"Primera Divisional C",

  divisionLevel:3,


  leagueTeams:[],


  schedule:[],


  matchday:1,



// ECONOMÍA

  money:500000,

  income:0,

  expenses:0,


  // ESTADIO

  ticketPrice:150,

  attendance:0,

  matchIncome:0,

  matchExpenses:0,



  points:0,

  position:16,

  wins:0,

  draws:0,

  losses:0,



  reputation:10,

  fans:300,

  morale:70,



  squad:[],



  news:[],


  activeEvent:null,


  lastMatch:null


};