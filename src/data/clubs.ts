export type Club = {
  id: number;
  name: string;
  city: string;
  reputation: number;
  budget: number;
};


export const clubs: Club[] = [
  {
    id: 1,
    name: "Club Atlético Bella Vista",
    city: "Montevideo",
    reputation: 55,
    budget: 80000,
  },
  {
    id: 2,
    name: "Huracán Buceo",
    city: "Montevideo",
    reputation: 50,
    budget: 70000,
  },
  {
    id: 3,
    name: "Colón Fútbol Club",
    city: "Montevideo",
    reputation: 52,
    budget: 75000,
  },
  {
    id: 4,
    name: "Platense",
    city: "Montevideo",
    reputation: 45,
    budget: 60000,
  },
  {
    id: 5,
    name: "Basáñez",
    city: "Montevideo",
    reputation: 48,
    budget: 65000,
  },
];