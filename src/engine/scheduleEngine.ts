import type { Club } from "../data/clubs";


export type Match = {

  id: number;

  home: string;

  away: string;

  played: boolean;

};



export function generateSchedule(

  teams: Club[]

): Match[] {


  const matches: Match[] = [];

  let id = 1;


  for (
    let round = 0;
    round < teams.length - 1;
    round++
  ) {


    for (
      let i = 0;
      i < teams.length / 2;
      i++
    ) {


      const home =
        teams[i];


      const away =
        teams[
          teams.length - 1 - i
        ];



      matches.push({

        id,

        home: home.name,

        away: away.name,

        played: false

      });


      id++;

    }



    // rotación de equipos

    teams = [

      teams[0],

      ...teams.slice(2),

      teams[1]

    ];

  }


  return matches;

}