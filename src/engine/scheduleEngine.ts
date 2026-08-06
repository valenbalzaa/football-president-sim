import type { Match } from "../types/match";


export function generateSchedule(
  teams:string[]
):Match[]{


const matches:Match[] = [];

let id = 1;


for(
let i=0;
i<teams.length;
i++
){

for(
let j=i+1;
j<teams.length;
j++
){


matches.push({

id:id++,

matchday:
Math.floor(
matches.length / 8
)+1,


home:teams[i],

away:teams[j],

played:false


});


}

}


return matches;


}