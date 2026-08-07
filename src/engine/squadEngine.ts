import players from "../database/players_clean.json";


export function getClubSquad(club: string) {
  return players.filter(
    player => player.club === club
  );
}



export function getStartingXI(club: string) {

  const squad = getClubSquad(club);


  // ordenamos por overall
  const sorted = [...squad].sort(
    (a,b) => b.overall - a.overall
  );


  return sorted.slice(0,11);

}



export function getBench(club:string){

  const squad = getClubSquad(club);


  const sorted = [...squad].sort(
    (a,b)=>b.overall-a.overall
  );


  return sorted.slice(11,18);

}