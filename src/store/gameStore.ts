export type GameState = {
  mode: string;
  club: string;
  season: number;
  money: number;
};


export const initialGameState: GameState = {
  mode: "",
  club: "",
  season: 2026,
  money: 0,
};