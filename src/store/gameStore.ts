export type GameState = {

  mode: string;

  club: string;

  stadium: string;

  rival: string;

  season: number;

  money: number;

  customClub: boolean;

};



export const initialGameState: GameState = {

  mode: "",

  club: "",

  stadium: "",

  rival: "",

  season: 2026,

  money: 0,

  customClub: false,

};