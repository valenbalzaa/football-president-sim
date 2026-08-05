import type { GameState } from "../store/gameStore";


type Props = {
  game: GameState;
};


export default function Dashboard({game}: Props) {

  return (
    <main className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
    ">

      <h1 className="
        text-3xl
        font-bold
        mb-6
      ">
        Panel del Presidente
      </h1>


      <div className="
        bg-zinc-900
        rounded-2xl
        p-5
        space-y-3
      ">

        <h2 className="text-xl font-bold">
          {game.club}
        </h2>


        <p className="text-zinc-400">
          Temporada {game.season}
        </p>


        <p>
          💰 Presupuesto:
          <span className="text-green-400 ml-2">
            ${game.money}
          </span>
        </p>


        <p>
          🎩 Rol:
          <span className="ml-2">
            {game.mode}
          </span>
        </p>

      </div>


      <div className="
        mt-6
        grid
        grid-cols-2
        gap-4
      ">

        <button className="bg-zinc-900 rounded-xl p-5">
          Plantilla
        </button>

        <button className="bg-zinc-900 rounded-xl p-5">
          Finanzas
        </button>

        <button className="bg-zinc-900 rounded-xl p-5">
          Mercado
        </button>

        <button className="bg-zinc-900 rounded-xl p-5">
          Calendario
        </button>

      </div>


    </main>
  );
}