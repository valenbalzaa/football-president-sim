import type { Club } from "../data/clubs";


export type TableTeam = {

  name:string;

  points:number;

  played:number;

  wins:number;

  draws:number;

  losses:number;

  goalsFor:number;

  goalsAgainst:number;

  goalDifference:number;

};





export function createLeagueTable(

  teams:Club[]

):TableTeam[]{


  return teams.map(team => ({


    name:team.name,


    points:0,


    played:0,


    wins:0,


    draws:0,


    losses:0,


    goalsFor:0,


    goalsAgainst:0,


    goalDifference:0


  }));



}








export function updateTableAfterMatch(


  table:TableTeam[],


  home:string,


  away:string,


  homeGoals:number,


  awayGoals:number


):TableTeam[]{





  const newTable = table.map(team=>({...team}));





  const homeTeam = newTable.find(

    t=>t.name===home

  );



  const awayTeam = newTable.find(

    t=>t.name===away

  );





  if(!homeTeam || !awayTeam)

    return newTable;









  homeTeam.played++;

  awayTeam.played++;





  homeTeam.goalsFor += homeGoals;

  homeTeam.goalsAgainst += awayGoals;



  awayTeam.goalsFor += awayGoals;

  awayTeam.goalsAgainst += homeGoals;





  homeTeam.goalDifference =

    homeTeam.goalsFor -

    homeTeam.goalsAgainst;



  awayTeam.goalDifference =

    awayTeam.goalsFor -

    awayTeam.goalsAgainst;









  if(homeGoals > awayGoals){


    homeTeam.points += 3;

    homeTeam.wins++;


    awayTeam.losses++;


  }



  else if(homeGoals < awayGoals){


    awayTeam.points += 3;

    awayTeam.wins++;


    homeTeam.losses++;


  }



  else{


    homeTeam.points++;

    awayTeam.points++;


    homeTeam.draws++;

    awayTeam.draws++;


  }







  return sortTable(newTable);



}








export function sortTable(

table:TableTeam[]

){


return table.sort((a,b)=>{


if(b.points !== a.points)

return b.points-a.points;



if(b.goalDifference !== a.goalDifference)

return b.goalDifference-a.goalDifference;



return b.goalsFor-a.goalsFor;



});


}