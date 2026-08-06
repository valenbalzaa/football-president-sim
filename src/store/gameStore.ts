export type GameState = {

  mode: string;

  club: string;

  stadium: string;

  rival: string;

  money: number;

  season: number;

  customClub: boolean;

  kitId: number;

  primaryColor: string;

  secondaryColor: string;

};



export const initialGameState: GameState = {

  mode: "",

  club: "",

  stadium: "",

  rival: "",

  money: 0,

  season: 2026,

  customClub: false,

  kitId: 1,

  primaryColor: "#2563EB",

  secondaryColor: "#FFFFFF"

};