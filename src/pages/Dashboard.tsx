import React, {
  useState
} from "react";


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




  const [
    showNextMatch,
    setShowNextMatch
  ] = useState(false);






  const nextMatch = game.schedule?.find(

    match =>

      !match.played &&

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


    setShowNextMatch(false);


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
">


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


</section>









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

title="👥 Socios"

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

game.lastMatch && !showNextMatch

?


<div>



<h3 className="
text-lg
font-bold
mb-4
">

Último resultado

</h3>





<p className="
text-4xl
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









<div className="
mt-5
bg-zinc-800
rounded-xl
p-4
">


<p className="
font-bold
mb-3
">

📈 Cambios del partido

</p>





{

game.matchChanges &&

<>



<p className="text-zinc-300">
🏟 Entradas vendidas: {
  game.matchChanges?.attendance ?? 0
}
</p>


<p className="text-zinc-300">
💰 Ingresos: {
  game.matchChanges?.money >= 0
  ? "+$" + game.matchChanges.money.toLocaleString()
  : "-$" + Math.abs(game.matchChanges.money).toLocaleString()
} (
{
  game.matchChanges?.money >= 0
  ? "+"
  : ""
}

{
  Math.floor(
    Math.abs(game.matchChanges?.money ?? 0) / 40
  )
}

USD)

</p>






<p className="
text-zinc-300
">

👥 Socios:

<span className="
ml-2
">

{

game.matchChanges.fans >= 0

?

`+${game.matchChanges.fans}`

:

game.matchChanges.fans

}

</span>

</p>






<p className="
text-zinc-300
">

🧠 Moral:

<span className="
ml-2
">

{

game.matchChanges.morale >= 0

?

`+${game.matchChanges.morale}%`

:

`${game.matchChanges.morale}%`

}

</span>

</p>






<p className="
text-zinc-300
">

⭐ Reputación:

<span className="
ml-2
">

{

game.matchChanges.reputation >= 0

?

`+${game.matchChanges.reputation}`

:

game.matchChanges.reputation

}

</span>

</p>




</>

}





</div>









<button

onClick={() => setShowNextMatch(true)}

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

PRÓXIMO PARTIDO

</button>




</div>








:


nextMatch && showNextMatch

?


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
bg-green-600
hover:bg-green-700
rounded-xl
py-3
font-bold
"

>

JUGAR PARTIDO

</button>



</div>








:


<div>


<p className="
text-zinc-400
">

Todavía no jugaste ningún partido.

</p>




{

nextMatch &&

<button

onClick={() => setShowNextMatch(true)}

className="
mt-5
w-full
bg-blue-600
rounded-xl
py-3
font-bold
"

>

VER PRÓXIMO PARTIDO

</button>

}



</div>



}




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

📊 Tabla de posiciones

</h2>


<div className="
flex
gap-4
text-xs
mb-4
text-zinc-400
">

<span>
🟨 Tu club
</span>

<span>
🟩 Ascenso directo
</span>

<span>
🟦 Playoff
</span>

</div>


<table className="
w-full
text-sm
">


<thead>

<tr className="
text-zinc-400
">


<th className="
text-left
">

Equipo

</th>



<th>

Pts

</th>



<th>
PJ
</th>

<th>
DG
</th>


</tr>


</thead>







<tbody>


{

game.table.map(

(team,index)=>(


<tr

key={team.name}

className={

team.name === game.club

?

"bg-yellow-900/60 border-l-4 border-yellow-400"


:

index < 2

?

"bg-green-700/40"


:

index < 6

?

"bg-blue-700/40"


:

""

}

>


<td className="
py-2
">

{index + 1}. {team.name}

</td>



<td className="
text-center
">

{team.points}

</td>



<td className="
text-center
">

{team.played}

</td>

<td className="text-center">

{

team.goalDifference >= 0

?

`+${team.goalDifference}`

:

team.goalDifference

}

</td>

</tr>


)


)

}



</tbody>


</table>


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

.map(item => (


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