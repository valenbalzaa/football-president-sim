import { clubs } from "../data/clubs";
import type { Club } from "../data/clubs";



/**
 * Devuelve todos los clubes de una división
 */
export function getLeagueClubs(
  division: string
): Club[] {


  return clubs.filter(
    club => club.division === division
  );

}



/**
 * Devuelve solamente los nombres
 * de los equipos de una división
 */
export function getLeagueTeams(
  division: string
): string[] {


  return getLeagueClubs(division)
    .map(
      club => club.name
    );

}



/**
 * Agrega un club creado por el usuario
 * a la competición
 */
export function addCustomClubToLeague(

  customClubName: string,

  division: string

): Club[] {


  const customClub: Club = {

    id: 999,

    name: customClubName,

    shortName:
      customClubName
        .substring(0,3)
        .toUpperCase(),

    division,

    city: "Montevideo",

    stadium: "Estadio propio",

    reputation: 10,

    strength: 50,

    budget: 500000

  };



  return [

    ...getLeagueClubs(division),

    customClub

  ];

}