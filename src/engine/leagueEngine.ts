import type { Club } from "../data/clubs";
import type { Match } from "../store/gameStore";



export function generateLeagueSchedule(

  teams: Club[]

): Match[] {


  const matches: Match[] = [];


  let id = 1;


  let matchday = 1;



  const totalTeams = teams.length;



  const rounds = totalTeams - 1;



  const matchesPerRound = totalTeams / 2;



  let rotation = [...teams];





  // ======================
  // PRIMERA RUEDA
  // ======================


  for(let round = 0; round < rounds; round++){



    for(
      let i = 0;
      i < matchesPerRound;
      i++
    ){


      const home = rotation[i];

      const away =
        rotation[
          totalTeams - 1 - i
        ];



      matches.push({

        id:id++,

        matchday,

        home:home.name,

        away:away.name,

        played:false

      });


    }



    rotation.splice(

      1,

      0,

      rotation.pop()!

    );



    matchday++;


  }






  // ======================
  // SEGUNDA RUEDA
  // ======================


  const firstRound = [...matches];



  firstRound.forEach(match => {


    matches.push({

      id:id++,

      matchday,

      home:match.away,

      away:match.home,

      played:false

    });



    matchday++;


  });





  return matches;


}