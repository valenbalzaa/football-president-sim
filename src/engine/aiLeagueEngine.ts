import type { Match } from "../types/match";
import type { TableTeam } from "./tableEngine";

import {
  simulateMatch
} from "./matchEngine";

import {
  clubs
} from "../data/clubs";

import {
  updateTableAfterMatch
} from "./tableEngine";





export function simulateOtherMatches(

  schedule:Match[],

  matchday:number,

  table:TableTeam[],

  userClub:string

){


let updatedTable = [...table];





const matches = schedule.filter(

match =>

match.matchday === matchday &&

!match.played

);





matches.forEach(match=>{


if(

match.home === userClub ||

match.away === userClub

)

return;





const homeClub = clubs.find(

c=>c.name===match.home

);



const awayClub = clubs.find(

c=>c.name===match.away

);






if(!homeClub || !awayClub)

return;





const result = simulateMatch(

homeClub,

awayClub

);





updatedTable = updateTableAfterMatch(

updatedTable,

match.home,

match.away,

result.homeGoals,

result.awayGoals

);



});





return updatedTable;


}