import React from "react";

import type {
  GameState
} from "../store/gameStore";


import {
  playMatch
} from "../engine/gameEngine";





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






  const nextMatch = game.schedule?.find(

    match =>

      match.matchday === game.matchday &&

      (

        match.home === game.club ||

        match.away === game.club

      )

  );







  function handlePlayMatch(){



    if(!nextMatch)
      return;





    const opponentName =

      nextMatch.home === game.club

      ? nextMatch.away

      : nextMatch.home;





    const updatedGame =

      playMatch(

        game,

        opponentName

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







{/* HEADER */}

<section className="
bg-zinc-900
rounded-3xl
p-6
mb-6
">


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
mb-4
">

⚽ Partido

</h2>








{

game.lastMatch ? (



<div>


<p className="
text-3xl
font-bold
text-center
">

{game.lastMatch.homeGoals}

-

{game.lastMatch.awayGoals}

</p>



<p className="
text-center
mt-3
">

{game.lastMatch.home}

vs

{game.lastMatch.away}

</p>



<p className="
text-center
text-zinc-300
mt-3
">

{game.lastMatch.result}

</p>


</div>



)



:

nextMatch ? (



<div>


<p className="
text-lg
font-bold
">

{nextMatch.home}


<span className="
mx-2
text-zinc-400
">

vs

</span>


{nextMatch.away}


</p>





<p className="
text-sm
text-zinc-400
mt-2
">

{

nextMatch.home === game.club

?

"🏠 Juegas de local"

:

"✈️ Juegas de visitante"

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


</div>



)



:



<p className="text-zinc-400">

No hay partido programado

</p>



}




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

.map(item=>(


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


))


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

value:string | number;


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


);


}