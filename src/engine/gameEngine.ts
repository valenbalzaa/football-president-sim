import type { GameState } from "../store/gameStore";
import type { Club } from "../data/clubs";
import { getRandomEvent } from "./eventEngine";

import {
  simulateMatch
} from "./matchEngine";





export function playMatch(

  game: GameState,

  opponent: Club

): GameState {



  const userClub: Club = {

    id: 999,

    name: game.club,

    shortName: game.club
      .substring(0,3)
      .toUpperCase(),

    division: game.division,

    city: "Montevideo",

    stadium: game.stadium,

    reputation: game.reputation,

    strength: calculateTeamStrength(game),

    budget: game.money

  };




  const result =
    simulateMatch(
      userClub,
      opponent
    );





  const updatedGame = {

    ...game,


    matchday:
      game.matchday + 1,


    points:
      game.points +
      result.pointsHome,


    wins:
      game.wins +
      (result.pointsHome === 3 ? 1 : 0),


    draws:
      game.draws +
      (result.pointsHome === 1 ? 1 : 0),


    losses:
      game.losses +
      (result.pointsAway === 3 ? 1 : 0),



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