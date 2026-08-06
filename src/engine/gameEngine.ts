import type { GameState } from "../store/gameStore";
import type { Club } from "../data/clubs";

import {
  clubs
} from "../data/clubs";


import {
  simulateMatch
} from "./matchEngine";





export function playMatch(

  game: GameState,

  opponentName: string

): GameState {



  // Buscar rival real

  const opponent = clubs.find(

    club =>
      club.name === opponentName

  );



  if(!opponent){

    console.error(
      "No se encontró rival:",
      opponentName
    );

    return game;

  }





  // Crear nuestro club

  const userClub: Club = {


    id:999,


    name:game.club,


    shortName:
      game.club
      .substring(0,3)
      .toUpperCase(),


    division:
      game.division,


    city:"Montevideo",


    stadium:
      game.stadium,


    reputation:
      game.reputation,


    strength:
      calculateTeamStrength(game),


    budget:
      game.money


  };







  // Simular partido

  const result = simulateMatch(

    userClub,

    opponent

  );








  // Actualizar calendario

  const updatedSchedule =

    game.schedule.map(match => {


      if(

        match.matchday === game.matchday &&

        (

          match.home === game.club ||

          match.away === game.club

        )

      ){

        return {

          ...match,

          played:true

        };

      }


      return match;


    });









  const updatedGame: GameState = {


    ...game,



    schedule:
      updatedSchedule,



    matchday:
      game.matchday + 1,



    points:
      game.points +
      result.pointsHome,



    wins:
      game.wins +
      (
        result.pointsHome === 3
        ? 1
        : 0
      ),



    draws:
      game.draws +
      (
        result.pointsHome === 1
        ? 1
        : 0
      ),



    losses:
      game.losses +
      (
        result.pointsAway === 3
        ? 1
        : 0
      ),






    money:

      game.money +

      15000,






    news:[

      ...game.news,


      `${game.club} ${result.homeGoals}-${result.awayGoals} ${opponent.name}`

    ]


  };




  return updatedGame;


}









function calculateTeamStrength(

  game:GameState

){


  if(game.squad.length === 0){

    return 50;

  }



  const total =

    game.squad.reduce(

      (sum,player)=>

        sum + player.overall,


      0

    );



  return Math.floor(

    total /

    game.squad.length

  );


}