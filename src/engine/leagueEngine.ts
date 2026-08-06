import type { Club } from "../data/clubs";
import type { Match } from "../types/match";





export function generateLeagueSchedule(

  teams:Club[]

):Match[]{



  const matches:Match[]=[];


  let id=1;

  let matchday=1;




  const list=[...teams];




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






  const total=list.length;


  const rounds=total-1;


  const gamesPerRound=total/2;





  for(

    let round=0;

    round<rounds;

    round++

  ){



    for(

      let i=0;

      i<gamesPerRound;

      i++

    ){



      const home=list[i];


      const away=list[total-1-i];





      if(

        home.name !== "DESCANSA"

        &&

        away.name !== "DESCANSA"

      ){



        matches.push({


          id:id++,


          matchday,


          home:home.name,


          away:away.name,


          played:false



        });



      }



    }





    const fixed=list[0];


    const rotating=list.slice(1);



    rotating.unshift(

      rotating.pop()!

    );



    list.splice(

      0,

      list.length,

      fixed,

      ...rotating

    );




    matchday++;




  }







  return matches;



}