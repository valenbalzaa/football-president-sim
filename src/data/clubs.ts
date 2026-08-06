export type Club = {
  id: number;

  name: string;
  shortName: string;

  division: string;

  city: string;
  stadium: string;

  reputation: number;

  strength: number;

  budget: number;

  fans: number;

  youthLevel: number;

  facilities: number;

  finances: number;

  objective:
    | "Ascender"
    | "Playoffs"
    | "Media tabla"
    | "Salvarse";
};



export const clubs: Club[] = [

  {
    id: 1,
    name: "Bella Vista",
    shortName: "BV",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque José Nasazzi",
    reputation: 40,
    strength: 66,
    budget: 350000,
    fans: 9000,
    youthLevel: 70,
    facilities: 68,
    finances: 70,
    objective: "Ascender"
  },

  {
    id: 2,
    name: "Basáñez",
    shortName: "BAS",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Palermo",
    reputation: 30,
    strength: 60,
    budget: 200000,
    fans: 4500,
    youthLevel: 58,
    facilities: 55,
    finances: 55,
    objective: "Playoffs"
  },

  {
    id: 3,
    name: "Huracán Buceo",
    shortName: "HBU",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Huracán",
    reputation: 34,
    strength: 63,
    budget: 240000,
    fans: 5200,
    youthLevel: 63,
    facilities: 60,
    finances: 60,
    objective: "Playoffs"
  },

  {
    id: 4,
    name: "Potencia",
    shortName: "POT",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Potencia",
    reputation: 24,
    strength: 57,
    budget: 170000,
    fans: 2600,
    youthLevel: 52,
    facilities: 50,
    finances: 48,
    objective: "Media tabla"
  },

  {
    id: 5,
    name: "Deportivo Italiano",
    shortName: "DIT",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Complejo Deportivo Italiano",
    reputation: 24,
    strength: 56,
    budget: 170000,
    fans: 2400,
    youthLevel: 55,
    facilities: 52,
    finances: 50,
    objective: "Media tabla"
  },

  {
    id: 6,
    name: "Platense",
    shortName: "PLA",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Platense",
    reputation: 26,
    strength: 58,
    budget: 180000,
    fans: 3000,
    youthLevel: 57,
    facilities: 55,
    finances: 55,
    objective: "Media tabla"
  },

  {
    id: 7,
    name: "Salus",
    shortName: "SAL",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Salus",
    reputation: 20,
    strength: 54,
    budget: 140000,
    fans: 1800,
    youthLevel: 48,
    facilities: 46,
    finances: 45,
    objective: "Salvarse"
  },

  {
    id: 8,
    name: "Villa Teresa",
    shortName: "VTE",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Estadio José Nasazzi",
    reputation: 32,
    strength: 62,
    budget: 230000,
    fans: 6000,
    youthLevel: 62,
    facilities: 60,
    finances: 60,
    objective: "Playoffs"
  },

  {
    id: 9,
    name: "Villa Española",
    shortName: "VES",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Estadio Obdulio Varela",
    reputation: 42,
    strength: 67,
    budget: 320000,
    fans: 10000,
    youthLevel: 72,
    facilities: 70,
    finances: 72,
    objective: "Ascender"
  },

  {
    id: 10,
    name: "Canadian",
    shortName: "CAN",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Palermo",
    reputation: 20,
    strength: 54,
    budget: 130000,
    fans: 1700,
    youthLevel: 47,
    facilities: 45,
    finances: 42,
    objective: "Salvarse"
  },

  {
    id: 11,
    name: "Cooper",
    shortName: "COP",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Cooper",
    reputation: 18,
    strength: 52,
    budget: 120000,
    fans: 1500,
    youthLevel: 45,
    facilities: 44,
    finances: 40,
    objective: "Salvarse"
  },

  {
    id: 12,
    name: "Lito",
    shortName: "LIT",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Lito",
    reputation: 18,
    strength: 52,
    budget: 120000,
    fans: 1400,
    youthLevel: 46,
    facilities: 45,
    finances: 42,
    objective: "Salvarse"
  },

  {
    id: 13,
    name: "Mar de Fondo",
    shortName: "MDF",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Mar de Fondo",
    reputation: 21,
    strength: 55,
    budget: 145000,
    fans: 2000,
    youthLevel: 50,
    facilities: 48,
    finances: 45,
    objective: "Media tabla"
  },

  {
    id: 14,
    name: "Alto Perú",
    shortName: "ALP",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Alto Perú",
    reputation: 17,
    strength: 50,
    budget: 100000,
    fans: 1200,
    youthLevel: 42,
    facilities: 40,
    finances: 38,
    objective: "Salvarse"
  },

  {
    id: 15,
    name: "Terremoto",
    shortName: "TER",
    division: "Primera Divisional C",
    city: "Montevideo",
    stadium: "Parque Terremoto",
    reputation: 15,
    strength: 48,
    budget: 90000,
    fans: 900,
    youthLevel: 40,
    facilities: 38,
    finances: 35,
    objective: "Salvarse"
  }

];