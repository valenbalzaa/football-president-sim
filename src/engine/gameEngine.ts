import type { GameState } from "../store/gameStore";
import type { Club } from "../data/clubs";

import {
  clubs
} from "../data/clubs";


import {
  simulateMatch
} from "./matchEngine";


import {
  getRandomEvent
} from "./eventEngine";







export function playMatch(

  game:GameState,

  opponentName:string

):GameState {



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







  const userClub:Club = {


    id:999,


    name:game.club,


    shortName:

      game.club

      .substring(0,3)

      .toUpperCase(),



    division:
      game.division,


    city:
      "Montevideo",



    stadium:
      game.stadium,



    reputation:
      game.reputation,



    strength:
      calculateTeamStrength(game),



    budget:
      game.money,



    fans:
      game.fans,


    youthLevel:50,


    facilities:50,


    finances:50,


    objective:
      "Ascender"


  };








  const result = simulateMatch(

    userClub,

    opponent

  );






  const updatedSchedule =
    game.schedule.map(match => {

      if(
        match.matchday === game.matchday &&
        !match.played &&
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







  const randomEvent = getRandomEvent();







  const updatedGame:GameState = {


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

      game.money + 15000,







    lastMatch:{


      home:

        userClub.name,


      away:

        opponent.name,



      homeGoals:

        result.homeGoals,



      awayGoals:

        result.awayGoals,



      result:

        result.pointsHome === 3

        ? "Victoria"

        :

        result.pointsHome === 1

        ? "Empate"

        :

        "Derrota"



    },







    news:[


      ...game.news,



      `${userClub.name} ${result.homeGoals}-${result.awayGoals} ${opponent.name}`


    ],





    activeEvent:

      randomEvent



  };







  return updatedGame;



}









function calculateTeamStrength(

  game:GameState

):number {



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