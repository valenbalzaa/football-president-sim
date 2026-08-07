import players from "../database/players.json";

import type { Player } from "../types/player";
import { playerDatabase } from "./playerDatabase";





function convertRating(

  rating:number

){

  return Math.max(

    40,

    Math.floor(

      rating * 0.80

    )

  );

}








export function generateInitialSquad(

  division:string

):Player[]{



  let available =

    [...playerDatabase];







  // jugadores acordes a tercera

  if(

    division === "Primera Divisional C"

  ){


    available =

      available.filter(

        p =>

        p.overall >= 55 &&

        p.overall <= 72

      );


  }








  else if(

    division === "Segunda Division"

  ){


    available =

      available.filter(

        p =>

        p.overall >= 60 &&

        p.overall <= 78

      );


  }









  // mezclar jugadores


  available.sort(

    ()=>Math.random()-0.5

  );








  const squad =

    available

    .slice(0,22)

    .map(

      (player)=>({


        id:

          player.id,



        name:

          player.name,



        club:

          player.club,



        league:

          player.league,



        position:

          player.position,



        age:

          player.age,



        height:

          player.height,



        foot:

          player.foot,



        overall:

          convertRating(

            player.overall

          ),



        potential:

          convertRating(

            player.overall

          ) + Math.floor(Math.random()*10),



        value:

          player.value / 40,



        salary:

          Math.floor(

            player.salary / 40

          ),



        morale:

          75,



        fitness:

          100,



        contract:

          1



      })

    );








return squad;



}