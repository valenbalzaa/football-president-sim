import type { Club } from "../data/clubs";


export type MatchResult = {

  homeGoals: number;

  awayGoals: number;

  winner: string | null;

  pointsHome: number;

  pointsAway: number;

};





function random(min:number,max:number){

  return Math.floor(
    Math.random() *
    (max - min + 1)
  ) + min;

}






export function simulateMatch(

  home: Club,

  away: Club

): MatchResult {



  const homePower =
    home.strength +
    random(-10,10);


  const awayPower =
    away.strength +
    random(-10,10);



  let homeGoals =
    Math.max(
      0,
      Math.floor(
        homePower / 25
      )
    );


  let awayGoals =
    Math.max(
      0,
      Math.floor(
        awayPower / 25
      )
    );



  // factor sorpresa

  if(
    Math.random() < 0.25
  ){

    homeGoals += random(0,2);

  }



  if(
    Math.random() < 0.25
  ){

    awayGoals += random(0,2);

  }





  let pointsHome = 0;

  let pointsAway = 0;


  let winner:string|null=null;



  if(homeGoals > awayGoals){

    pointsHome = 3;

    winner = home.name;

  }


  else if(awayGoals > homeGoals){

    pointsAway = 3;

    winner = away.name;

  }


  else{

    pointsHome = 1;

    pointsAway = 1;

  }





  return {


    homeGoals,

    awayGoals,

    winner,

    pointsHome,

    pointsAway


  };


}