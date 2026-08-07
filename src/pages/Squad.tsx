import {
  playerDatabase
} from "../engine/playerDatabase";

import type {
  GameState
} from "../store/gameStore";

import {
  normalizeClub
} from "../engine/clubNormalize";


interface Props {

  game: GameState;

  setPage: React.Dispatch<
    React.SetStateAction<string>
  >;

}



export default function Squad({

  game,

  setPage

}: Props) {



  const squad = playerDatabase.filter(player => {

    return (
      normalizeClub(player.club) ===
      normalizeClub(game.club)
    );

  });





  return (

    <main
      className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
      "
    >


      <button

        onClick={() => setPage("dashboard")}

        className="
        mb-5
        bg-blue-600
        hover:bg-blue-700
        rounded-xl
        px-5
        py-3
        font-bold
        "

      >

        ⬅ Volver al Dashboard

      </button>





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