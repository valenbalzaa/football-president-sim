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



export default function Dashboard({
  game,
  setGame
}: Props) {



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


      {/* CABECERA */}

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
        ">


          <div>

            <p className="text-zinc-400 text-sm">
              Presidente
            </p>


            <h1 className="
              text-3xl
              font-bold
            ">
              {game.club}
            </h1>


            <p className="text-zinc-400">
              {game.division}
            </p>


          </div>


          <div className="text-right">

            <p className="text-zinc-400">
              Temporada
            </p>


            <p className="text-2xl font-bold">
              {game.season}
            </p>


          </div>


        </div>


      </section>





      {/* ESTADISTICAS */}


      <section className="
        grid
        grid-cols-2
        gap-4
        mb-6
      ">


        <Stat
          title="💰 Presupuesto"
          value={`$${game.money.toLocaleString()}`}
        />


        <Stat
          title="👥 Hinchas"
          value={game.fans}
        />


        <Stat
          title="🧠 Moral"
          value={`${game.morale}%`}
        />


        <Stat
          title="⭐ Reputación"
          value={game.reputation}
        />


      </section>





      {/* CAMPEONATO */}


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
            {game.points} pts
          </span>


          <span>
            {game.position}°
          </span>


        </div>


      </section>





      {/* EVENTO */}


      {
        game.activeEvent && (

          <section className="
            bg-yellow-900
            rounded-3xl
            p-5
            mb-6
          ">


            <h2 className="
              text-xl
              font-bold
              mb-2
            ">
              📰 {game.activeEvent.title}
            </h2>


            <p className="mb-4">
              {game.activeEvent.description}
            </p>



            <div className="
              space-y-3
            ">


            {
              game.activeEvent.options.map(
                (option,index)=>(

                  <button
                    key={index}
                    className="
                      w-full
                      bg-yellow-700
                      hover:bg-yellow-600
                      rounded-xl
                      p-3
                    "
                  >

                    {option.text}

                  </button>

                )
              )
            }


            </div>


          </section>

        )
      }







      {/* PARTIDO */}


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

          {
            clubs.find(
              c=>c.name !== game.club
            )?.name
          }


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
          "

        >

          JUGAR PARTIDO

        </button>


      </section>






      {/* NOTICIAS */}


      <section className="
        bg-zinc-900
        rounded-3xl
        p-5
        mb-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-3
        ">
          📰 Últimas noticias
        </h2>


        {
          game.news
          .slice(-5)
          .reverse()
          .map(
            (news,index)=>(

              <p
                key={index}
                className="
                  text-zinc-300
                  mb-2
                "
              >
                • {news}
              </p>

            )
          )
        }


      </section>







      {/* MENU */}


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


          {
            [
              "👥 Plantilla",
              "💼 Finanzas",
              "🔄 Mercado",
              "📅 Calendario",
              "🏟 Instalaciones",
              "📰 Noticias"
            ]
            .map(
              item=>(

                <button
                  key={item}
                  className="
                    bg-zinc-900
                    rounded-2xl
                    p-5
                    hover:bg-zinc-800
                  "
                >
                  {item}

                </button>

              )
            )

          }


        </div>


      </section>



    </main>

  );

}






function Stat({
  title,
  value
}:{
  title:string;
  value:string|number;
}){

return (

<div className="
 bg-zinc-900
 rounded-2xl
 p-4
">

<p className="text-zinc-400">
{title}
</p>


<p className="
 text-xl
 font-bold
">
{value}
</p>


</div>

)

}