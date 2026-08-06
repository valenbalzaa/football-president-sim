import type { GameEvent } from "../types/event";



const events: GameEvent[] = [];





export function getRandomEvent(): GameEvent | null {



  const chance = Math.random();



  if(chance > 0.7){


    if(events.length > 0){


      return events[

        Math.floor(
          Math.random() * events.length
        )

      ];


    }


  }



  return null;


}