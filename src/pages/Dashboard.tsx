import React from "react";
import type { GameState } from "../store/gameStore";

import {
  playMatch
} from "../engine/gameEngine";

import {
  clubs
} from "../data/clubs";



type Props = {

  game: GameState;

  setGame: React.Dispatch<
    React.SetStateAction<GameState>
  >;

};




export default function Dashboard({ game, setGame }: Props) {



  function handlePlayMatch(){


    const opponent =
      clubs.find(
        club =>
          club.name !== game.club
      );



    if(!opponent) return;



    const updatedGame =
      playMatch(
        game,
        opponent
      );



    setGame(updatedGame);

  }





  return (

    <main className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
    ">


      <section className="
        bg-zinc-900
        rounded-3xl
        p-6
        mb-6
        border
        border-zinc-800
      ">


        <div className="
          flex
          justify-between
          items-center
        ">


          <div>

            <p className="
              text-zinc-400
              text-sm
            ">
              Presidente
            </p>


            <h1 className="
              text-3xl
              font-bold
            ">
              {game.club}
            </h1>


            <p className="
              text-zinc-400
              mt-1
            ">
              {game.division}
            </p>

          </div>



          <div className="
            text-right
          ">

            <p className="
              text-zinc-400
              text-sm
            ">
              Temporada
            </p>


            <p className="
              text-2xl
              font-bold
            ">
              {game.season}
            </p>

          </div>


        </div>


      </section>





      <section className="
        grid
        grid-cols-2
        gap-4
        mb-6
      ">


        <div className="
          bg-zinc-900
          rounded-2xl
          p-4
        ">

          <p className="text-zinc-400">
            💰 Presupuesto
          </p>


          <p className="
            text-xl
            font-bold
            text-green-400
          ">
            ${game.money.toLocaleString()}
          </p>

        </div>



        <div className="
          bg-zinc-900
          rounded-2xl
          p-4
        ">

          <p className="text-zinc-400">
            👥 Hinchas
          </p>


          <p className="
            text-xl
            font-bold
          ">
            {game.fans}
          </p>

        </div>



        <div className="
          bg-zinc-900
          rounded-2xl
          p-4
        ">

          <p className="text-zinc-400">
            🧠 Moral
          </p>


          <p className="
            text-xl
            font-bold
          ">
            {game.morale}%
          </p>

        </div>



        <div className="
          bg-zinc-900
          rounded-2xl
          p-4
        ">

          <p className="text-zinc-400">
            ⭐ Reputación
          </p>


          <p className="
            text-xl
            font-bold
          ">
            {game.reputation}
          </p>

        </div>


      </section>





      <section className="
        bg-zinc-900
        rounded-3xl
        p-5
        mb-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-4
        ">
          🏆 Campeonato
        </h2>



        <div className="
          flex
          justify-between
          text-zinc-300
        ">

          <span>
            Fecha {game.matchday}
          </span>


          <span>
            Puntos: {game.points}
          </span>


          <span>
            Posición: {game.position}°
          </span>


        </div>


      </section>





      <section className="
        bg-gradient-to-r
        from-blue-900
        to-zinc-900
        rounded-3xl
        p-6
        mb-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-3
        ">
          ⚽ Próximo partido
        </h2>



        <p className="text-lg">

          {game.club}

          <span className="mx-2">
            vs
          </span>

          Rival

        </p>




        <button

          onClick={handlePlayMatch}

          className="
            mt-5
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-xl
            py-3
            font-bold
            transition
          "

        >

          JUGAR PARTIDO

        </button>



      </section>





      <section>


        <h2 className="
          text-xl
          font-bold
          mb-4
        ">
          Gestión del club
        </h2>



        <div className="
          grid
          grid-cols-2
          gap-4
        ">



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            👥 Plantilla
          </button>



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            💼 Finanzas
          </button>



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            🔄 Mercado
          </button>



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            📅 Calendario
          </button>



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            🏟 Instalaciones
          </button>



          <button className="
            bg-zinc-900
            rounded-2xl
            p-5
            hover:bg-zinc-800
          ">
            📰 Noticias
          </button>


        </div>


      </section>



    </main>

  );

}