import type { Club } from "../data/clubs";
import type { Match } from "../types/match";





export function generateLeagueSchedule(

  teams: Club[]

): Match[] {



  const matches: Match[] = [];



  let id = 1;

  let matchday = 1;





  const createRound = (

    teams: Club[],

    reverse:boolean

  ) => {



    const list = [...teams];



    const total = list.length;


    const gamesPerRound = total / 2;





    for(

      let i = 0;

      i < gamesPerRound;

      i++

    ){



      let home = list[i];


      let away = list[total - 1 - i];







      if(

        home.name !== "DESCANSA"

        &&

        away.name !== "DESCANSA"

      ){



        if(reverse){


          const temp = home;


          home = away;


          away = temp;


        }







        matches.push({


          id:id++,


          matchday,


          home:home.name,


          away:away.name,


          played:false



        });




      }



    }





    matchday++;




  };









  const list = [...teams];







  // Si hay cantidad impar agregamos descanso

  if(list.length % 2 !== 0){


    list.push({

      id:999,

      name:"DESCANSA",

      shortName:"BYE",

      division:"Primera Divisional C",

      city:"",

      stadium:"",

      reputation:0,

      strength:0,

      budget:0,

      fans:0,

      youthLevel:0,

      facilities:0,

      finances:0,

      objective:"Salvarse"


    });



  }







  const total = list.length;


  const rounds = total - 1;






  let rotation = [...list];









  // =========================
  // PRIMERA RUEDA
  // =========================


  for(

    let round = 0;

    round < rounds;

    round++

  ){



    createRound(

      rotation,

      round % 2 === 1

    );







    const fixed = rotation[0];


    const rotating = rotation.slice(1);





    rotating.unshift(

      rotating.pop()!

    );





    rotation = [

      fixed,

      ...rotating

    ];



  }









  // =========================
  // SEGUNDA RUEDA
  // =========================


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