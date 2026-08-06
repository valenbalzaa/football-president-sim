export type EventOption = {
  text: string;

  effects: {
    money?: number;
    morale?: number;
    reputation?: number;
    fans?: number;
  };
};

export type GameEvent = {
  id: string;

  category:
    | "economy"
    | "transfer"
    | "lockerRoom"
    | "fans"
    | "board"
    | "sponsor"
    | "youth";

  title: string;

  description: string;

  options: EventOption[];
};

export const events: GameEvent[] = [
  {
    id: "sponsor1",

    category: "sponsor",

    title: "Nuevo patrocinador",

    description: "Una empresa local quiere patrocinar al club.",

    options: [
      {
        text: "Aceptar",

        effects: {
          money: 60000,
          reputation: -2,
        },
      },

      {
        text: "Rechazar",

        effects: {
          reputation: 4,
        },
      },
    ],
  },

  {
    id: "locker1",

    category: "lockerRoom",

    title: "Jugador molesto",

    description: "Un suplente reclama más minutos.",

    options: [
      {
        text: "Prometer minutos",

        effects: {
          morale: 5,
        },
      },

      {
        text: "Ignorarlo",

        effects: {
          morale: -6,
        },
      },
    ],
  },

  {
    id: "fans1",

    category: "fans",

    title: "Los hinchas felicitan al equipo",

    description:
      "La afición respondió muy bien después de la última victoria.",

    options: [
      {
        text: "Agradecer",

        effects: {
          fans: 80,
          reputation: 2,
        },
      },
    ],
  },
];