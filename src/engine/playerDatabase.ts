import players from "../database/players_clean.json";
import type { Player } from "../types/player";
import { generatePlayer } from "./playerGenerator";


const MIN_SQUAD_SIZE = 22;


// Base global de jugadores
export let playerDatabase: Player[] = [];




// Inicializar base de jugadores
export function initializePlayerDatabase(
  clubs: string[],
  division: string
) {


  // Cargamos jugadores reales
  playerDatabase = [
    ...players
  ];



  let nextId =
    Math.max(
      ...playerDatabase.map(
        player => player.id
      )
    ) + 1;





  clubs.forEach(club => {



    const clubPlayers =
      playerDatabase.filter(
        player =>
          player.club === club
      );



    const missing =
      MIN_SQUAD_SIZE -
      clubPlayers.length;





    if(missing > 0){



      for(let i = 0; i < missing; i++){



        const newPlayer =
          generatePlayer(
            nextId,
            club,
            division
          );



        playerDatabase.push(
          newPlayer
        );



        nextId++;



      }


    }



  });


}