import type { GameState } from "../store/gameStore";
import type { EventOption } from "../data/events";


export function applyEventOption(
  game: GameState,
  option: EventOption
): GameState {


  return {

    ...game,


    money:
      game.money +
      (option.effects.money ?? 0),



    morale:
      Math.max(
        0,
        Math.min(
          100,
          game.morale +
          (option.effects.morale ?? 0)
        )
      ),



    reputation:
      Math.max(
        0,
        game.reputation +
        (option.effects.reputation ?? 0)
      ),



    fans:
      Math.max(
        0,
        game.fans +
        (option.effects.fans ?? 0)
      ),



    // Cerramos el evento
    activeEvent:null,


    news:[
      ...game.news,

      `Decisión tomada: ${option.text}`

    ]

  };


}