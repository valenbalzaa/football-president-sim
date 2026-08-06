import type { GameState } from "../store/gameStore";
import type { Club } from "../data/clubs";
import {
 updateTableAfterMatch
} from "./tableEngine";

import {
  clubs
} from "../data/clubs";


import {
  simulateMatch
} from "./matchEngine";


import {
  getRandomEvent
} from "./eventEngine";


import {
  calculateMatchEconomy
} from "./economyEngine";

import {
simulateOtherMatches
} from "./aiLeagueEngine";






export function playMatch(

  game: GameState,

  opponentName: string

): GameState {



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

      "Salvarse"


  };









  const result = simulateMatch(

    userClub,

    opponent

  );









  const currentMatch = game.schedule.find(

    match =>

      !match.played &&

      (
        match.home === game.club ||
        match.away === game.club
      )

  );



  const isHome =

    currentMatch?.home === game.club;









  const economy = calculateMatchEconomy(

    game,

    opponent,

    isHome

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









  // ==========================
  // CAMBIOS DEL CLUB
  // ==========================


  let membersChange = 0;

  let moraleChange = 0;

  let reputationChange = 0;

  let matchResult = "";

  let resultLetter:
    "V" | "E" | "D";









  if(result.pointsHome === 3){



    membersChange = 5;

    moraleChange = 5;

    reputationChange = 1;

    matchResult = "Victoria";

    resultLetter = "V";


  }






  else if(result.pointsHome === 1){



    membersChange = 1;

    moraleChange = 1;

    reputationChange = 0;

    matchResult = "Empate";

    resultLetter = "E";


  }






  else{



    membersChange = -1;

    moraleChange = -5;

    reputationChange = -1;

    matchResult = "Derrota";

    resultLetter = "D";


  }









  const updatedRecentResults = [


    ...(game.recentResults ?? []),


    resultLetter


  ].slice(-5);









  const randomEvent = getRandomEvent();

  const updatedTable = updateTableAfterMatch(

  game.table,

  isHome
  ? game.club
  : opponent.name,

  isHome
  ? opponent.name
  : game.club,


  isHome
  ? result.homeGoals
  : result.awayGoals,


  isHome
  ? result.awayGoals
  : result.homeGoals

  );

  const finalTable = simulateOtherMatches(

    updatedSchedule,

    game.matchday,

    updatedTable,

    game.club

    );






  const updatedGame:GameState = {
    



    ...game,

    table: finalTable,





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

      Math.floor(economy.balance / 40),









    income:

      game.income +

      economy.income,









    expenses:

      game.expenses +

      economy.expenses,









    // SOCIOS

    fans:

      Math.max(

        0,

        game.fans +

        membersChange

      ),









    morale:

      Math.min(

        100,

        Math.max(

          0,

          game.morale +

          moraleChange

        )

      ),









    reputation:

      Math.max(

        1,

        game.reputation +

        reputationChange

      ),









    recentResults:

      updatedRecentResults,









    matchChanges:{


      fans:

        membersChange,



      morale:

        moraleChange,



      money:

        economy.balance,



      reputation:

        reputationChange,



      attendance:

        economy.attendance,



      income:

        economy.income,



      expenses:

        economy.expenses


    },









    lastMatch:{


    home:

      isHome

      ? userClub.name

      : opponent.name,



    away:

      isHome

      ? opponent.name

      : userClub.name,



    homeGoals:

      isHome

      ? result.homeGoals

      : result.awayGoals,



    awayGoals:

      isHome

      ? result.awayGoals

      : result.homeGoals,



    result:

      matchResult


  },









    news:[



      ...game.news,



      `${userClub.name} ${result.homeGoals}-${result.awayGoals} ${opponent.name}`,



      `🏟 Asistencia: ${economy.attendance} personas`,


      `👥 Socios: ${
        membersChange >= 0
        ? "+"
        : ""
      }${membersChange}`,


      `💰 Balance partido: ${
        economy.balance >= 0
        ? "+"
        : ""
      }$${economy.balance}`,



      `📊 Racha últimos partidos: ${updatedRecentResults.join(" - ")}`



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