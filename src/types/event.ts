export type GameEvent = {

  id: string;

  title: string;

  description: string;

  options: {

    text: string;

    effects: {

      money?: number;

      morale?: number;

      reputation?: number;

      fans?: number;

    };

  }[];

};