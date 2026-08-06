export type Player = {
  id: number;

  name: string;

  age: number;

  position:
    | "POR"
    | "DEF"
    | "MED"
    | "DEL";

  overall: number;

  potential: number;

  salary: number;

  morale: number;

  status:
    | "happy"
    | "normal"
    | "angry"
    | "injured";
};

