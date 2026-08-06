export type Kit = {
  id: number;
  name: string;
  image: string;
};


export const kits: Kit[] = [

  {
    id: 1,
    name: "Clásica",
    image: "/src/assets/kits/classic.svg"
  },

  {
    id: 2,
    name: "Rayas verticales",
    image: "/src/assets/kits/stripes.svg"
  },

  {
    id: 3,
    name: "Banda diagonal",
    image: "/src/assets/kits/diagonal.svg"
  },

  {
    id: 4,
    name: "Mitad y mitad",
    image: "/src/assets/kits/half.svg"
  },

  {
    id: 5,
    name: "Retro horizontal",
    image: "/src/assets/kits/horizontal.svg"
  },

  {
    id: 6,
    name: "Moderna",
    image: "/src/assets/kits/modern.svg"
  }

];