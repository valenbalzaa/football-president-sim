import React from "react";

import type { GameState } from "../store/gameStore";

import {
  playMatch
} from "../engine/gameEngine";

import {
  applyEventOption
} from "../engine/eventEngine";

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






  function handleEventOption(option:any){


    const updatedGame =
      applyEventOption(
        game,
        option
      );


    setGame(updatedGame);

  }





  
  const nextMatch = game.schedule.find(
    match =>
      match.matchday === game.matchday &&
      (
        match.home === game.club ||
        match.away === game.club
      )
  );
  
  const nextOpponent =
    nextMatch
      ? (
          nextMatch.home === game.club
            ? nextMatch.away
            : nextMatch.home
        )
      : "Sin rival";







  return (

    <main className="
      min-h-screen
      bg-zinc-950
      text-white
      p-5
    ">




      {/* HEADER */}

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
            ">
              {game.division}
            </p>


          </div>




          <div className="
            text-right
          ">


            <p className="text-zinc-400">
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








      {/* ESTADISTICAS */}


      <section className="
        grid
        grid-cols-2
        gap-4
        mb-6
      ">



        <Stat
          title="💰 Dinero"
          value={
            `$${game.money.toLocaleString()}`
          }
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








      {/* TABLA */}


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



          <p className="
            text-zinc-200
            mb-5
          ">
            {game.activeEvent.description}
          </p>




          <div className="space-y-3">


          {
            game.activeEvent.options.map(

              (option,index)=>(


              <button

              key={index}


              onClick={() =>
                handleEventOption(option)
              }


              className="
                w-full
                bg-yellow-700
                hover:bg-yellow-600
                rounded-xl
                p-3
                font-bold
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




        <h2 className="text-xl font-bold mb-3">
          ⚽ Próximo partido
        </h2>
        
        <p className="text-lg font-semibold">
          {nextMatch?.home}
          <span className="mx-2 text-zinc-400">vs</span>
          {nextMatch?.away}
        </p>
        
        <p className="mt-2 text-sm text-zinc-400">
          {nextMatch?.home === game.club
            ? "🏠 Juegas de local"
            : "✈️ Juegas de visitante"}
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
          mb-4
        ">
          📰 Noticias
        </h2>




        {
          game.news
          .slice(-5)
          .reverse()
          .map(
            (item,index)=>(

            <p
            key={index}
            className="
              text-zinc-300
              mb-2
            "
            >

              • {item}

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


<p className="
text-zinc-400
">

{title}

</p>


<p className="
text-xl
font-bold
">

{value}

</p>


</div>

);


}