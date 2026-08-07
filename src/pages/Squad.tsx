import players from "../database/players_clean.json";
import type { GameState } from "../store/gameStore";
import { normalizeClub } from "../engine/clubNormalize";


interface Props {
  game: GameState;
}


export default function Squad({ game }: Props) {


  const squad = players.filter(player => {

    return (
      normalizeClub(player.club) ===
      normalizeClub(game.club)
    );

  });



  console.log("CLUB DEL JUEGO:", game.club);

  console.log(
    "JUGADORES ENCONTRADOS:",
    squad.length
  );

  console.log(
    "CLUBES DISPONIBLES:",
    [...new Set(players.map(p => normalizeClub(p.club)))]
  );



  return (

    <main
      className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        mb-5
        "
      >

        Plantilla de {game.club}

      </h1>



      {
        squad.length === 0

        ?


        <p className="text-zinc-400">

          No hay jugadores en este club

        </p>


        :


        <div>


        {
          squad.map(player => (


            <div
              key={player.id}
              className="
              bg-zinc-900
              rounded-2xl
              p-4
              mb-3
              "
            >


              <h2
                className="
                text-xl
                font-bold
                "
              >

                {player.name}

              </h2>



              <div
                className="
                text-zinc-400
                text-sm
                mt-3
                space-y-1
                "
              >


                <p>
                  Posición: {player.position}
                </p>


                <p>
                  Edad: {player.age}
                </p>


                <p>
                  Pie: {player.foot}
                </p>


                <p>
                  Media: ⭐ {player.overall}
                </p>


                <p>
                  Potencial: 📈 {player.potential}
                </p>


                <p>
                  Valor: ${player.value.toLocaleString()}
                </p>


              </div>


            </div>


          ))
        }


        </div>


      }


    </main>

  );

}